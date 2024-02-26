import { useCallback, useEffect, useState } from "react";

const sendHttpRequest = async (url, config) => {
    try {
        const response = await fetch(url, config);
        const resData = await response.json();

        if (!response.ok) {
            throw new Error(resData.message || 'Something went wrong, failed to send request.');
        }

        return resData;
    } catch (error) {
        throw new Error('Failed to send request. ' + error.message);
    }
};

const useHttp = (url, config, initialData) => {
    const [data, setData] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const clearData = () => { setData(initialData) }

    const sendRequest = useCallback(async (data) => {
        setIsLoading(true);
        try {
            const resData = await sendHttpRequest(url, { ...config, body: data });
            setData(resData);
            setError(null); // Reset error state on successful request
        } catch (error) {
            setError(error.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, [url, config]);

    useEffect(() => {
        if (config && (config.method === "GET" || !config.method) || !config) {
            sendRequest();
        }
    }, [sendRequest, config]);

    return {
        data,
        isLoading,
        error,
        sendRequest,
        clearData
    };
};

export default useHttp;
