import React from 'react';
import { Check, Package, Truck } from 'lucide-react';

const OrderSuccess = ({ onNavigate }) => {
  const orderData = typeof window !== 'undefined' ? window.orderTrackingData || {} : {};
  const deliveryDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-pulse">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Completed!</h1>
          <p className="text-gray-600">Your payment has been processed successfully</p>
        </div>

        {orderData.transfer_amount && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Order Details</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Amount: ${orderData.transfer_amount}</p>
              <p>Payment Method: {orderData.pay_type}</p>
              <p>Order ID: {orderData.mch_order_no}</p>
            </div>
          </div>
        )}

        <div className="bg-green-50 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <Package className="w-5 h-5 text-green-600" />
              <span className="text-sm text-green-800">Order Confirmed</span>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="flex items-center space-x-2">
              <Truck className="w-5 h-5 text-green-600" />
              <span className="text-sm text-green-800">Preparing Shipment</span>
            </div>
          </div>

          <p className="text-green-700 font-semibold">
            Estimated delivery: {deliveryDate}
          </p>
        </div>

        <button
          onClick={() => onNavigate('home')}
          className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;