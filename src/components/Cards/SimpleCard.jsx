import React, { Component } from 'react'
import classNames from 'classnames'
import './cards.scss'

export default class SimpleCard extends Component {
  render() {
    const {
      children,
      title,
      className
    } = this.props

    return (
      <div className={classNames(className, 'simpleCard')}>
        { title && (
          <div className="title">
            <h3 className="h3">{title}</h3>
          </div>
        )}
        <div className="content">
          { children }
        </div>
      </div>
    )
  }
}