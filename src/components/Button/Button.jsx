import React, { Component } from 'react'
import _Button from '@atlaskit/button'
import classNames from 'classnames'
import styles from './button.scss'

export default class Button extends Component {
  render() {
    const {
      value,
      onClick,
      type,
      size,
      full,
      theme = 'primary',
      ...rest
    } = this.props

    const buttonClass = classNames('button', {
      [theme]: theme,
      [size]: size,
      'full': full
    })

    return (
      <div>
        <_Button
          onClick={onClick}
          type={type}
          className={buttonClass}
          {...rest}
        >
        {
          value || 'Click here'
        }
        </_Button> 
      </div>
    )
  }
}
