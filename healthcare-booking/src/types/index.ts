export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  profileImage: string;
  rating: number;
  experience: number;
  location: string;
  phone: string;
  email: string;
  availability: {
    status: 'available' | 'busy' | 'offline';
    nextAvailable: string;
    timeSlots: string[];
  };
  bio: string;
  education: string[];
  languages: string[];
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  email: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface AppContextType {
  doctors: Doctor[];
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, 'id' | 'status'>) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export interface BookingFormData {
  patientName: string;
  email: string;
  date: string;
  time: string;
}

export type ViewType = 'list' | 'profile' | 'booking' | 'confirmation';