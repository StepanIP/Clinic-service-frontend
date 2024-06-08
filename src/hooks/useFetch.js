import { useState, useEffect } from 'react';
import api from "../lib/http";

const useFetch = (url, {fetchOnMount=true} = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function fetchData(url){
        setLoading(true)
        api
            .get(url)
            .then((response) => {
                setData(response.data);
            }).catch((err) => {
            setError({
                errorMessage: err.message,
                errorStatus: err.response.status
            })
            if (err.response.status === 403){
                window.location.href = '/logIn';
            }
        }).finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
       if(fetchOnMount){
           fetchData(url)
       }
    }, [url]);
    return { data, loading, error, fetchData}
}
export default useFetch;