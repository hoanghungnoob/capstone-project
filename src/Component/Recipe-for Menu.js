import React from "react";
import { ReactDOM } from "react";

export default function RecipeForMenu (props){
    return(
        <div className="recipe" key={props.tilte}>
            <img src={props.image}/>
            <h2>{props.tilte}</h2>
            <p>{props.subtitle}</p>
        </div>
    )
}
