import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";



const Service = () => {

    const [service, setService]= useState([])
    useEffect(()=>{
        fetch('subject.json')
        .then(res => res.json())
        .then(data=>{
           setService(data);
        })
    },[])

 

    return (
        <div>
            <h1 className=" text-center text-4xl font-fontTitle mt-3" > Our Service </h1>
         
         <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 m-3  max-w-5xl mx-auto " > 
            {
                service.map(serviceId=> <ServiceCard key={serviceId.id} serviceCards={serviceId} ></ServiceCard> )
            }
         </div>

        </div>
    );
};


export default Service;