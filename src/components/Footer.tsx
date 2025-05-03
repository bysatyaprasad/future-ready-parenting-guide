
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-1">
              <span className="text-brand-blue text-xl font-bold">Future</span>
              <span className="text-brand-orange text-xl font-bold">Ready</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Helping parents prepare their children for future success with high-income skills and financial freedom.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Skills Guide
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Roadmaps
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-blue transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources#books" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Recommended Books
                </Link>
              </li>
              <li>
                <Link to="/resources#courses" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Online Courses
                </Link>
              </li>
              <li>
                <Link to="/resources#tools" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Learning Tools
                </Link>
              </li>
              <li>
                <Link to="/resources#communities" className="text-gray-600 hover:text-brand-blue transition-colors">
                  Communities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-600">
              Have questions or suggestions?
              <br />
              <a href="mailto:info@futurereadykids.com" className="text-brand-blue hover:underline">
                info@futurereadykids.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Future Ready Kids. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-brand-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-brand-blue transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
