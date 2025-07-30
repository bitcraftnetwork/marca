"use client";

import {
  Mail,
  Globe,
  Calendar,
  Shield,
  Eye,
  Users,
  FileText,
  AlertCircle,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

function PrivacyPolicy() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastUpdated = "July 27, 2025";
  const websiteUrl = "https://docversemedia.com";
  const contactEmail = "privacy@docversemedia.com";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-2 sm:mb-4">
              Docverse Media
            </p>
            <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-500">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="lg:flex lg:gap-8">
          {/* Mobile Table of Contents Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={toggleMobileMenu}
              className="flex items-center justify-between w-full bg-white rounded-lg shadow-sm border p-4 text-left"
            >
              <span className="font-medium text-gray-900">
                Table of Contents
              </span>
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-500" />
              ) : (
                <Menu className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="mt-2 bg-white rounded-lg shadow-sm border p-4">
                <nav className="space-y-2">
                  <a
                    href="#information-we-collect"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    1. Information We Collect
                  </a>
                  <a
                    href="#how-we-use-information"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    2. How We Use Your Information
                  </a>
                  <a
                    href="#information-protection"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    3. How We Protect Your Information
                  </a>
                  <a
                    href="#sharing-information"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    4. Sharing Your Information
                  </a>
                  <a
                    href="#third-party-links"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    5. Third-Party Links
                  </a>
                  <a
                    href="#your-rights"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    6. Your Rights
                  </a>
                  <a
                    href="#consent"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    7. Consent
                  </a>
                  <a
                    href="#policy-changes"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    8. Changes to This Privacy Policy
                  </a>
                  <a
                    href="#contact-us"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    9. Contact Us
                  </a>
                </nav>
              </div>
            )}
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
            <div className="sticky top-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  <a
                    href="#information-we-collect"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                  >
                    1. Information We Collect
                  </a>
                  <a
                    href="#how-we-use-information"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                  >
                    2. How We Use Your Information
                  </a>
                  <a
                    href="#information-protection"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                  >
                    3. How We Protect Your Information
                  </a>
                  <a
                    href="#sharing-information"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                  >
                    4. Sharing Your Information
                  </a>
                  <a
                    href="#third-party-links"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                  >
                    5. Third-Party Links
                  </a>
                  <a
                    href="#your-rights"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                  >
                    6. Your Rights
                  </a>
                  <a
                    href="#consent"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                  >
                    7. Consent
                  </a>
                  <a
                    href="#policy-changes"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                  >
                    8. Changes to This Privacy Policy
                  </a>
                  <a
                    href="#contact-us"
                    className="block text-sm text-blue-600 hover:text-blue-800 transition-colors py-1"
                  >
                    9. Contact Us
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6 lg:p-8 xl:p-12">
              {/* Introduction */}
              <div className="mb-8 sm:mb-12">
                <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Introduction
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  At Docverse Media, accessible from{" "}
                  <span className="font-medium text-blue-600 break-all">
                    {websiteUrl}
                  </span>
                  , one of our main priorities is the privacy of our visitors.
                  This Privacy Policy document contains the types of information
                  that is collected and recorded by Docverse Media and how we
                  use it.
                </p>
              </div>

              {/* Section 1 */}
              <section
                id="information-we-collect"
                className="mb-8 sm:mb-12 scroll-mt-6"
              >
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    1. Information We Collect
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  We collect a variety of personal information in order to
                  provide and improve our services, including:
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      Personal Identification Information
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Name, email address, phone number, mailing address, and
                      other contact details.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      Non-Personal Identification Information
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Browser type, device type, IP address, referral/exit
                      pages, and date/time stamps.
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      Cookies and Tracking Technologies
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700">
                      We may use cookies and similar technologies to track user
                      experience and improve our services.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section
                id="how-we-use-information"
                className="mb-8 sm:mb-12 scroll-mt-6"
              >
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    2. How We Use Your Information
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  The information we collect is used in the following ways:
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-700">
                      To personalize your experience and respond to your
                      customer service requests
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-700">
                      To improve our website and services based on user feedback
                      and behavior
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-700">
                      To send periodic emails regarding updates, promotions, or
                      other products/services
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-700">
                      To process transactions and provide customer support
                    </span>
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section
                id="information-protection"
                className="mb-8 sm:mb-12 scroll-mt-6"
              >
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    3. How We Protect Your Information
                  </h2>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 mb-4">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-gray-700">
                      We implement various security measures to maintain the
                      safety of your personal information. However, please
                      remember that no data transmission over the internet is
                      100% secure, and we cannot guarantee the absolute security
                      of your information.
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Our security measures include encryption, secure servers,
                  regular security audits, and restricted access to personal
                  information on a need-to-know basis.
                </p>
              </section>

              {/* Section 4 */}
              <section
                id="sharing-information"
                className="mb-8 sm:mb-12 scroll-mt-6"
              >
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    4. Sharing Your Information
                  </h2>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 mb-4">
                  <p className="text-xs sm:text-sm text-gray-700 font-medium">
                    We do not sell, trade, or rent users' personal
                    identification information to others.
                  </p>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We may share non-personal, aggregated data with third-party
                  partners for analytical purposes to help us improve our
                  services. Any sharing of data is done in compliance with
                  applicable privacy laws and regulations.
                </p>
              </section>

              {/* Section 5 */}
              <section
                id="third-party-links"
                className="mb-8 sm:mb-12 scroll-mt-6"
              >
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    5. Third-Party Links
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Our website may contain links to third-party sites. These
                  sites have separate privacy policies, and we do not assume any
                  responsibility or liability for their content or practices. We
                  encourage you to review the privacy policies of any
                  third-party sites you visit.
                </p>
              </section>

              {/* Section 6 */}
              <section id="your-rights" className="mb-8 sm:mb-12 scroll-mt-6">
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    6. Your Rights
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      Access & Update
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Access and update your personal information at any time
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      Data Deletion
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Request the deletion of your personal data
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      Opt-out
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Opt-out of marketing communications
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      Data Portability
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Request a copy of your data in a portable format
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7 */}
              <section id="consent" className="mb-8 sm:mb-12 scroll-mt-6">
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    7. Consent
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  By using our website, you consent to the collection and use of
                  your information as outlined in this Privacy Policy. If you do
                  not agree with this policy, please do not use our website.
                </p>
              </section>

              {/* Section 8 */}
              <section
                id="policy-changes"
                className="mb-8 sm:mb-12 scroll-mt-6"
              >
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    8. Changes to This Privacy Policy
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will
                  post any changes on this page and notify you via email if
                  necessary. We encourage you to review this Privacy Policy
                  periodically for any changes.
                </p>
              </section>

              {/* Contact Section */}
              <section
                id="contact-us"
                className="bg-gray-50 rounded-lg p-4 sm:p-6 lg:p-8 scroll-mt-6"
              >
                <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    9. Contact Us
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <span className="text-xs sm:text-sm text-gray-700">
                        Email:{" "}
                      </span>
                      <a
                        href={`mailto:${contactEmail}`}
                        className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium break-all"
                      >
                        {contactEmail}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <span className="text-xs sm:text-sm text-gray-700">
                        Website:{" "}
                      </span>
                      <a
                        href={websiteUrl}
                        className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium break-all"
                      >
                        {websiteUrl}
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
