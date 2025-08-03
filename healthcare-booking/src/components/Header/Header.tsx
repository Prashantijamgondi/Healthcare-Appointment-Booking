import React from 'react';
import { ViewType } from '../../types';

interface HeaderProps {
  currentView: ViewType;
  appointmentsCount: number;
  onBackToHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentView, 
  appointmentsCount, 
  onBackToHome 
}) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">HealthCare</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={onBackToHome}
              className={`text-sm font-medium transition-colors ${
                currentView === 'list' 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Find Doctors
            </button>
            <span className="text-gray-400">|</span>
            <span className="text-sm text-gray-600">
              {appointmentsCount} Appointment{appointmentsCount !== 1 ? 's' : ''}
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;