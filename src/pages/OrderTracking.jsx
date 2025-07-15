import React, { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";
import ShoeLoader from "./ShoeLoader";
import { useRouter } from "next/router";

const mockAPICall = async (orderId) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const responses = [
    {
      code: 0,
      data: {
        mch_id: "MCH001",
        mch_order_no: orderId,
        transfer_amount: 299.99,
        pay_type: "CARD",
        currency: "USD",
        orderDate: new Date().toISOString(),
        sign_type: "RSA",
        status: Math.random() > 0.7 ? 1 : Math.random() > 0.3 ? 2 : 0,
      },
      msg: "Success",
    },
  ];

  return responses[0];
};

const OrderTracking = () => {
  const [timeLeft, setTimeLeft] = useState(90);
  const [orderId, setOrderId] = useState("");
  const router = useRouter(); // For Next.js routing
  const [orderStatus, setOrderStatus] = useState({
    status: "pending",
    message: "Initializing payment...",
    orderData: null,
  });
  const [isPolling, setIsPolling] = useState(true);
  const [apiCallCount, setApiCallCount] = useState(0);
  const [maxApiCalls] = useState(25);
  const [allCallsFailed, setAllCallsFailed] = useState(false);

  useEffect(() => {
    if (router?.query?.orderId) {
      setOrderId(router.query.orderId);
    }
  }, [router?.query?.orderId]);
  const checkOrderStatus = async () => {
    try {
      const currentCallCount = apiCallCount + 1;
      setApiCallCount(currentCallCount);

      if (currentCallCount >= maxApiCalls) {
        console.log("Maximum API calls reached. Stopping polling.");
        setIsPolling(false);
        setAllCallsFailed(true);
        // setTimeout(() => {
        //   ("error");
        // }, 2000);
        return {
          status: "failed",
          message: "Maximum retry attempts reached. Payment failed.",
          orderData: null,
        };
      }

      const response = await fetch("/api/query-collection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_no: orderId,
        }),
      });

      if (!response.ok) {
        console.log("API endpoint not found, using mock data");
        const mockData = await mockAPICall(orderId);
        return processMockResponse(mockData);
      }

      const data = await response.json();
      console.log(`API Response #${currentCallCount}:`, data);
      return processAPIResponse(data);
    } catch (error) {
      console.error(
        `API error on call #${apiCallCount + 1}, falling back to mock:`,
        error
      );
      const mockData = await mockAPICall(orderId);
      return processMockResponse(mockData);
    }
  };

  const processAPIResponse = (data) => {
    if (data.code === 0 && data.data) {
      const orderData = data.data;

      const orderInfo = {
        mch_id: orderData.mch_id,
        mch_order_no: orderData.mch_order_no,
        transfer_amount: orderData.transfer_amount,
        pay_type: orderData.pay_type,
        currency: orderData.currency,
        orderDate: orderData.orderDate,
        sign_type: orderData.sign_type,
        status: orderData.status,
      };

      if (typeof window !== "undefined") {
        window.orderTrackingData = orderInfo;
      }

      if (orderData.status === 1) {
        return {
          status: "completed",
          message: "Payment successful!",
          orderData: orderInfo,
        };
      } else if (orderData.status === 0) {
        return {
          status: "failed",
          message: "Payment failed. Please try again.",
          orderData: orderInfo,
        };
      } else {
        return {
          status: "processing",
          message: "Processing payment...",
          orderData: orderInfo,
        };
      }
    } else {
      return {
        status: "failed",
        message: data.msg || "Unable to check order status.",
        orderData: null,
      };
    }
  };

  const processMockResponse = (data) => {
    console.log("Using mock response:", data);
    return processAPIResponse(data);
  };

  useEffect(() => {
    if (!orderId || !isPolling || timeLeft <= 0 || allCallsFailed) return;

    checkOrderStatus().then((status) => {
      setOrderStatus(status);

      if (status.status === "completed") {
        setIsPolling(false);
        // setTimeout(() => ("success"), 1500);
      } else if (status.status === "failed" && allCallsFailed) {
        setIsPolling(false);
        // setTimeout(() => ("error"), 1500);
      }
    });

    const statusInterval = setInterval(async () => {
      if (!isPolling || allCallsFailed) {
        clearInterval(statusInterval);
        return;
      }

      const status = await checkOrderStatus();
      setOrderStatus(status);

      if (status.status === "completed") {
        setIsPolling(false);
        clearInterval(statusInterval);
        setTimeout(() => router.push("/OrderSuccess"), 1500);
        // setTimeout(() => ("success"), 1500);
      } else if (status.status === "failed" && allCallsFailed) {
        setIsPolling(false);
        clearInterval(statusInterval);
        setTimeout(() => router.push("/OrderError"), 1500);
        // setTimeout(() => ("error"), 1500);
      }
    }, 3000);

    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(statusInterval);
          clearInterval(timerInterval);
          setIsPolling(false);
        setTimeout(() => router.push("/OrderError"), 1500);
          //   if (!allCallsFailed) {
          //     ("error");
          //   }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(statusInterval);
      clearInterval(timerInterval);
    };
  }, [orderId]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getStatusStep = (status) => {
    const steps = {
      pending: 0,
      processing: 1,
      verifying: 2,
      completed: 3,
      failed: 0,
    };
    return steps[status] ?? 0;
  };

  const handleManualRefresh = () => {
    if (apiCallCount >= maxApiCalls) return;

    setIsPolling(true);
    checkOrderStatus().then((status) => {
      setOrderStatus(status);

      if (status.status === "completed") {
        setIsPolling(false);
        setTimeout(() => router.push("/OrderSuccess"), 1500);
      } else if (status.status === "failed" && allCallsFailed) {
        setIsPolling(false);
        setTimeout(() => router.push("/OrderError"), 1500);
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <ShoeLoader />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Processing Your Order
        </h1>
        <p className="text-gray-600 mb-4">
          Order ID: <span className="font-mono text-blue-600">{orderId}</span>
        </p>

        <div className="text-sm text-gray-500 mb-6">
          <div className="flex justify-between items-center">
            <span>
              Calls: {apiCallCount}/{maxApiCalls}
            </span>
            <span
              className={`font-semibold ${
                allCallsFailed
                  ? "text-red-600"
                  : isPolling
                  ? "text-blue-600"
                  : "text-gray-600"
              }`}
            >
              {allCallsFailed
                ? "Max Attempts Reached"
                : isPolling
                ? "Polling..."
                : "Stopped"}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
            <div
              className={`h-1 rounded-full transition-all duration-300 ${
                allCallsFailed ? "bg-red-500" : "bg-blue-500"
              }`}
              style={{ width: `${(apiCallCount / maxApiCalls) * 100}%` }}
            />
          </div>
        </div>

        <div className="mb-6">
          {allCallsFailed && (
            <div className="mt-2 text-center">
              <p className="text-sm text-red-700">
                All {maxApiCalls} API attempts failed. Please try again later.
              </p>
            </div>
          )}

          <div className="flex justify-center mb-4">
            <div className="flex space-x-2">
              {["Pending", "Processing", "Verifying", "Completed"].map(
                (label, i) => (
                  <div key={label} className="flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full transition-all duration-500 ${
                        i <= getStatusStep(orderStatus.status)
                          ? "bg-blue-500 scale-110"
                          : "bg-gray-300"
                      }`}
                    />
                    <span className="text-xs text-gray-500 mt-1">{label}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Time remaining:</span>
            <span
              className={`font-mono font-bold ${
                timeLeft <= 10 ? "text-red-600" : "text-blue-600"
              }`}
            >
              {formatTime(timeLeft)}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-1000 ${
                timeLeft <= 10 ? "bg-red-500" : "bg-blue-600"
              }`}
              style={{ width: `${((60 - timeLeft) / 60) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex space-x-2 mt-6">
          <button
            onClick={handleManualRefresh}
            disabled={
              !isPolling || allCallsFailed || apiCallCount >= maxApiCalls
            }
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm flex items-center justify-center space-x-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>{allCallsFailed ? "Max Reached" : "Refresh"}</span>
          </button>
          <button
            // onClick={() => ("error")}
            className="flex-1 px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
