import React, { useState } from 'react';
import { Doctor, Appointment, AppContextType, ViewType, BookingFormData } from './types';
import { mockDoctors } from './data/mockData';
import { generateAppointmentId } from './utils/helpers';
import { AppProvider } from './context/AppContext';

import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import DoctorsList from './components/DoctorsList/DoctorsList';
import DoctorProfile from './components/DoctorProfile/DoctorProfile';
import BookingForm from './components/BookingForm/BookingForm';
import ConfirmationPage from './components/ConfirmationPage/ConfirmationPage';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('list');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [lastAppointment, setLastAppointment] = useState<Appointment | null>(null);
  const [doctors] = useState<Doctor[]>(mockDoctors);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [searchQuery, setSearchQuery] = useState('');


  const addAppointment = (appointmentData: Omit<Appointment, 'id' | 'status'>) => {
    const newAppointment: Appointment = {
      ...appointmentData,
      id: generateAppointmentId(),
      status: 'confirmed'
    };
    setAppointments(prev => [...prev, newAppointment]);
    setLastAppointment(newAppointment);
    setCurrentView('confirmation');
  };

  const handleSelectDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setCurrentView('profile');
  };

  const handleBookAppointment = () => {
    setCurrentView('booking');
  };

  const handleBookingSubmit = (formData: BookingFormData) => {
    if (selectedDoctor) {
      addAppointment({
        doctorId: selectedDoctor.id,
        patientName: formData.patientName,
        email: formData.email,
        date: formData.date,
        time: formData.time
      });
    }
  };

  const handleBackToHome = () => {
    setCurrentView('list');
    setSelectedDoctor(null);
    setLastAppointment(null);
    setSearchQuery('');
  };

  const contextValue: AppContextType = {
    doctors,
    appointments,
    addAppointment,
    searchQuery,
    setSearchQuery
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'list':
        return <DoctorsList onSelectDoctor={handleSelectDoctor} />;
      case 'profile':
        return selectedDoctor ? (
          <DoctorProfile
            doctor={selectedDoctor}
            onBack={() => setCurrentView('list')}
            onBookAppointment={handleBookAppointment}
          />
        ) : null;
      case 'booking':
        return selectedDoctor ? (
          <BookingForm
            doctor={selectedDoctor}
            onBack={() => setCurrentView('profile')}
            onSubmit={handleBookingSubmit}
          />
        ) : null;
      case 'confirmation':
        return lastAppointment ? (
          <ConfirmationPage
            appointment={lastAppointment}
            onBackToHome={handleBackToHome}
          />
        ) : null;
      default:
        return <DoctorsList onSelectDoctor={handleSelectDoctor} />;
    }
  };

  return (
    <AppProvider value={contextValue}>
      <div className="min-h-screen bg-gray-50">
        <Header
          currentView={currentView}
          appointmentsCount={appointments.length}
          onBackToHome={handleBackToHome}
        />

        {currentView === 'list' && <HeroSection />}

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderCurrentView()}
        </main>

        <Footer />
      </div>
    </AppProvider>
  );
};

export default App;
