import React from "react"
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { useState, useReducer, useContext } from "react";
import { fetchAPI } from "../api";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GiPartyPopper, GiPartyHat } from "react-icons/gi";
import CustomerOfReservation from "./CustomerOfReservation";
import { Myvalue } from "./CustomerOfReservation";



const initState = 1;
const reducer = (state, action) => {
    switch (action) {
        case "up":
            if (state == 10) {
                return state;
            } else {
                return state + 1;
            };
        case "down":
            if (state == 0) {
                return state;
            } else {
                return state - 1;
            }
        default:
            return state;
    }
}

export default function BookingForm() {
    const [options, setOptions] = useState([])
    const nav = useNavigate();
    const { formData, setFormData } = useContext(Myvalue)
    console.log('valuesdfdsf', formData)


    const handleFormChange = (event) => {
        const { name, value } = event.target
        let a = { ...formData, [name]: value, numberOfGuests: count }
        let b = a.date.split('-')
        let c = new Date(b[0], b[1], b[2])
        let d = fetchAPI(c)
        setOptions(d)
        setFormData(a)
        // setFormData((prevFormData) => ({
        //   ...prevFormData,
        //   [name]: value
        // }))
    }
    const currentDate = new Date().toISOString().split("T")[0];
    console.log(currentDate);
    const [count, dispatch] = useReducer(reducer, initState)
    const handleSubmit = (event) => {
        event.preventDefault()
        if (formData.firstName === "" ||
            formData.lastName === "" ||
            formData.contactNumber === "" ||
            formData.date === "" ||
            formData.numberOfGuests === 0) {
            alert('Fill properly the form')
        } else {
            nav("../confirmed")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <section className="booking-form-left">
                <img src="https://i.pinimg.com/564x/89/32/92/89329232d4ce866f569fa34d77a37a3f.jpg" />
            </section>
            <section className="booking-form-right">
                <h1>Booking Form</h1>
                <div className="seperate">
                    <label htmlFor="first-name">First Name: </label>
                    <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleFormChange} required />
                </div>
                <div className="seperate">
                    <label htmlFor="last-name">Last Name: </label>
                    <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleFormChange} required />
                </div>
                <div className="seperate">
                    <label htmlFor="contact-number">Contact Number: </label>
                    <input type="text" id="contact-number" name="contactNumber" placeholder="1234567890"
                        value={formData.contactNumber} onChange={handleFormChange}
                        pattern="[0-9]{10}" />
                </div>
                <div className="seperate date-time">
                    <label htmlFor="res-date">Choose date: </label>
                    <input type="date" id="res-date" name="date" value={formData.date} onChange={handleFormChange} required min={currentDate} />
                </div>
                <div className="seperate-child">
                    <div className="child reservation-time">
                        <label htmlFor="res-time">Choose time: </label>
                        <select id="res-time " name="time" value={formData.time} onChange={handleFormChange} required>
                            {options.map((opt) => {
                                return (
                                    <option key={opt}>{opt}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="child reservation-numberOfGuests" >
                        <label htmlFor="res-numberOfGuests">Choose amount of customers: </label>
                        <div id="res-numberOfGuests">
                            <button className="res-add" onClick={(e) => { dispatch('up'); e.preventDefault() }}><FaPlus /></button>
                            <p>{0 <= count <= 10 ? count : console.log('ko được vượt quá 10 người')}</p>
                            <button className="res-minus" onClick={(e) => { dispatch('down'); e.preventDefault() }}><FaMinus /></button>
                        </div>
                    </div>
                    <div className="child reservation-occasion">
                        {/* <label htmlFor="res-occasion">Choose occasion: </label>
                        <select id="res-occasion " name="occasion" value={formData.occasion} onChange={handleFormChange} required>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select> */}
                        <label htmlFor="res-noccasion"> Choose occasion: </label>
                        <ul className='reservation-occasion-1' id="res-noccasion">
                            <li>
                                <input type="radio" id='Birthday' name='occasion' value="Birthday" onChange={handleFormChange} />
                                <label htmlFor="Birthday"><GiPartyHat />Birthday</label>
                            </li>
                            <li>
                                <input type="radio" id='Anniversary' name='occasion' value="Anniversary" onChange={handleFormChange} />
                                <label htmlFor="Anniversary"><GiPartyPopper />Anniversary</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="reservation-submit">
                    <input type="submit" value="Submit" />
                </div>
            </section>

        </form>
    )
}