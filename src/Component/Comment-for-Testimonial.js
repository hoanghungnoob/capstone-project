import React, { useEffect } from "react";
import { ReactDOM } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useRef } from "react";

export default function CommentForTestmonial(props) {
    let rest = 0;
    const evalue = (star) => {
        rest = 10 - star;
        return (
            <div className="stars">
                {[...new Array(star).keys()].map((a) => {
                    return (<div className="star" key={`active ${a}`}><FaStar /></div>)
                })}
                {[...new Array(rest).keys()].map((b) => {
                    return (<div className="star" key={`active ${b}`} ><FaRegStar /></div>)
                })}
            </div>
        )

    }
    let theme = useRef()
    useEffect(() => {

        if (props.isHighlighted == true) {
            theme.current.style.transform = `translateX(-100%)`;
        } else {
            theme.current.style.transform = `translateX(-100%)`
        }
    })


    // style={styleForSlider(props.isHighlighted, Number(props.id))}
    //{backgroundColor: 'blue'}
    // let theme = {transform: `translateX(${c}00%)`}
    return (
        <article ref={theme} className="testimonial" key={props.name}>
            <section className="testimonial-left">
                <img className="avatar" src={props.image} />
            </section>
            <section className="testimonial-right">
                <h2>{props.name}</h2>
                <div className="evaluate">
                    {evalue(Number(props.star))}
                </div>
                <p>{props.content}</p>
            </section>
        </article>
    )
}