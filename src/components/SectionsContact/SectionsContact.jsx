import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ContactForm from '../ContactForm/ContactForm'
import SimpleCard from '../Cards/SimpleCard'
import { senMailContact } from '../../actions/ContactActions'
import Loader from '../Loader/Loader'


class SectionsContact extends Component {

  constructor(props) {
    super(props)
    
    this.submit = this.submit.bind(this);
  }

  submit = (values) => {
    const {
      senMailContact
    } = this.props
    // print the form values to the console
    senMailContact(values)
  }
  
  render() {
    const {
      contact
    } = this.props
    
    return (
      <div className="sectionsContact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="defaultTitle">
                <h2 className="h2">Entre em contato</h2>
                <p className="p">
                  Este é o canal de comunicação entre a Onme e você. <br/>
                  Nossos telefones estão disponíveis de segunda a sexta, a partir das 9h até as 18h. <br/>
                  Temos o chat para tirar suas dúvias na hora.  <br/>
                  Você também pode nos mandar um e-mail quando quiser.                
                </p>
              </div>            
            </div>
            <div className="col-md-6">
              { contact.loading && ( <Loader/> )}
              <ContactForm onSubmit={this.submit}/>
              <div className={`label ${contact.error ? 'error': 'success'}`}>
                {contact.message && <p className="p">{contact.message}</p>}
              </div>
            </div>
            <div className="col-md-4 offset-md-2">
              <SimpleCard
                title={'Contatos úteis'}
                className={'mt50'}
              >
              <div className="contacts">
                <div className="row">
                  <div className="col-md-6">
                    <p className="p">
                      <b>Televendas</b>
                      <br/>
                      (11) 5078-7000
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="p">
                      <b>Whats App</b>
                      <br/>
                      (11) 99222-3949
                    </p>
                  </div>
                  <div className="col-md-12">
                    <p className="p">
                      <b>E-mail</b>
                      <br/>
                      contato@onmecambio.com.br
                    </p>
                  </div>
                </div>
              </div>
              </SimpleCard>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  contact: state.ContactReducer
})

const mapDispatchToProps = dispatch => bindActionCreators({
  senMailContact
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SectionsContact) 
