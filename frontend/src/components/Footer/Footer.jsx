import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are committed to providing the best tools and resources for enhancing your online security and protecting your data.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Join our newsletter to stay updated with the latest news and offers.
            </p>
            <form>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-600 px-4 py-2 text-white rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} KeyCrafter. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;