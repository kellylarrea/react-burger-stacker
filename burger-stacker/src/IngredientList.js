import React, {Component} from 'react'

class IngredientList extends Component {
    render() {
        const burgerItems = this.props.ingredients.map((ing) => {
            console.log(burgerItems)
            return <li>{ing.name}</li>
        })
        return(
            <h1>{burgerItems}</h1>
        )
    }
}


export default IngredientList