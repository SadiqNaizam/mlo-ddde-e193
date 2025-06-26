import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-muted-foreground border-t border-gray-800">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-white">CloudKitchen Luxe</span>
            </Link>
            <p className="text-sm max-w-xs">
              A premium dining experience, delivered right to your door.
            </p>
          </div>
          <div className="md:justify-self-center">
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:contact@ckluxe.com" className="hover:text-primary transition-colors">contact@ckluxe.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a></li>
            </ul>
          </div>
          <div className="md:justify-self-end">
             <h3 className="font-semibold text-white mb-4">Follow Us</h3>
             <div className="flex items-center gap-4">
               <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
               <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
               <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
             </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm">
           <p>&copy; {currentYear} CloudKitchen Luxe. All Rights Reserved.</p>
           <div className="flex gap-4 mt-4 sm:mt-0">
             <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
             <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;