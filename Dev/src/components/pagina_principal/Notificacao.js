import {useEffect } from 'react';

const Notification = ({ message, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed bottom-10 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300 opacity-100">
      {message}
    </div>
  );
};

export default Notification;