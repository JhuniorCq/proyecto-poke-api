import axios from "axios";
import { useEffect, useState } from "react";

export const useGet = (url) => {
    const [stateGet, setStateGet] = useState({
        responseGet: [],
        loadingGet: true,
        errorGet: null
    });

    const getData = async () => {
        try {
            const { data } = await axios.get(url);
            setStateGet({
                responseGet: data,
                loadingGet: false,
                errorGet: null
            });
        } catch (error) {
            console.error("", error.message);
            setStateGet({
                responseGet: null,
                loadingGet: false,
                errorGet: error
            });
        }
    };

    useEffect(() => {
        if(!url) return;
        getData();
    }, [url]);

    return stateGet;
};