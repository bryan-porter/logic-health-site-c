// components/OrganizationSchema.tsx
export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Logic Health Management',
    url: 'https://logichm.com',
    logo: 'https://logichm.com/logo.png',
    mainEntityOfPage: {
      '@type': 'WebSite',
      url: 'https://logichm.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://logichm.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
