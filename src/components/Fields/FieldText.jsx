import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class FieldText extends Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    console.log(name, event.target.value)
    this.setState({
      [name]: event.target.value,
    });
  };


  render() {

    const {
      label,
      required = false,
      value,
      name,
      defaultValue,
      disabled,
      onChange
    } = this.props

    return (
      <div>
        <TextField
          label={label}
          value={value}
          onChange={onChange}
          margin="normal"
          variant="outlined"
        />        
      </div>
    );
  }
}

export default FieldText;
