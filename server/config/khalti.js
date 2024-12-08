const axios = require('axios');

const KHALTI_SECRET_KEY = process.env.KHALTI_SECRET_KEY;
const KHALTI_PUBLIC_KEY = process.env.KHALTI_PUBLIC_KEY;
const KHALTI_BASE_URL = process.env.KHALTI_BASE_URL;

export const verifyKhaltiPayment = async (token, amount) => {
    try {
        const response = await axios.post(
            `${KHALTI_BASE_URL}/epayment/initiate/`,
            { token, amount },
            {
                headers: {
                    Authorization: `Key ${KHALTI_SECRET_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
            
        )
        return response.data    
        
    } catch (error) {
        throw error.response?.data || error.message;
        
    }

}


// async function verifyPayment(token, amount) {
//     try {
//         const response = await axios.post(
//             `${KHALTI_BASE_URL}/payment/verify/`,
//             { token, amount },
//             {
//                 headers: {
//                     Authorization: `Key ${KHALTI_SECRET_KEY}`,
//                 },
//             }
//         );
//         return response.data;
//     } catch (error) {
//         throw error.response?.data || error.message;
//     }
// }

// module.exports = {
//     verifyPayment,
//     KHALTI_PUBLIC_KEY,
// };
