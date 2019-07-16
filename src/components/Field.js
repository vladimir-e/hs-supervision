import React, { Component } from 'react';

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

  renderControl = field => {
    const { onChange } = this.props;

    switch (field.type) {
      case 'checkbox':
        return <input type="checkbox" onChange={onChange} />;

      default:
        return <textarea cols={45} rows={3} onChange={onChange} />;
    }
  };
}

export default Field;
