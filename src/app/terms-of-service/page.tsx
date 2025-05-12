import React from 'react';

export const metadata = {
  title: 'Terms of Service | JK Appliance Repair',
  description: 'Read our Terms of Service to understand the conditions for using JK Appliance Repair services in Canada.'
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#f5f5f7] pt-24 pb-24 min-h-screen">
      <section className="bg-white max-w-3xl mx-auto rounded-3xl shadow-md p-8">
        <h1 className="text-4xl font-semibold text-[#1d1d1f] mb-8">Terms of Service</h1>
        <p className="mb-6 text-[#424245]">These Terms of Service ("Terms") govern your use of JK Appliance Repair services ("we", "us", or "our"). By booking or receiving our services, you agree to these Terms. Please read them carefully.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Service Calls & Fees</h2>
        <ul className="list-disc pl-6 mb-6 text-[#424245]">
          <li>A non-refundable diagnostic/service call fee is charged for all non-warranty visits. This fee will be quoted before our visit and is due whether or not you proceed with repairs.</li>
          <li>If you approve the recommended repair, the diagnostic fee may be credited toward the total repair cost.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Payment Terms</h2>
        <ul className="list-disc pl-6 mb-6 text-[#424245]">
          <li>Payment is due upon completion of services unless otherwise agreed in writing.</li>
          <li>Accepted payment methods include debit, credit card, or e-transfer. Unpaid balances may incur interest and collection costs.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Warranty</h2>
        <ul className="list-disc pl-6 mb-6 text-[#424245]">
          <li>We provide a limited warranty on parts and labour for repairs performed by JK Appliance Repair. The duration and terms of the warranty will be specified on your invoice.</li>
          <li>Warranty does not cover issues resulting from misuse, unauthorized repairs, or commercial use unless otherwise stated.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitation of Liability</h2>
        <ul className="list-disc pl-6 mb-6 text-[#424245]">
          <li>We are not liable for indirect, incidental, or consequential damages, including but not limited to property damage, loss of food, or business interruption.</li>
          <li>Our liability is limited to the amount paid for the service provided.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Moving Appliances & Risks</h2>
        <ul className="list-disc pl-6 mb-6 text-[#424245]">
          <li>Moving appliances may involve risks of damage to the appliance or surrounding property. By allowing our technician to move your appliance, you accept these risks and agree to hold us harmless for any resulting damage, except in cases of proven negligence.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cancellations & Missed Appointments</h2>
        <ul className="list-disc pl-6 mb-6 text-[#424245]">
          <li>Please provide at least 3 hours' notice to cancel or reschedule an appointment. Missed appointments or late cancellations may be subject to a fee.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
        <p className="mb-6 text-[#424245]">We may update these Terms of Service from time to time. The latest version will always be available on our website. Continued use of our services constitutes acceptance of the updated Terms.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
        <p className="mb-2 text-[#424245]">If you have any questions about these Terms, please contact us:</p>
        <ul className="mb-6 text-[#424245]">
          <li>Email: <a href="mailto:info@jkappliances.ca" className="text-blue-600 underline">info@jkappliances.ca</a></li>
          <li>Phone: <a href="tel:+16475608966" className="text-blue-600 underline">(647) 560-8966</a></li>
          <li>Mail: 8 Lorraine Cres, Brampton, ON L6S 2R7, Canada</li>
        </ul>
        <p className="text-[#86868b] text-sm">Last updated: {new Date().toLocaleDateString('en-CA')}</p>
      </section>
    </div>
  );
} 