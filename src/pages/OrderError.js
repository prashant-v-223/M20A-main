import React from 'react';
import { X } from 'lucide-react';

const OrderError = ({ onNavigate }) => {
  const orderData = typeof window !== 'undefined' ? window.orderTrackingData || {} : {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 animate-pulse">
            <X className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Failed</h1>
          <p className="text-gray-600">Unfortunately, your payment could not be processed.</p>
        </div>

        <div className="bg-red-50 rounded-lg p-6 mb-6">
          <p className="text-red-700 font-semibold mb-4">Please try the following:</p>
          <ul className="list-disc list-inside text-red-600 text-sm space-y-2 text-left">
            <li>Check your card details and balance</li>
            <li>Ensure your internet connection is stable</li>
            <li>Try a different payment method</li>
            <li>Contact support if the problem persists</li>
          </ul>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => onNavigate('retry')}
            className="w-full px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            Retry Payment
          </button>
          <button
            onClick={() => onNavigate('home')}
            className="w-full px-6 py-3 border border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderError;