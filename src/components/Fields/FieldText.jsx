import React, { Component } from 'react';
import { Field } from '@atlaskit/form';
import _FieldText from '@atlaskit/field-text';

class FieldText extends Component {
  render() {

    const {
      label,
      required = false,
      value,
      name,
      defaultValue
    } = this.props

    return (
      <div>

        <Field
          label={label}
          name={name}
          isRequired={required}
          defaultValue={defaultValue}
        >
        {({ fieldProps, error }) => (
          <_FieldText
            autoComplete="off"
            value={value}
            {...fieldProps}
          />
        )}
        </Field> 
      </div>
    );
  }
}

export default FieldText;
