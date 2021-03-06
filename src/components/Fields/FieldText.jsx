import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'


const MoneyFormat = (props, code) => {
  const {
    inputRef,
    onChange,
    id,
    ...rest
  } = props

  return (
    <NumberFormat
      {...rest}
      getInputRef={inputRef}
      onValueChange={(_, e) => onChange(_.floatValue)}
      decimalSeparator=','
      thousandSeparator='.'
      decimalScale={3}
      fixedDecimalScale={true}
      prefix={`${id || 'R$'} `}
    />
  )
}

MoneyFormat.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

class FieldText extends Component {
  render() {
    const {
      mask,
      code,
      onChange,
      handleBlur,
      rowsMax,
      multiline,
      rows,
      input,
      label,
      meta,
      ...custom
    } = this.props

    let inputProps = {}

    switch (mask) {
      case 'money':
        inputProps.inputComponent = MoneyFormat
        break
      default:
        break
    }

    let inputLabelProps = {}

    if (!!label)
      inputLabelProps.shrink = true

    return (
      <TextField
        onChange={onChange}
        onBlur={() => handleBlur(input.value)}
        margin="normal"
        variant="outlined"
        id={code}
        InputLabelProps={inputLabelProps}
        InputProps={inputProps}
        label={label}
        rows={rows}
        multiline={multiline}
        rowsMax={rowsMax}
        error={meta.touched && !!meta.error}
        {...input}
        {...custom}
      />
    )
  }
}

export default FieldText