const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function getFileSizeInKB(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size / 1024;
}

function getGzippedSizeInKB(filePath) {
  const content = fs.readFileSync(filePath);
  const gzipped = zlib.gzipSync(content);
  return gzipped.length / 1024;
}

function findJSFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findJSFiles(filePath, fileList);
    } else if (file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

const staticDir = path.join(__dirname, '../.next/static');
const jsFiles = findJSFiles(staticDir);

let totalGzipped = 0;
let totalUncompressed = 0;

jsFiles.forEach(file => {
  const gzipped = getGzippedSizeInKB(file);
  const uncompressed = getFileSizeInKB(file);
  totalGzipped += gzipped;
  totalUncompressed += uncompressed;
});

console.log('Checking bundle sizes...');
console.log(`Total uncompressed JS: ${totalUncompressed.toFixed(2)} KB`);
console.log(`Total gzipped JS: ${totalGzipped.toFixed(2)} KB`);

const BUDGET_KB = 300;

if (totalGzipped > BUDGET_KB) {
  console.log(`❌ Bundle size exceeds ${BUDGET_KB}KB budget`);
  process.exit(1);
} else {
  console.log(`✅ Bundle size is within ${BUDGET_KB}KB budget`);
  process.exit(0);
}
