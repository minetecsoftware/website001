import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-100 text-green-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-600">Home</a></li>
              <li><a href="#" className="hover:text-green-600">Services</a></li>
              <li><a href="#" className="hover:text-green-600">Products</a></li>
              <li><a href="#" className="hover:text-green-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>Email: info@example.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-600">Facebook</a>
              <a href="#" className="hover:text-green-600">Twitter</a>
              <a href="#" className="hover:text-green-600">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-200 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;