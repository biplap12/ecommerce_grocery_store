

import React from 'react';
import logo from '../assets/logo.png'; // Ensure logo path is correct

const ReceiptPage = () => {
  const orderDetails = {
    orderId: 'ORD12345',
    totalAmount: 100,
    orderDate: '2023-08-15',
    items: [
      { name: 'Item dfsdnf sdfsnkfn sdfnls f ksdfnslfd  ', quantity: 1, price: 50 },
      { name: 'Item 2', quantity: 1, price: 50 },
    ],
    customerName: 'John Doe',
    customerEmail: 'john.doe@example.com',
    paymentStatus: 'Success',
    paymentMethod: 'Credit Card',
    transactionNumber: 'TXN987654',
  };

  


  return (
    <div className="flex justify-center items-center p-4 bg-gray-100 min-h-screen">
      <div className="receipt-container w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 sm:p-8">
        {/* Logo and Header */}
        <div className="flex justify-center flex-col items-center mb-8">
          <img
            src={logo}
            alt="Company Logo"
            className="w-20 h-auto sm:w-24 md:w-28 lg:w-32 xl:w-36 object-contain"
          />
          <div className="ml-4 text-center">
            <p className="text-2xl font-semibold text-gray-800">BN Store</p>
            <p className="text-sm text-gray-600">Kathmandu, Nepal</p>
          </div>
        </div>

        <div className="border-t border-b py-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 flex justify-center">Receipt</h2>
          <div className="text-sm flex items-center justify-between text-gray-600">
            <p>Receipt No: {orderDetails.orderId}</p>
            <p>Transaction No: {orderDetails.transactionNumber}</p>
          </div>
        </div>

        {/* Customer Information */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Customer Information</h3>
            <p className="text-sm text-gray-600">Name: {orderDetails.customerName}</p>
            <p className="text-sm text-gray-600">Email: {orderDetails.customerEmail}</p>
            <p className="text-sm text-gray-600">Phone: +123456789</p>
          </div>
          <div className="flex flex-col items-center gap-2 mt-4 sm:mt-0">
            <p className="text-sm text-gray-600">Status:
              <span className={`${orderDetails.paymentStatus === 'Success' ? 'bg-green-600' : 'bg-red-600'} font-semibold rounded-full px-2 text-white`}>
                {orderDetails.paymentStatus}
              </span>
            </p>
            <p className="text-sm text-gray-600">Method:
              <span className={`${orderDetails.paymentStatus === 'Success' ? 'bg-green-600' : 'bg-red-600'} font-semibold rounded-full px-2 text-white`}>
                {orderDetails.paymentMethod}
              </span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Shipping Address</h3>
            <p className="text-sm text-gray-600">Name: {orderDetails.customerName}</p>
            <p className="text-sm text-gray-600">Email: {orderDetails.customerEmail}</p>
            <p className="text-sm text-gray-600">Status: {orderDetails.paymentStatus}</p>
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-6 overflow-x-auto">
          <h3 className="text-lg font-semibold text-gray-800">Items Purchased</h3>
          <table className="min-w-full table-auto border-collapse mt-4 sm:ml-0">
            <thead className="bg-gray-200">
              <tr className="text-sm font-semibold text-gray-600 border-b">
                <th className="py-2 px-4 text-left">Item</th>
                <th className="py-2 px-4 text-left">Quantity</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left float-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.items.map((item, index) => (
                <tr key={index} className="text-sm text-gray-600 border-b">
                  <td className="py-2 px-4">{item.name}</td>
                  <td className="py-2 px-4">{item.quantity}</td>
                  <td className="py-2 px-4">${item.price}</td>
                  <td className="py-2 px-4 float-right">${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Amount */}
        <div className="flex flex-col items-end justify-center mb-6">
          <h4 className="text-sm text-gray-600">Subtotal: ${orderDetails.totalAmount}</h4>
          <h4 className="text-sm text-gray-600">Tax: $0</h4>
          <h4 className="text-sm text-gray-600">Shipping: $0</h4>
          <h4 className="text-sm text-gray-600">Discount: $0</h4>
          <h3 className="text-lg font-semibold text-gray-800">Total Amount: ${orderDetails.totalAmount}</h3>
        </div>

        {/* Print Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => window.print()}
            className="px-8 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none"
          >
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;
