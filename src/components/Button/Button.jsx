import React, { Component } from 'react'
import ButtonItem from '@material-ui/core/Button'
import classNames from 'classnames'
import './button.scss'

export default class Button extends Component {
  render() {
    const {
      value,
      onClick,
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
        <ButtonItem
          onClick={onClick}
          className={buttonClass}
          {...rest}
        >
        {
          value || 'Click here'
        }
        </ButtonItem> 
      </div>
    )
  }
}
