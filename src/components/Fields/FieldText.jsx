import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'
import FormHelperText from '@material-ui/core/FormHelperText'
import MaskedInput from 'react-text-mask'


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
      label,
      required = false,
      value,
      name,
      defaultValue,
      disabled,
      mask,
      code,
      onChange
    } = this.props

    let inputProps = {}

    switch (mask) {
      case 'money':
        inputProps.inputComponent = MoneyFormat
        break
    }

    let inputLabelProps = {}

    if (!!label)
      inputLabelProps.shrink = true

    return (
      <div>
        <TextField
          value={value}
          onChange={onChange}
          margin="normal"
          variant="outlined"
          id={code}
          InputLabelProps={inputLabelProps}
          InputProps={inputProps}
          placeholder={label}
          disabled={disabled}
        />        
      </div>
    );
  }
}

export default FieldText