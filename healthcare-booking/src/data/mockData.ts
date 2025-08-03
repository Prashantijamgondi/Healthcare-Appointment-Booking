import { Doctor } from '../types';

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sudeep Kumar',
    specialization: 'Cardiologist',
    profileImage: 'https://res.cloudinary.com/do0jetnwl/image/upload/v1754197862/Screenshot_2025-08-03_104048_h4f4tl.png',
    rating: 4.8,
    experience: 12,
    location: 'Downtown Medical Center',
    phone: '+91 9606655115',
    email: 'sudeepshapur@hospital.com',
    availability: {
      status: 'available',
      nextAvailable: 'Today 2:00 PM',
      timeSlots: ['09:00 AM', '10:30 AM', '02:00 PM', '03:30 PM', '05:00 PM']
    },
    bio: 'Dr. Sudeep Kumar is a board-certified cardiologist with over 12 years of experience in treating heart conditions.',
    education: ['MD from Harvard Medical School', 'Residency at Senior heart Hospital'],
    languages: ['English', 'Spanish', 'French']
  },
  {
    id: '2',
    name: 'Dr. Shivraj kumar',
    specialization: 'Dermatologist',
    profileImage: 'https://res.cloudinary.com/do0jetnwl/image/upload/v1754198168/Screenshot_2025-08-03_104550_xd0cfd.png',
    rating: 4.9,
    experience: 8,
    location: 'Skin Care Clinic',
    phone: '+91 6360537896',
    email: 'shivaraj@skinclinic.com',
    availability: {
      status: 'available',
      nextAvailable: 'Tomorrow 10:00 AM',
      timeSlots: ['10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM']
    },
    bio: 'Dr. Shivraj Kumar specializes in medical and cosmetic dermatology with expertise in skin cancer prevention.',
    education: ['MD from Stanford University', 'Dermatology Residency at Dubai'],
    languages: ['English', 'Mandarin', 'Korean']
  },
  {
    id: '3',
    name: 'Dr. Rahul Kumar',
    specialization: 'Pediatrician',
    profileImage: 'https://res.cloudinary.com/do0jetnwl/image/upload/v1754198455/Screenshot_2025-08-03_105044_ssdhwi.png',
    rating: 4.7,
    experience: 15,
    location: "Children's Hospital",
    phone: '+91 8660488963',
    email: 'rahulkumar@childrenshospital.com',
    availability: {
      status: 'busy',
      nextAvailable: 'Next Week Monday',
      timeSlots: ['08:00 AM', '09:30 AM', '11:00 AM', '02:00 PM', '03:30 PM']
    },
    bio: 'Dr. Rahul Kumar is a dedicated pediatrician committed to providing comprehensive care for children.',
    education: ['MD from UCLA', 'Pediatric Residency at Mahalaxmi Children\'s Hospital'],
    languages: ['English', 'Spanish']
  },
  {
    id: '4',
    name: 'Dr. Abhishek Kumar',
    specialization: 'Orthopedic Surgeon',
    profileImage: 'https://res.cloudinary.com/do0jetnwl/image/upload/v1754198915/Screenshot_2025-08-03_105830_mnrt65.png',
    rating: 4.6,
    experience: 20,
    location: 'Sports Medicine Center',
    phone: '+91 6360295330',
    email: 'abhishekkumar@sportsmed.com',
    availability: {
      status: 'available',
      nextAvailable: 'Today 4:00 PM',
      timeSlots: ['09:00 AM', '11:00 AM', '01:00 PM', '04:00 PM']
    },
    bio: 'Dr. Abhishek Kumar is an experienced orthopedic surgeon specializing in sports injuries and joint replacement.',
    education: ['MD from Mayo Clinic', 'Orthopedic Surgery Residency at jambagair Clinic'],
    languages: ['English']
  }
];