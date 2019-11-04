import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tags extends Component {
  static propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    tags: []
  }

  renderTags () {
    const { tags } = this.props
    return tags.map((str, idx) => {
      return (
        <div key={` tag-${idx}`}>
          {str}
        </div>
      )
    })
  }

  render () {
    if (!this.props.tags.length) return null
    return (
      <div className='tags'>
        { this.renderTags() }
      </div>
    )
  }
}

export default Tags
