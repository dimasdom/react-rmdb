import {useEffect} from "react";

const useFetching = someFetchActionCreator => {
    useEffect( () => {
        someFetchActionCreator();
    }, [])
}

export default useEffect