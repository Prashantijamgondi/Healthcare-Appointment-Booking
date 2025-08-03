import React, { useState } from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Doctor, BookingFormData } from '../../types';
import { validateEmail, validateFutureDate, formatDate } from '../../utils/helpers';

interface BookingFormProps {
  doctor: Doctor;
  onBack: () => void;
  onSubmit: (data: BookingFormData) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ doctor, onBack, onSubmit }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    patientName: '',
    email: '',
    date: '',
    time: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else if (!validateFutureDate(formData.date)) {
      newErrors.date = 'Please select a future date';
    }

    if (!formData.time) {
      newErrors.time = 'Time slot is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Profile</span>
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4 text-white">
          <h2 className="text-2xl font-bold">Book Appointment</h2>
          <p className="text-blue-100">with {doctor.name}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-2">
              Patient Name
            </label>
            <input
              type="text"
              id="patientName"
              value={formData.patientName}
              onChange={(e) => handleInputChange('patientName', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.patientName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter patient name"
            />
            {errors.patientName && (
              <p className="mt-1 text-sm text-red-600">{errors.patientName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter email address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.date ? 'border-red-500' : 'border-gray-300'
              }`}
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-600">{errors.date}</p>
            )}
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
              Available Time Slots
            </label>
            <select
              id="time"
              value={formData.time}
              onChange={(e) => handleInputChange('time', e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.time ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select a time slot</option>
              {doctor.availability.timeSlots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
            {errors.time && (
              <p className="mt-1 text-sm text-red-600">{errors.time}</p>
            )}
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Appointment Summary</h4>
            <div className="text-sm text-blue-800 space-y-1">
              <p><span className="font-medium">Doctor:</span> {doctor.name}</p>
              <p><span className="font-medium">Specialization:</span> {doctor.specialization}</p>
              <p><span className="font-medium">Location:</span> {doctor.location}</p>
              {formData.date && <p><span className="font-medium">Date:</span> {formatDate(formData.date)}</p>}
              {formData.time && <p><span className="font-medium">Time:</span> {formData.time}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Confirm Appointment</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;