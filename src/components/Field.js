import React, { Component } from 'react';
import { log } from 'handlebars';

class Field extends Component {
  render() {
    const { field } = this.props;

    return (
      <div>
        <label>
          {field.name}
          {':'}
          <br />
          {this.renderControl(field)}
        </label>
      </div>
    );
  }

  onInputUpdate = e => {
    let newValue;
    if (e.target.type === 'checkbox') {
      newValue = e.target.checked;
    } else {
      newValue = e.target.value;
    }
    this.props.onChange(this.props.field, newValue);
  };

  renderControl = field => {
    const { onChange } = this.props;

    switch (field.type) {
      case 'checkbox':
        return <input type="checkbox" onChange={this.onInputUpdate} />;

      default:
        return <textarea cols={45} rows={3} onChange={this.onInputUpdate} />;
    }
  };
}

export default Field;
