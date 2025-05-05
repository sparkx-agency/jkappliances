import Link from 'next/link';
import { Metadata } from 'next';
import { MdErrorOutline } from 'react-icons/md';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Page Not Found | JK Appliance Repair',
  description: 'The page you are looking for does not exist. Return to our homepage for appliance repair services in Toronto and GTA.',
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <MdErrorOutline className="text-red-500 text-8xl" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Button href="/" variant="primary" className="mx-auto">
            Return to Homepage
          </Button>
          
          <div className="pt-8 border-t border-gray-200 mt-8">
            <h2 className="text-xl font-semibold mb-4">Popular Services</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/refrigerator-repair" 
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Refrigerator Repair
              </Link>
              <Link 
                href="/washer-repair" 
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Washer Repair
              </Link>
              <Link 
                href="/dryer-repair" 
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Dryer Repair
              </Link>
              <Link 
                href="/dishwasher-repair" 
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Dishwasher Repair
              </Link>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-500">
              If you believe there should be a page here, please <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 