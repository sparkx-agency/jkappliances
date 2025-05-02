"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface PostalCodeSearchProps {
  onSearch?: (postalCode: string) => void;
}

const PostalCodeSearch = ({ onSearch }: PostalCodeSearchProps) => {
  const [postalCode, setPostalCode] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<'available' | 'unavailable' | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!postalCode.trim()) return;
    
    // Show loading state
    setIsChecking(true);
    setResult(null);
    
    // Simulate API call to check postal code
    setTimeout(() => {
      // This is where you would normally check against a database of service areas
      // For demo purposes, we'll just check if the postal code starts with M or L
      const firstChar = postalCode.trim().toUpperCase()[0];
      const isAvailable = firstChar === 'M' || firstChar === 'L';
      
      setResult(isAvailable ? 'available' : 'unavailable');
      setIsChecking(false);
      
      if (onSearch) {
        onSearch(postalCode);
      }
    }, 1000);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Enter postal code (e.g. M5V 2K1)"
            className="flex-1 py-3 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            maxLength={7}
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isChecking || !postalCode.trim()}
            className="py-3 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-70"
          >
            {isChecking ? 'Checking...' : 'Check Availability'}
          </motion.button>
        </div>
      </form>
      
      {result && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg ${
            result === 'available' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {result === 'available' ? (
            <>
              <h4 className="font-medium mb-1">Service Available!</h4>
              <p className="text-sm">
                Great news! We provide appliance repair services in your area. 
                Call us at (647) 560-8966 or book online to schedule an appointment.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-medium mb-1">Service Not Available</h4>
              <p className="text-sm">
                We do not currently service this postal code. Please contact us to inquire
                about possible service options or check another postal code.
              </p>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default PostalCodeSearch; 