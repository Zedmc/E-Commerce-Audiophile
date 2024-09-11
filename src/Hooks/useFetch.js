import { useState, useEffect, useRef } from 'react';

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Use a ref to store the current AbortController
    const abortControllerRef = useRef(null);

    useEffect(() => {
        // Create a new AbortController for this request
        const abortController = new AbortController();
        abortControllerRef.current = abortController;

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, {
                    ...options,
                    signal: abortController.signal, // Attach the abort signal to the fetch options
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    // Handle only non-abort errors
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup function to abort the fetch if the component is unmounted
        return () => {
            abortController.abort();
        };
    }, [url, options]);

    // Function to manually abort the fetch request if needed
    const abortFetch = () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
    };

    return { data, error, loading, abortFetch };
};

export default useFetch;
