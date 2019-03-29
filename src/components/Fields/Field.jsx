import React, { 
  Component, 
  Children, 
  cloneElement
} from 'react'
import uuidv1 from 'uuid/v1'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

class Field extends Component {
  componentWillMount() {
    if (this.props.label)
      this.randomId = uuidv1()
  }

  render () {
    const {
      label,
      children
    } = this.props

    const content = this.props.label ? Children.map(children, child =>
      cloneElement(child, { id: this.randomId })
    ) : children

    return (
      <FormControl fullWidth={true}>
        {label && (
          <InputLabel htmlFor={this.randomId}>{label}</InputLabel>
        )}
        
        {content}
      </FormControl>
    )
  }
}

export default Field