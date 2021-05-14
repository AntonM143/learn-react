import React from 'react';
import style from './recipe.module.css';
const { v4: uuidv4 } = require('uuid');


const Recipe = ({title, calories,image, ingredients, cautions,dishType, cuisineType}) =>{
    return (
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <ul className={style.ul}>
                {ingredients.map(ingredient=>
                    <li className={style.li} key={uuidv4()}>{ingredient.text}</li>
                )}
            </ul>
            <ul className={style.ul}>
                <li className={style.li}>
                    Calories: {Math.floor(calories)}
                </li>
                <li className={style.li}>
                     Cautions: {cautions  ? cautions  : '?' } 
                </li>
                <li className={style.li}>
                    Dishtype: {dishType ? dishType  : '?' }
                </li>
                <li className={style.li}>
                    CuisineType: {cuisineType ? cuisineType : '?'}
                </li>
                    
                    
            </ul>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}

export default Recipe;