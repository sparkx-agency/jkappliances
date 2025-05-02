"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const appliances = [
  { id: 'refrigerator', name: 'Refrigerator' },
  { id: 'washer', name: 'Washing Machine' },
  { id: 'dryer', name: 'Dryer' },
  { id: 'dishwasher', name: 'Dishwasher' },
  { id: 'oven', name: 'Oven/Range' },
  { id: 'microwave', name: 'Microwave' },
  { id: 'freezer', name: 'Freezer' },
  { id: 'other', name: 'Other Appliance' },
];

// Time slots for booking
const timeSlots = [
  { id: 'morning', name: 'Morning (8 AM - 12 PM)' },
  { id: 'afternoon', name: 'Afternoon (12 PM - 4 PM)' },
  { id: 'evening', name: 'Evening (4 PM - 8 PM)' },
];

// Validation patterns
const patterns = {
  name: /^[a-zA-Z\s]{2,50}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^[\d\s()+-]{10,15}$/,
  postalCode: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
};

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    appliance: '',
    model: '',
    issueDescription: '',
    preferredDate: '',
    preferredTime: '',
    urgentRepair: false,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  // Comment out unused variables on line 55
  // const [selectedTime, setSelectedTime] = useState<string>('');

  // Calculate estimated price based on appliance type and urgent repair
  useEffect(() => {
    if (formData.appliance) {
      const basePrices: Record<string, number> = {
        refrigerator: 150,
        washer: 120,
        dryer: 100,
        dishwasher: 110,
        oven: 130,
        microwave: 90,
        freezer: 140,
        other: 100,
      };
      
      let price = basePrices[formData.appliance] || 100;
      
      // Add urgent fee if applicable
      if (formData.urgentRepair) {
        price += 50;
      }
      
      setEstimatedPrice(price);
    } else {
      setEstimatedPrice(null);
    }
  }, [formData.appliance, formData.urgentRepair]);

  const validateField = (name: string, value: string | boolean): string => {
    if (typeof value === 'boolean') return '';
    
    // Skip validation for optional fields if empty
    if (value === '' && name !== 'name' && name !== 'email' && name !== 'phone' && 
        name !== 'address' && name !== 'appliance' && name !== 'issueDescription') {
      return '';
    }
    
    switch (name) {
      case 'name':
        if (!value) return 'Name is required';
        if (!patterns.name.test(value)) return 'Please enter a valid name';
        return '';
      case 'email':
        if (!value) return 'Email is required';
        if (!patterns.email.test(value)) return 'Please enter a valid email address';
        return '';
      case 'phone':
        if (!value) return 'Phone number is required';
        if (!patterns.phone.test(value)) return 'Please enter a valid phone number';
        return '';
      case 'address':
        if (!value) return 'Address is required';
        if (value.length < 5) return 'Please enter a complete address';
        return '';
      case 'city':
        if (!value && touched.city) return 'City is required';
        return '';
      case 'postalCode':
        if (!value) return '';
        if (!patterns.postalCode.test(value)) return 'Please enter a valid postal code (e.g., M5V 2H1)';
        return '';
      case 'appliance':
        if (!value) return 'Please select an appliance';
        return '';
      case 'issueDescription':
        if (!value) return 'Please describe the issue';
        if (value.length < 10) return 'Please provide more details about the issue';
        return '';
      case 'preferredDate':
        if (!value && touched.preferredDate) return 'Please select a preferred date';
        return '';
      case 'preferredTime':
        if (!value && touched.preferredTime) return 'Please select a preferred time';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
    
    // Mark field as touched
    if (!touched[name]) {
      setTouched(prev => ({
        ...prev,
        [name]: true
      }));
    }
    
    // Validate field
    const errorMessage = validateField(name, newValue);
    setErrors(prev => ({
      ...prev,
      [name]: errorMessage
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    // Mark field as touched
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validate field
    const errorMessage = validateField(name, newValue);
    setErrors(prev => ({
      ...prev,
      [name]: errorMessage
    }));
  };

  const validateStep = (step: number): boolean => {
    let isValid = true;
    const newErrors: Record<string, string> = {};
    
    if (step === 1) {
      // Validate customer info fields
      for (const field of ['name', 'email', 'phone', 'address', 'city', 'postalCode']) {
        const error = validateField(field, formData[field as keyof typeof formData] as string);
        if (error) {
          newErrors[field] = error;
          isValid = false;
        }
      }
    } else if (step === 2) {
      // Validate service info fields
      for (const field of ['appliance', 'issueDescription']) {
        const error = validateField(field, formData[field as keyof typeof formData] as string);
        if (error) {
          newErrors[field] = error;
          isValid = false;
        }
      }
    }
    
    setErrors(newErrors);
    
    // Mark fields as touched
    const newTouched: Record<string, boolean> = { ...touched };
    Object.keys(newErrors).forEach(field => {
      newTouched[field] = true;
    });
    setTouched(newTouched);
    
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation
    if (!validateStep(currentStep)) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        appliance: '',
        model: '',
        issueDescription: '',
        preferredDate: '',
        preferredTime: '',
        urgentRepair: false,
      });
      
      setCurrentStep(1);
      setTouched({});
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  // Render input field with error handling
  const renderField = (
    label: string,
    name: keyof typeof formData,
    type: string = 'text',
    placeholder: string = '',
    required: boolean = true,
    options?: { id: string, name: string }[]
  ) => {
    const error = errors[name];
    const isTouched = touched[name];
    
    return (
      <div className="mb-6">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        
        {type === 'select' && options ? (
          <select
            id={name}
            name={name}
            value={formData[name] as string}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 text-base rounded-xl border ${
              error && isTouched ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-gray-900 focus:border-gray-900'
            } outline-none transition-all shadow-sm appearance-none bg-white`}
            required={required}
            style={{ 
              background: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem'
            }}
          >
            <option value="">{`Select ${label.toLowerCase()}`}</option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        ) : type === 'textarea' ? (
          <textarea
            id={name}
            name={name}
            value={formData[name] as string}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            rows={4}
            className={`w-full px-4 py-3 text-base rounded-xl border ${
              error && isTouched ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-gray-900 focus:border-gray-900'
            } outline-none transition-all shadow-sm`}
            required={required}
          ></textarea>
        ) : type === 'checkbox' ? (
          <div className="flex items-center py-3">
            <input
              type="checkbox"
              id={name}
              name={name}
              checked={formData[name] as boolean}
              onChange={handleChange}
              className="h-5 w-5 text-gray-900 border-gray-300 rounded-md focus:ring-gray-900"
            />
            <label htmlFor={name} className="ml-3 block text-base text-gray-700">
              {placeholder}
            </label>
          </div>
        ) : type === 'date' ? (
          <input
            type={type}
            id={name}
            name={name}
            value={formData[name] as string}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            min={new Date().toISOString().split('T')[0]}
            className={`w-full px-4 py-3 text-base rounded-xl border ${
              error && isTouched ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-gray-900 focus:border-gray-900'
            } outline-none transition-all shadow-sm`}
            required={required}
          />
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            value={formData[name] as string}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            min={type === 'date' ? new Date().toISOString().split('T')[0] : undefined}
            className={`w-full px-4 py-3 text-base rounded-xl border ${
              error && isTouched ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-gray-900 focus:border-gray-900'
            } outline-none transition-all shadow-sm`}
            required={required}
          />
        )}
        
        {error && isTouched && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  };

  // Render customer info form (Step 1)
  const renderCustomerInfoForm = () => (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {renderField('Full Name', 'name', 'text', 'John Smith')}
        {renderField('Email Address', 'email', 'email', 'you@example.com')}
        {renderField('Phone Number', 'phone', 'tel', '(647) 555-1234')}
        {renderField('Service Address', 'address', 'text', '123 Main St')}
        {renderField('City', 'city', 'text', 'Toronto')}
        {renderField('Postal Code', 'postalCode', 'text', 'M5V 2H1', false)}
      </div>
      
      <div className="flex justify-center sm:justify-end mt-10">
        <Button
          onClick={nextStep}
          disabled={isLoading}
          className="w-full sm:w-auto py-3 px-8 text-base rounded-full bg-gray-900 hover:bg-gray-800 focus:ring-gray-900"
        >
          Next Step
        </Button>
      </div>
    </>
  );

  // Render service info form (Step 2)
  const renderServiceInfoForm = () => (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {renderField('Appliance Type', 'appliance', 'select', '', true, appliances)}
        {renderField('Model/Brand (if known)', 'model', 'text', 'e.g., Samsung RF28R7351', false)}
        {renderField('Issue Description', 'issueDescription', 'textarea', 'Please describe the problem you\'re experiencing with your appliance')}
        {renderField('Preferred Date', 'preferredDate', 'date', '', false)}
        {renderField('Preferred Time', 'preferredTime', 'select', '', false, timeSlots)}
        
        <div className="sm:col-span-2 mt-2">
          {renderField('', 'urgentRepair', 'checkbox', 'This is an urgent repair (additional $50 fee)', false)}
        </div>
      </div>
      
      {estimatedPrice && (
        <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <h4 className="font-medium text-gray-900 text-lg">Estimated Service Fee</h4>
          <p className="text-gray-600">Based on your selection, the estimated cost is:</p>
          <p className="text-gray-900 font-semibold text-2xl mt-2">${estimatedPrice.toFixed(2)}</p>
          <p className="text-xs text-gray-500 mt-3">Note: Final pricing may vary based on the actual diagnosis.</p>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row sm:justify-between mt-10 gap-4">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={isLoading}
          className="w-full sm:w-auto py-3 px-8 text-base rounded-full border-gray-300 text-gray-900 hover:bg-gray-50 order-2 sm:order-1"
        >
          Back
        </Button>
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto py-3 px-8 text-base rounded-full bg-gray-900 hover:bg-gray-800 focus:ring-gray-900 order-1 sm:order-2"
        >
          {isLoading ? 'Processing...' : 'Book Now'}
        </Button>
      </div>
    </>
  );

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            >
              Book Your Repair
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Fill out the form below to schedule a service appointment.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 sm:p-10"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-gray-50 mb-8">
                  <svg className="h-12 w-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">Booking Received</h3>
                <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
                  Thank you for your booking request. We&apos;ll contact you shortly to confirm your appointment.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                  className="py-3 px-8 text-base rounded-full border-gray-300 text-gray-900 hover:bg-gray-50"
                >
                  Book Another Service
                </Button>
              </div>
            ) : (
              <div>
                {/* Step indicators */}
                <div className="mb-12">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center w-full max-w-xs mx-auto">
                      <div className={`flex-1 flex flex-col items-center ${currentStep >= 1 ? 'text-gray-900' : 'text-gray-400'}`}>
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 1 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'} mb-2`}>
                          1
                        </div>
                        <span className="text-sm font-medium">Customer Info</span>
                      </div>
                      
                      <div className={`w-full h-0.5 mx-2 ${currentStep >= 2 ? 'bg-gray-900' : 'bg-gray-200'}`} />
                      
                      <div className={`flex-1 flex flex-col items-center ${currentStep >= 2 ? 'text-gray-900' : 'text-gray-400'}`}>
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 2 ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'} mb-2`}>
                          2
                        </div>
                        <span className="text-sm font-medium">Service Details</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {currentStep === 1 && renderCustomerInfoForm()}
                  {currentStep === 2 && renderServiceInfoForm()}
                </form>
              </div>
            )}
          </motion.div>
          
          <div className="mt-10 text-center">
            <p className="text-base text-gray-600">
              Need emergency service? Call us directly at <a href="tel:647-560-8966" className="text-gray-900 font-medium hover:underline active:text-gray-700 text-lg">647-560-8966</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;