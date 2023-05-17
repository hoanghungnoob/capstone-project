import React from "react";
import { ReactDOM } from "react";
import RecipeForMenu from "./Recipe-for Menu";
import GreekSalad from '../Asset/images/greek-salad.png'
import Bruchetta from '../Asset/icons_assets/bruchetta.svg'
import PinaakKumar from '../Asset/images/pinaak-kumar.jpg'
import Divider from '../Asset/images/black dividing.png'

export default function Menu (){
    return(
        <div className="menu">
            <h1>MENU</h1>
            <img className="divider" src={Divider} />
            <div className="menu-content">
            <RecipeForMenu tilte='For Breakfast' image={GreekSalad} subtitle='Take control of your day by taking control of your morning'/>
            <RecipeForMenu tilte='For Lunch' image={Bruchetta} subtitle='Let take a break and step out for lunch'/>
            <RecipeForMenu tilte='For Dinner' image={PinaakKumar} subtitle='New ways to enjoy dinner with your family, friends with our menu.'/>
            </div>
        </div>

    )
}










