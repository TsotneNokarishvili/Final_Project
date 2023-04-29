import { useEffect, useState } from "react";
import apiRequests from "./apiRequest";


export default function useRequest(method,endpoint,apidata){
    const [data, setData] = useState()
    
        useEffect(() =>{
        apiRequests(method,endpoint,apidata)
            .then(response =>{
                setData(response.data);
        })
        .catch(error => console.log(error))
    },[])

    return[data];
}