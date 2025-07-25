import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const PaymentConfirmation = () => {
  const router = useRouter();
  const { transactionId, amount, status, date } = router.query;
  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <svg
          className="ft-green-tick"
          xmlns="http://www.w3.org/2000/svg"
          height="100"
          width="100"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <circle className="circle" fill="#5bb543" cx="24" cy="24" r="22" />
          <path
            className="tick"
            fill="none"
            stroke="#FFF"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M14 27l5.917 4.917L34 17"
          />
        </svg>
        <p className="confirmation-message py-3">
          Thank you for your payment! Your transaction has been successfully completed.
        </p>
        <div className="transaction-details">
          <p><strong>Transaction ID:</strong> {transactionId}</p>
          <p><strong>Amount:</strong> ₹{amount}</p>
          <p><strong>Paid Status:</strong> {status}</p>
          <p><strong>Date:</strong> {date}</p>
        </div>
        <a href="/" className="confirmation-button">Go to Home</a>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
