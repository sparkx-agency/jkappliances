import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Sitemap | JK Appliances Repair',
  description: 'Browse all pages on our website organized by category.',
};

export default function SitemapPage() {
  // Define sitemap categories and links
  const sitemapData = [
    {
      category: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Contact', url: '/contact' },
        { name: 'Book a Repair', url: '/book' },
        { name: 'FAQ', url: '/faq' },
        { name: 'Warranty', url: '/warranty' },
        { name: 'Reviews', url: '/reviews' },
        { name: 'Coupons', url: '/coupons' },
        { name: 'Newsletter', url: '/newsletter' },
      ],
    },
    {
      category: 'Services',
      links: [
        { name: 'Refrigerator Repair', url: '/services/refrigerator-repair' },
        { name: 'Washer Repair', url: '/services/washer-repair' },
        { name: 'Dryer Repair', url: '/services/dryer-repair' },
        { name: 'Stove Repair', url: '/services/stove-repair' },
        { name: 'Oven Repair', url: '/services/oven-repair' },
        { name: 'Dishwasher Repair', url: '/services/dishwasher-repair' },
        { name: 'Freezer Repair', url: '/services/freezer-repair' },
        { name: 'Gas Appliance Repair', url: '/services/gas-appliance-repair' },
        { name: 'Installation Services', url: '/services/installation-services' },
        { name: 'Maintenance Services', url: '/services/maintenance-services' },
      ],
    },
    {
      category: 'Brands',
      links: [
        { name: 'Samsung', url: '/brands/samsung' },
        { name: 'LG', url: '/brands/lg' },
        { name: 'Whirlpool', url: '/brands/whirlpool' },
        { name: 'GE', url: '/brands/ge' },
        { name: 'Maytag', url: '/brands/maytag' },
        { name: 'Frigidaire', url: '/brands/frigidaire' },
        { name: 'KitchenAid', url: '/brands/kitchenaid' },
        { name: 'Kenmore', url: '/brands/kenmore' },
        { name: 'Bosch', url: '/brands/bosch' },
        { name: 'Electrolux', url: '/brands/electrolux' },
        { name: 'Miele', url: '/brands/miele' },
        { name: 'Sub-Zero', url: '/brands/sub-zero' },
        { name: 'Wolf', url: '/brands/wolf' },
        { name: 'Viking', url: '/brands/viking' },
      ],
    },
    {
      category: 'Service Areas',
      links: [
        { name: 'Toronto', url: '/areas/toronto' },
        { name: 'North York', url: '/areas/north-york' },
        { name: 'Etobicoke', url: '/areas/etobicoke' },
        { name: 'Scarborough', url: '/areas/scarborough' },
        { name: 'Mississauga', url: '/areas/mississauga' },
        { name: 'Brampton', url: '/areas/brampton' },
        { name: 'Markham', url: '/areas/markham' },
        { name: 'York', url: '/areas/york' },
        { name: 'Vaughan', url: '/areas/vaughan' },
        { name: 'Richmond Hill', url: '/areas/richmond-hill' },
        { name: 'Oakville', url: '/areas/oakville' },
        { name: 'Oshawa', url: '/areas/oshawa' },
      ],
    },
    {
      category: 'Additional Service Areas',
      links: [
        { name: 'Ajax', url: '/areas/ajax' },
        { name: 'Aurora', url: '/areas/aurora' },
        { name: 'Bowmanville', url: '/areas/bowmanville' },
        { name: 'Burlington', url: '/areas/burlington' },
        { name: 'Caledon', url: '/areas/caledon' },
        { name: 'Cambridge', url: '/areas/cambridge' },
        { name: 'Claremont', url: '/areas/claremont' },
        { name: 'Clarington', url: '/areas/clarington' },
        { name: 'Downtown Toronto', url: '/areas/downtown-toronto' },
        { name: 'East York', url: '/areas/east-york' },
        { name: 'Georgetown', url: '/areas/georgetown' },
        { name: 'Georgina', url: '/areas/georgina' },
        { name: 'Halton Hills', url: '/areas/halton-hills' },
        { name: 'King City', url: '/areas/king-city' },
        { name: 'Kleinburg', url: '/areas/kleinburg' },
        { name: 'Milton', url: '/areas/milton' },
        { name: 'Newmarket', url: '/areas/newmarket' },
        { name: 'Pickering', url: '/areas/pickering' },
        { name: 'Stouffville', url: '/areas/stouffville' },
        { name: 'Thornhill', url: '/areas/thornhill' },
        { name: 'Whitby', url: '/areas/whitby' },
        { name: 'Woodbridge', url: '/areas/woodbridge' },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs />
        
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Sitemap</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {sitemapData.map((category) => (
            <div 
              key={category.category} 
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-4">
                {category.category}
              </h2>
              
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.url}>
                    <Link 
                      href={link.url}
                      className="text-gray-700 hover:text-blue-600 hover:underline transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 