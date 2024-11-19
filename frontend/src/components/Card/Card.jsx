import React from 'react';

const SecurityFeatures = () => {
  return (
    <div className="py-12 bg-gray-100 my-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Take your security to the next level
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Zero-Knowledge Security */}
          <div className="bg-white shadow-xl rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-eye text-4xl text-blue-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Zero-knowledge security</h3>
            <p className="text-gray-600 mb-4">
              Your data is kept secret, even from us. Learn how we protect your data with a local-only encryption model.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Learn more about encryption</a>
          </div>

          {/* Dark Web Monitoring */}
          <div className="bg-white shadow-xl rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-radar text-4xl text-green-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Be aware of digital threats</h3>
            <p className="text-gray-600 mb-4">
              Our data breach monitoring instantly notifies you if your data has been compromised online.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Learn about Dark Web Monitoring</a>
          </div>

          {/* Security Dashboard */}
          <div className="bg-white shadow-xl rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-shield-alt text-4xl text-red-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nurture your habits</h3>
            <p className="text-gray-600 mb-4">
              Find and update weak, reused passwords with ones created by our password generator.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Go to Security Dashboard</a>
          </div>

          {/* Multi-Factor Authentication */}
          <div className="bg-white shadow-xl rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-lock text-4xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Multifactor authentication</h3>
            <p className="text-gray-600 mb-4">
              Enable additional authentication, like a one-time passcode or fingerprint scan, to protect your account.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Explore Multifactor Options</a>
          </div>

          {/* Secure Password Generation */}
          <div className="bg-white shadow-xl rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-key text-4xl text-yellow-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure password generation</h3>
            <p className="text-gray-600 mb-4">
              Generate strong, random passwords that enhance your online security and prevent unauthorized access.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Try Password Generator</a>
          </div>

          {/* Data Encryption */}
          <div className="bg-white shadow-xl rounded-lg p-6 hover:scale-105 transform transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-lock text-4xl text-teal-600"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">End-to-End encryption</h3>
            <p className="text-gray-600 mb-4">
              All your sensitive data is encrypted end-to-end, ensuring it's safe from hackers and unauthorized access.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Learn about Encryption</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityFeatures;