import React from 'react';
import { Check } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Book Appointment</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Connect with top healthcare professionals and book your appointment
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-100">
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5" />
            <span>Verified Doctors</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5" />
            <span>Easy Scheduling</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5" />
            <span>100% Confirmation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;