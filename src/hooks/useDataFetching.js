/**
 *  This is custom hook to implement common logic where 
 *  use case - if board without lanes and only tasks
 *  use case - renders all the lanes and tasks 
 **/

import { useState, useEffect } from "react";

const useDataFetching = (dataSource) =>{

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    //Data fetching is done
    useEffect(()=> {
        async function fetchData(){
            try{
                const data = await fetch(dataSource);
                const result = await data.json();

                if(result){
                    setData(result);
                    setLoading(false);
                }
            }
            catch(e){
                setLoading(false);
                setError(e.message);
            }
        }

        fetchData();
    },[dataSource]);

    return([loading, error, data]);
};

export default useDataFetching;