import React from 'react';
import { Check } from 'lucide-react';
import { Appointment } from '../../types';
import { formatDate } from '../../utils/helpers';

interface ConfirmationPageProps {
  appointment: Appointment;
  onBackToHome: () => void;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ 
  appointment, 
  onBackToHome 
}) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-green-50 px-6 py-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-green-800 mb-2">
            Appointment Confirmed!
          </h2>
          <p className="text-green-700">
            Your appointment has been successfully booked.
          </p>
        </div>

        <div className="p-6">
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Appointment Details
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Patient Name:</span>
                <span className="text-gray-900">{appointment.patientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Email:</span>
                <span className="text-gray-900">{appointment.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Date:</span>
                <span className="text-gray-900">{formatDate(appointment.date)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Time:</span>
                <span className="text-gray-900">{appointment.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Appointment ID:</span>
                <span className="text-gray-900 font-mono">{appointment.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Status:</span>
                <span className="text-green-600 font-medium capitalize">
                  {appointment.status}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 text-sm">
              <span className="font-medium">Important:</span> Please arrive 15 minutes before your appointment time. 
              A confirmation email has been sent to your registered email address.
            </p>
          </div>

          <button
            onClick={onBackToHome}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;