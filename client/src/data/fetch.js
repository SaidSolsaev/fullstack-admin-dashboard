

export const fetchAllProducts = async() => {
    try {
        const response = await fetch(`https://dummyjson.com/products`);
        const data = await response.json();
        
        if (!response.ok){
            throw new Error("Network response was not ok.")
        }

        return data;
    } catch (error) {
        console.log("Error in fetchAllProducts: ", error);
        return null;
    }
}

export const fetchOneProduct = async() => {
    try {
        const response = await fetch(`https://dummyjson.com/products/1`);
        const data = await response.json();
        
        if (!response.ok){
            throw new Error("Network response was not ok.")
        }

        return data;

    } catch (error) {
        console.log("Error in fetchOneProduct: ", error);
        return null;
    }
}