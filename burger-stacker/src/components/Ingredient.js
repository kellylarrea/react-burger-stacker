// Ingredient is a child of IngredientList
// gets the props of an individual ingredient, color and name
import React, { useEffect } from 'react'

export default class Ingredient extends Component {
    
    render () {
        return (
            <p style={{backgroundColor: this.props.ingredient.color}} onClick={this.props.clicky}>
                { this.props.ingredient.name }
            </p>
        )
    }
}