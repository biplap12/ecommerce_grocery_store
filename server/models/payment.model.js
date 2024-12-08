const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    transactionId: { 
        type: String, 
        unique: true 
    },
    pidx: { 
        type: String, 
        unique: true 
    },
    productId : {
        type : mongoose.Schema.ObjectId,
        ref : "product"
    },
    orderId : {
        type : mongoose.Schema.ObjectId,
        ref : "order",
    },
    amount: { 
        type: Number, 
        required: true 
    },
    dataFromVerificationReq: { 
        type: Object 
    },

    apiQueryFromUser: { 
        type: Object 
    },
    paymentGateway: {
      type: String,
      enum: ["KHALTI", "IMEPAY", "ESEWA"],
      required: true,
    },
    status: {
      type: String,
      enum: ["SUCCESS", "FAILED", "PENDING"],
      default: "PENDING",
    },
    paymentDate: { 
        type: Date, 
        default: Date.now 
    },
  },
  { timestamps: true }
);
const PaymentModel = mongoose.model("payment", paymentSchema);
export default PaymentModel;