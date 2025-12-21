import {useState, useEffect} from "react";

export default function Roles() {
    const roles = ["Business Analyst", "Data Analyst","Full Stack Developer","MERN Stack Developer"];
    const [index,setIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((prev)=>(prev+1)%roles.length);
        },3000);

        return () => clearInterval(interval);
    },[]);

    return (
        <h2 className="text-2xl md:text-3xl font-bold text-white-300 transition-all duration-700 text-center tracking-wide animate-fade" key={index}>
            {roles[index]}
        </h2>
    )
}