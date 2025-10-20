import { useState, useEffect } from "react";

const useData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch('/data.json')
            .then(res => {

                return res.json();
            })
            .then(data => setData(data))
            .catch(err => console.error('Fetch error:', err))
            .finally(() => setLoading(false))
    }, []);

    return { data, loading };
};

export default useData;
