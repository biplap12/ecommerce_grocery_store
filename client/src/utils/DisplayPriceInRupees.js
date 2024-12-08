

export const DisplayPriceInRupees = (price) => {
    if (isNaN(price) || price < 0) {
        return 'Invalid price'; 
    }

    // Format the price with "रु" symbol
    return `रु.${new Intl.NumberFormat('en-NP').format(price)}`;
};
