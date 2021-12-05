// this guy is where the burger happens
import React, { useState } from 'react'
import Ingredient from './Ingredient'
// we'll also want something that clears the burger

const BurgerPane = props => {
    // console.log('ingredients', props.ingredients)
    // we want to loop over the burgerbits that user has added
    // display one Ingredient component for every bit of the burger
        let burgerBits = props.ingredients.map(mapIngredient => (
            <Ingredient ingredient={mapIngredient} clicky={props.remove}/>
        ))
        return (
            <section className='pane'>
                <h3>The Burger</h3>
                { burgerBits }
                <button onClick={props.clear}>Clear Burger</button>
            </section>
        )
    }

    export default BurgerPane
