import React from 'react';
import { Search } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery } = useAppContext();

  return (
    <div className="relative max-w-md w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search doctors by name or specialization..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
      />
    </div>
  );
};

export default SearchBar;
