import React from 'react';
import { ArrowLeft, Star, Clock, Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { Doctor } from '../../types';
import { getStatusColor } from '../../utils/helpers';

interface DoctorProfileProps {
  doctor: Doctor;
  onBack: () => void;
  onBookAppointment: () => void;
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({
  doctor,
  onBack,
  onBookAppointment
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Doctors</span>
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6 text-white">
          <div className="flex items-start space-x-6">
            <img
              src={doctor.profileImage}
              alt={doctor.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
              <p className="text-xl mb-3 text-blue-100">{doctor.specialization}</p>
              <div className="flex items-center space-x-6 text-blue-100">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-300 fill-current" />
                  <span className="font-medium">{doctor.rating} Rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-5 h-5" />
                  <span>{doctor.experience} Years Experience</span>
                </div>
              </div>
            </div>
            <div className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(doctor.availability.status)} bg-white`}>
              {doctor.availability.status === 'available' ? 'Available' : 
               doctor.availability.status === 'busy' ? 'Busy' : 'Offline'}
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">About</h3>
                <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
                <ul className="space-y-2">
                  {doctor.education.map((edu, index) => (
                    <li key={index} className="text-gray-600 flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((lang, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span>{doctor.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <span>{doctor.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <span>{doctor.location}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Available Time Slots</h3>
                <div className="grid grid-cols-2 gap-2">
                  {doctor.availability.timeSlots.map((slot, index) => (
                    <div key={index} className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-center text-sm font-medium">
                      {slot}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  <span className="font-medium">Next available:</span> {doctor.availability.nextAvailable}
                </p>
              </div>

              <button
                onClick={onBookAppointment}
                disabled={doctor.availability.status !== 'available'}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;