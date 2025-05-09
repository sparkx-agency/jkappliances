import Script from 'next/script';

interface ApplianceRepairStructuredDataProps {
  serviceType: string;
  serviceDescription: string;
  brandName?: string;
}

export default function ApplianceRepairStructuredData({
  serviceType,
  serviceDescription,
  brandName,
}: ApplianceRepairStructuredDataProps) {
  return (
    <Script
      id="schema-repair-service"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          'serviceType': serviceType,
          'description': serviceDescription,
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'JK Appliances',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Toronto',
              'addressRegion': 'ON',
              'addressCountry': 'CA'
            }
          },
          'areaServed': {
            '@type': 'GeoCircle',
            'geoMidpoint': {
              '@type': 'GeoCoordinates',
              'latitude': 43.6532,
              'longitude': -79.3832
            },
            'geoRadius': '50km'
          },
          'offers': {
            '@type': 'Offer',
            'availability': 'https://schema.org/InStock',
            'priceSpecification': {
              '@type': 'PriceSpecification',
              'priceCurrency': 'CAD'
            }
          },
          ...(brandName && {
            'itemOffered': {
              '@type': 'Product',
              'brand': {
                '@type': 'Brand',
                'name': brandName
              }
            }
          })
        })
      }}
    />
  );
} 