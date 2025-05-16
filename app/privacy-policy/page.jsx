import React from 'react'
import Head from 'next/head';
export const metadata = {
  title: 'Privacy Policy',
  description: 'Learn how we collect, use, and protect your personal information at freecourse.live.',
};
function page() {
    
  return (
   <main className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-4">Last updated: May 16, 2025</p>

      <p className="mb-4">
        At <strong>freecourse.live</strong>, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside ml-4 mb-4">
        <li>Personal information (e.g., name, email) if you contact us.</li>
        <li>Usage data (e.g., pages visited, time spent).</li>
        <li>Cookies and tracking technologies.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to operate, maintain, and improve our website. This includes sending updates, responding to inquiries, and monitoring site performance.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Cookies</h2>
      <p className="mb-4">
        We use cookies to improve user experience, analyze site traffic, and understand user behavior. You can disable cookies through your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
      <p className="mb-4">
        We may use services like Google Analytics. These third parties have their own privacy policies and we encourage you to review them.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Security</h2>
      <p className="mb-4">
        We implement reasonable measures to protect your data, but no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        You can request access to or deletion of your personal data by contacting us at: <a href="mailto:contact@freecourse.live" className="text-blue-600 underline">contact@freecourse.live</a>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy at any time. We encourage users to review it periodically.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p>
        If you have any questions, email us at: <a href="mailto:contact@freecourse.live" className="text-blue-600 underline">contact@freecourse.live</a>
      </p>
    </main>
  )
}

export default page
