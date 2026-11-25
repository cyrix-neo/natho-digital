import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTopTop(){
    const { pathname }= useLocation
    useEffect(()=> {
        window.ScrolTop(0,0)
    }, [pathname])

    return null
    
}