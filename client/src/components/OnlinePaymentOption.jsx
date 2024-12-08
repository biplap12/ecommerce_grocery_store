import React, { useState } from "react";
import khaltiLogo from "../assets/khalti_logo.png";
import esewaLogo from "../assets/esewa_Logo.jpg";
import imepayLogo from "../assets/IME_Pay.jpg";
import SummaryApi from '../common/SummaryApi'
import Axios from "../utils/Axios";
import toast from "react-hot-toast";





const OnlinePaymentOption = ({close,data,handleCashOnDelivery}) => {
    const paymentOptions = [
        { id: 1, name: "Khalti", logo: khaltiLogo },
        { id: 2, name: "eSewa", logo: esewaLogo },
        { id: 3, name: "IME Pay", logo: imepayLogo },
      ];

  
  console.log("data",data);
  console.log("notDiscountTotalPrice",data.notDiscountTotalPrice);
  console.log("totalPrice",data.totalPrice);
  console.log("totalQty",data.totalQty);
  console.log("list_items",data.list_items);
  console.log("addressId",data.addressId);


  const handleOptionClick = async(option) => {

    if (option.id === 1) {
      handleCashOnDelivery()
      setTimeout(handleCashOnDelivery(), 2000); 
        } else if (option.id === 2) {
      handleCashOnDelivery()
    }
      else if (option.id === 3) {
        handleCashOnDelivery()

      }
  }
 

  return (
    <>
      {/* Modal */}
      {/* {isOpen && ( */}
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={close}
            >
              ✖
            </button>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Select Payment Option
            </h2>

            <div className="space-y-4">
              {paymentOptions.map((option) => (
                <button
                  key={option.id}
                  className="flex items-center justify-between w-full px-4  border rounded-md shadow-sm hover:bg-gray-100"
                  onClick={() => handleOptionClick(option)}
                >
                  <span className="text-lg font-medium">{option.name}</span>
                  <img
                    src={option.logo}
                    alt={option.name}
                    className="w-15 h-15 object-scale-down p-2 md:w-28 md:h-28"
                    />
                </button>
              ))}
            </div>
          </div>
        </div>
        
    </>
  );
};

export default OnlinePaymentOption;
