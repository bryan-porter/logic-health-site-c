export function ArticleJsonLd(props: {
  url: string; title: string; description?: string; image?: string;
  datePublished?: string; authorName: string;
}) {
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: props.url,
    headline: props.title,
    description: props.description,
    image: props.image ? [props.image] : undefined,
    datePublished: props.datePublished,
    author: { '@type': 'Organization', name: props.authorName },
    publisher: { '@type': 'Organization', name: 'Logic Health Management' },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }} />;
}
