export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white px-6 py-16 text-center">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 text-neutral-700">
          We couldn&apos;t find the page you were looking for. Check the URL or return to the site to continue.
        </p>
      </div>
    </section>
  );
}
