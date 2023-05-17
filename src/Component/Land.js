import React from "react";
import { ReactDOM } from "react";
import hero from  "../Asset/images/hero.png"
import { useNavigate } from "react-router-dom";

export default function Land() {
    const nav = useNavigate();
    return (
        <div className="landing-page">
            <div className="content">
                <div className="content-left">
                    <div className="content-left-first common">
                        <p className="title">Little Lemon</p>
                        <p className="subtitle">Chicago</p>
                        <p className="desc">Opened on May 10, 2023, the popular local and tourist-friendly Little Lemon restaurant always make everyone feel welcome to come here.</p>
                    </div>
                    <button onClick={()=>{nav('/booking')}}>Reserve a table</button>
                </div>
                <div className="content-right common">
                    <img src={hero}/>
                </div>
            </div>
        </div>
    )
}








