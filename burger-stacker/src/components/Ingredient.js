// Ingredient is a child of IngredientList
// gets the props of an individual ingredient, color and name
import React, { Component } from 'react'

export default class Ingredient extends Component {
    
    render () {
        return (
            <p style={{backgroundColor: this.props.ingredient.color}}>
                { this.props.ingredient.name }
            </p>
        )
    }
}