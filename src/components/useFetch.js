import { useState } from 'react';

const useFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (url, options) => {
        setLoading(true);
        try {
            const response = await fetch(url, options);
            const responseData = await response.json();

            if (!response.ok) {
                // If response is not ok, throw an error
                throw new Error(responseData.message || 'Invalid Credentials');
            }

            // If response is ok, set data and clear error
            setData(responseData);
            setError(null);
        } catch (error) {
            // Handle errors
            setError(error);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, fetchData };
};

export default useFetch;
