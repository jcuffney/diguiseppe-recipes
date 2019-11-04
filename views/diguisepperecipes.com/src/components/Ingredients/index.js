import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Ingredients extends Component {
  static propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    ingredients: []
  }

  renderIngredient (left) {
    const { ingredients } = this.props
    const SIDE = left ? 0 : 1
    return ingredients.map((str, idx) => {
      if (idx % 2 === SIDE) return null
      return <div label={str} key={`ingr-${idx}`} />
    })
  }

  render () {
    if (!this.props.ingredients.length) return null
    return (
      <>
        <h1>Ingredients:</h1>
        <hr />
        <div>
          <div>
            <div>
              { this.renderIngredient(true) }
            </div>
            <div>
              { this.renderIngredient(false) }
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Ingredients
