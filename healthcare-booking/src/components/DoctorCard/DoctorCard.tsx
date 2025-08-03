import React from 'react';
import { Star, Clock, MapPin } from 'lucide-react';
import { Doctor } from '../../types';
import { getStatusColor, getStatusText } from '../../utils/helpers';

interface DoctorCardProps {
  doctor: Doctor;
  onClick: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 p-6"
    >
      <div className="flex items-start space-x-4">
        <img
          src={doctor.profileImage}
          alt={doctor.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {doctor.name}
              </h3>
              <p className="text-blue-600 font-medium mb-2">
                {doctor.specialization}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{doctor.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{doctor.experience} years exp.</span>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-600 mb-3">
                <MapPin className="w-4 h-4" />
                <span>{doctor.location}</span>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(doctor.availability.status)}`}>
              {getStatusText(doctor.availability.status)}
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">Next available:</span> {doctor.availability.nextAvailable}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;