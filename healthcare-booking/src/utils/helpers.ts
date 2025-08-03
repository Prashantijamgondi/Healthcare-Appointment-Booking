export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'available': 
      return 'text-green-600 bg-green-50';
    case 'busy': 
      return 'text-orange-600 bg-orange-50';
    case 'offline': 
      return 'text-red-600 bg-red-50';
    default: 
      return 'text-gray-600 bg-gray-50';
  }
};

export const getStatusText = (status: string): string => {
  switch (status) {
    case 'available': 
      return 'Available';
    case 'busy': 
      return 'Busy';
    case 'offline': 
      return 'Offline';
    default: 
      return 'Unknown';
  }
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateFutureDate = (date: string): boolean => {
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate >= today;
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString();
};

export const generateAppointmentId = (): string => {
  return Math.random().toString(36).substr(2, 9).toUpperCase();
};