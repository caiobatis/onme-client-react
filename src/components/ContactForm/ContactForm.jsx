import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Button from '../Button/Button'
import FieldText from '../Fields/FieldText'

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
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

    return (
      <form className="contactForm">
        <div className="items-form">
          <div className="row">
            <div className="col-md-6">
              <FieldText
                label="Nome"
                defaultValue={this.state.name}
                value={this.state.name}
                name="name"
                onChange={this.handleChange('name')}
              />
            </div>
            <div className="col-md-6">
              <FieldText
                label="E-mail"
                defaultValue={this.state.email}
                value={this.state.email}
                name="email"
                onChange={this.handleChange('email')}
              />
            </div>
            <div className="col-md-6">
              <FieldText
                label="Telefone"
                defaultValue={this.state.phone}
                value={this.state.phone}
                name="phone"
                onChange={this.handleChange('phone')}
              />
            </div>
            <div className="col-md-12">
              <FieldText
                id="outlined-multiline-flexible"
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
              />
            </div>
          </div>
        </div>
      </form>
    ) 
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)