import React, { Component } from 'react'
import FieldText from './FieldText'
import { Field } from 'redux-form'
import classNames from 'classnames'
import './fields.scss'

class _FieldText extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (value) {
    const {
      input: { onChange }
    } = this.props

    onChange(value)
  }

  render () {
    const {
      ...rest
    } = this.props
    
    return (
      <FieldText
        onChange={this.handleChange}
        value={this.props.input.value}
        {...rest}
      />
    )
  }
}

export default class FieldTextRedux extends Component {  
  render() {
    
    const fieldClass = classNames('defaultField', {
      [this.props.theme]: this.props.theme
    })

    return (
      <div className={fieldClass}>
        <Field
          {...this.props}
          component={_FieldText}
        />
      </div>
    )
  }
}

