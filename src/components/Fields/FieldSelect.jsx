import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import uuidv1 from 'uuid/v1'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { isObject } from 'lodash'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
})

class FieldSelect extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  state = {
    value: !this.props.defaultValue && this.props.defaultValue !== 0 ? '' : this.props.defaultValue.value
  }

  componentWillReceiveProps (nextProps) {
    const { defaultValue } = nextProps

    defaultValue && !this.state.value &&  this.state.value !== 0 && this.setState({ value: defaultValue.value })
  }

  componentWillMount() {
    const { onLoad } = this.props

    this.randomId = uuidv1()

    onLoad && onLoad({
      handleReset: this.handleReset
    })
  }

  handleReset () {
    this.setState({ value: '' })
  }

  handleChange (e) {
    const {
      onChange,
      options
    } = this.props

    const target = e.target
    const value = target.value

    this.setState({ value }, () => onChange && onChange({
      ...target,
      value: isObject(options[0]) ? value : options[value]
    }))
  }

  render () {
    const {
      options,
      label,
      placeholder,
      disabled,
      classes,
      margin,
      errors,
      ...rest
    } = this.props

    const _options = (options || []).map((e, i) => {
      return (
        <MenuItem 
          key={i}
          value={e.value}
        >
          {e.label}
        </MenuItem>
      )
    })

    const content = (
      <FormControl 
        fullWidth={true}
        margin={margin}
      >
        <InputLabel shrink htmlFor={this.randomId}>{label}</InputLabel>
        <Select
          id={this.randomId}
          value={this.state.value}
          onChange={this.handleChange}
          inputProps={{
            name: this.randomId,
            id: this.randomId
          }}
          displayEmpty={true}
          error={errors && !!errors.invalid}
        >
          <MenuItem value=''>
            {placeholder || label}
          </MenuItem>

          {_options}
        </Select>
      </FormControl>
    )

    return content
  }
}

export default withStyles(styles)(FieldSelect)