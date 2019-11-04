import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Steps extends Component {
  static propTypes = {
    steps: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    steps: []
  }

  renderStep () {
    const { steps } = this.props
    return steps.map((str, idx) => {
      return <Checkbox label={str} key={`step-${idx}`} />
    })
  }

  render () {
    if (!this.props.steps.length) return null
    return (
      <>
        <h1>Instructions:</h1>
        <hr />
        <div>
          <div>
            { this.renderStep() }
          </div>
        </div>
      </>
    )
  }
}

export default Steps
