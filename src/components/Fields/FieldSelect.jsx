import React, { Component } from 'react';
import { Field } from '@atlaskit/form';
import Select from '@atlaskit/select';

class FieldSelect extends Component {

  render() {
    const {
      label,
      required = false,
      options = [],
      name,
      defaultValue
    } = this.props

    return (
      <div>
        <Field
          label={label}
          name={name}
          defaultValue={defaultValue}
        >
          {({ fieldProps, error }) => (
            <Select
              defaultValue={defaultValue}
              name={name}
              options={options}
              {...fieldProps}
            />
          )}
        </Field>
      </div>
    );
  }
}

export default FieldSelect;
