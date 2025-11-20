// components/OrganizationSchema.tsx
export default function OrganizationSchema() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://logichm.com/#organization',
    name: 'Logic Health Management',
    url: 'https://logichm.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://logichm.com/apple-touch-icon.png',
      width: 180,
      height: 180,
    },
    sameAs: [
      'https://www.linkedin.com/company/logic-health-management/',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'hello@logichm.com',
        availableLanguage: ['English'],
      },
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://logichm.com/#website',
    url: 'https://logichm.com',
    name: 'Logic Health Management',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
