import React from 'react';

export const metadata = {
  title: 'Privacy Policy | JK Appliance Repair',
  description: 'Read our Privacy Policy to learn how JK Appliance Repair collects, uses, and protects your personal information in Canada.'
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#f5f5f7] pt-24 pb-24 min-h-screen">
      <section className="bg-white max-w-3xl mx-auto rounded-3xl shadow-md p-8">
        <h1 className="text-4xl font-semibold text-[#1d1d1f] mb-8">Privacy Policy</h1>
        <p className="mb-6 text-[#424245]">JK Appliance Repair ("we", "us", or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information in accordance with Canadian privacy laws.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-6 text-[#424245]">
          <li><b>Personal Information:</b> Name, address, phone number, email, and other contact details you provide.</li>
          <li><b>Service Details:</b> Information related to the appliance repair services you request.</li>
          <li><b>Payment Information:</b> Payment details for invoicing and billing purposes.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-6 text-[#424245]">
          <li>To schedule and deliver appliance repair services.</li>
          <li>To communicate with you regarding appointments, service updates, and customer support.</li>
          <li>To process payments and maintain accurate records.</li>
          <li>To address inquiries, feedback, and complaints.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
        <p className="mb-6 text-[#424245]">We implement appropriate security measures to protect your personal information from unauthorized access, loss, misuse, or disclosure. Our staff are trained to handle your information confidentially.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Retention</h2>
        <p className="mb-6 text-[#424245]">We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Disclosure</h2>
        <p className="mb-6 text-[#424245]">We do not sell, trade, or transfer your personal information to third parties without your consent, except as necessary to deliver our services (e.g., coordinating repairs with manufacturers or suppliers).</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
        <ul className="list-disc pl-6 mb-6 text-[#424245]">
          <li><b>Access:</b> You may request access to the personal information we hold about you.</li>
          <li><b>Correction:</b> You may request corrections to your personal information if it is inaccurate or incomplete.</li>
          <li><b>Withdraw Consent:</b> You may withdraw your consent for us to use your information, subject to legal or contractual restrictions.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies & Analytics</h2>
        <p className="mb-6 text-[#424245]">Our website may use cookies and analytics tools to enhance your browsing experience and help us improve our services. You can adjust your browser settings to refuse cookies if you prefer.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to this Policy</h2>
        <p className="mb-6 text-[#424245]">We may update this Privacy Policy from time to time. The latest version will always be available on our website.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
        <p className="mb-2 text-[#424245]">If you have any questions, concerns, or requests regarding your privacy or this policy, please contact us:</p>
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