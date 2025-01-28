import { useEffect, useState } from "react";

export function useFetch(url){

const [data,setdata]= useState([]);
const [loading,setloading]=useState(true);
const [error,seterror]=useState(null);

useEffect(()=>{

    const FetchAllData = async ()=>{
    setloading(true);
    
    try {
        let response = await fetch(url);
        setdata(await response.json());
        setloading(false);
        
    } catch (error) {
        setloading(false);
        seterror(error);
        
    }
}
FetchAllData();

},[url]);

return {data,loading,error};

}