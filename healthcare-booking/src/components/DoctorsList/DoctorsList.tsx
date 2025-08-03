import React from 'react';
import { Search } from 'lucide-react';
import { Doctor } from '../../types';
import { useAppContext } from '../../context/AppContext';
import DoctorCard from '../DoctorCard/DoctorCard';
import SearchBar from '../SearchBar/SearchBar';

interface DoctorsListProps {
  onSelectDoctor: (doctor: Doctor) => void;
}

const DoctorsList: React.FC<DoctorsListProps> = ({ onSelectDoctor }) => {
  const { doctors, searchQuery } = useAppContext();

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Our Doctors</h2>
          <p className="text-gray-600 mt-1">
            {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} available
          </p>
        </div>
        <SearchBar />
      </div>

      {filteredDoctors.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
          <p className="text-gray-600">Try your search terms</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredDoctors.map(doctor => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onClick={() => onSelectDoctor(doctor)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorsList;
