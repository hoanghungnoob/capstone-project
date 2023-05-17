import React from "react"
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Myvalue } from "./CustomerOfReservation";
import { useContext } from "react";

export default function ConfirmedForm() {
    const {formData } = useContext(Myvalue)
    return (
        <div className="confirm-form">
                <h1>Thanks for Reservation</h1>
                <p>Thank Mr/Mrs <b>{formData.firstName} {formData.lastName}</b> for 
                choosing our restaurant to celerate your <b>{formData.occasion} Party</b>
                , we are thrilled and an honor to be apart of your special day.
                We appropriate to hear your feedbacks or suggestions after dining.
                Hope you have a memorable time on <b>{formData.date}</b>.
                If you have any questions, don't hestitate to contact with us.</p>
        </div>
    )
}