import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error("could not featch the data for theat reasorce")
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setLoading(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log(" featch aborted")
                    }
                    else {
                        setError(err.message)
                        setLoading(false);
                    }
                })
        }, 1000);
        return () => abortCont.abort();

    }, [url]);

    return { data, loading, error };
}

export default useFetch;