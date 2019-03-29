import React, { Component } from 'react';
import FieldSelect from './FieldSelect';
import { Field } from 'redux-form';

class _FieldSelect extends Component {
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
      <FieldSelect
        onChange={this.handleChange}
        initialvalue={this.props.input.value}
        {...rest}
      />
    )
  }
}


export default class FieldSelectRedux extends Component {
  render() {
    return (
      <Field
        {...this.props}
        component={_FieldSelect}
      />
    )
  }
}
