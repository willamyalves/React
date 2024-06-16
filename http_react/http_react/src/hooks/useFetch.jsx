import {useState, useEffect} from "react";

export const useFetch = (url)=>{

    const [data, setData] = useState(null)

    useEffect(()=>{

        const getFetch = async ()=>{

            const response = await fetch(url);

            const json = await response.json();

            setData(json)

        }
        getFetch();

    }, [url])

    return { data };
}