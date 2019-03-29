import React, { Component } from 'react'
import FieldText from './FieldText'
import { Field } from 'redux-form'

class _FieldText extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (value) {
    const {
      input: { value: omitValue, onChange }
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
    return (
      <Field
        {...this.props}
        component={_FieldText}
      />
    )
  }
}

