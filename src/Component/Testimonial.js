import React, { useEffect } from "react"
import { Children, cloneElement, useState } from "react"
import Divider from '../Asset/images/black dividing.png'
import CommentForTestmonial from "./Comment-for-Testimonial"

export default function Testimonial() {
    const review = [
        {
            id: 0,
            fullname: "Miu",
            image: 'https://i.pinimg.com/564x/13/1b/fe/131bfe796fdae06e194f015808782209.jpg',
            star: '10',
            content: 'I hight recommend this restaurant to anyone looking for a tasty dining experience'

        }, {
            id: 1,
            fullname: "Mina",
            image: 'https://i.pinimg.com/564x/9b/19/c1/9b19c184d99a0d5887339fdba91fe539.jpg',
            star: '10',
            content: 'The staff was knowledgeable about the menu and offered helpful suggestions. Our food arrived promptly.'
        }, {
            id: 2,
            fullname: "Mino",
            image: 'https://i.pinimg.com/564x/09/05/eb/0905ebad748d94eefa9489c3a2e18e54.jpg',
            star: '8',
            content: 'The prices on their menu are more suited for people with a higher income bracket. However, I must say that the quality of food and service is excellent and worth the cost. '
        }, {
            id: 3,
            fullname: "Boki",
            image: 'https://i.pinimg.com/564x/29/55/50/295550a923ce7f27fdc6d339ee1e4519.jpg',
            star: '9',
            content: 'I appreciate how the restaurant takes a unique view on their dishes, using fresh sourced ingredients. The flavors were out of this word'
        }
    ]
    const [list, setList] = useState(review)
    useEffect(() => {
        let timer = setInterval(() => {
            let new_review = [...list];
            let shift_array = new_review.shift();
            new_review.push(shift_array);
            setList(new_review);
        }, 10000)
        
        return () => clearInterval(timer)
    }, [list])



    const Slider = ({ children }) => {
        return (
            <div className="list" >
                {Children.map(children, (child, index) =>
                    cloneElement(child, {
                        isHighlighted: Number(index) == 1
                    })
                )}
            </div>
        );
    }


    return (
        <div className="testimonial">
            <h1>TESTIMONIAL</h1>
            <img className="divider" src={Divider} />
            <div className="reviews">
                <Slider>
                    {list.map((el) => {
                        return (
                            <CommentForTestmonial id={el.id} name={el.fullname} image={el.image} star={el.star} content={el.content} />
                        )
                    })}
                </Slider>
            </div>
        </div>

    )
}