import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `FRUITSPLANET - ${title}` ;
    },[title])
}

export default useTitle;