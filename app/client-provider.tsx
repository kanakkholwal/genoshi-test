"use client";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Provider({children}: {children: React.ReactNode}) {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out'  
        })
    },[])
    return (
        <>
                {children}
        </>
    )
}