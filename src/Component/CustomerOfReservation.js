import React from "react"
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { useState, useContext, createContext } from "react";
import BookingForm from "./BookingForm";
import ConfirmedForm from "./ConfirmForm";



export const Myvalue = createContext() 
export default function CustomerOfReservation ({children}) {
    // console.log('as\\asaasad', Myvalue)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        date: "",
        time: "00:00",
        numberOfGuests: 1,
        occasion: "Birthday"
    })
    return (
        <Myvalue.Provider  value={{formData, setFormData}}>
            {children}
        </Myvalue.Provider>

    )
}
