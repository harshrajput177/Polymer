import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [token, setToken] = useState("");
    const [foodList, setFoodList] = useState([]);

    const url = "http://localhost:5050";  // Removed the extra space before http

    const fetchFood = async () => {
        try {
            const response = await axios.get(url + "/food/list");
            if (response.data && response.data.data) {
                setFoodList(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching food list:", error);
        }
    };

    // Fetch food list when the component mounts
    useEffect(() => {
        fetchFood();  // Call the fetchFood function here
    }, []); // Empty dependency array means this runs once on mount

    const contextValue = {
        fetchFood,
        foodList,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;

