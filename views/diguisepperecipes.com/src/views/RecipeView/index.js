import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Ingredients from 'components/Ingredients'
import Steps from 'components/Steps'
import Tags from 'components/Tags'

import styles from './index.module.sass'

export class RecipeView extends Component {
  static propTypes = {
    recipe: PropTypes.object
  }

  static defaultProps = {
    id: '',
    recipe: {}
  }

  componentDidMount () {
    const { recipe } = this.props
    if (recipe && recipe.title) {
      const { title } = recipe
      document.title = `${title} - Diguiseppe Recipes`
    }
  }

  render () {
    const { recipe } = this.props
    if (!recipe) return null
    const {
      title,
      author,
      ingredients,
      steps,
      description,
      category,
      duration,
      tags
    } = recipe

    const ts = tags && category ? [ ...tags, ...category ] : []

    return (
      <div className='recipe-view transition-wrapper'>
        <div>
          <h1 as='h1' className={styles.white}>
            <Link to='/'>
              <Icon name='arrow left' />
            </Link>
            { title }
          </h1>
          <h5 className={styles.white}>By: { author }</h5>
          {duration && (
            <p>
              Cook Time: { duration.time } { duration.unit }
            </p>
          )}
          <div tags={ts} />
          <p>{ description }</p>
          <hr />
          <Ingredients ingredients={ingredients} />
          <Steps steps={steps} />
          <p className={styles.center}>Made with <span className='heart'>&hearts;</span> by Joe Cuffney</p>
        </div>
      </div>
    )
  }
}

export default RecipeView
