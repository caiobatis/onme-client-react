import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import Button from '../Button/Button'
import FieldTextRedux from '../Fields/FieldTextRedux'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'username' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      message: '',
      phone: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }
  
  render() {

    const { 
      handleSubmit
    } = this.props

    return (
      <form className="contactForm" onSubmit={ handleSubmit }>
        <div className="items-form">
          <div className="row">
            <div className="col-md-6">
              <FieldTextRedux
                label="Nome"
                value={this.state.username}
                name="username"
                onChange={this.handleChange('username')}
              />
            </div>
            <div className="col-md-6">
              <FieldTextRedux
                label="E-mail"
                value={this.state.email}
                name="email"
                onChange={this.handleChange('email')}
              />
            </div>
            <div className="col-md-6">
              <FieldTextRedux
                label="Telefone"
                value={this.state.phone}
                name="phone"
                onChange={this.handleChange('phone')}
              />
            </div>
            <div className="col-md-12">
              <FieldTextRedux
                name="message"
                label="Dúvida, mensagem, observação, reclamação"
                multiline
                rowsMax="5"
                rows="3"
                value={this.state.message}
                onChange={this.handleChange('message')}
              />            
            </div>
            <div className="col-md-12 pt20">
              <Button
                value="Entrar em contato"
                theme="secundary"
                size="large"
                full={true}
                type="submit"
              />
            </div>
          </div>
        </div>
      </form>
    ) 
  }
}
ContactForm = reduxForm({
  form: 'contact',
  validate
})(ContactForm)

export default ContactForm