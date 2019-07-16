import React from 'react';
import Field from './Field';

class Editor extends React.Component {
  onFieldChange(todo) {
    console.log(todo);
  }

  render() {
    const { data } = this.props;

    return (
      <div className="Editor">
        <div className="workingArea">
          <img src={data.image} alt="" />
        </div>
        <div className="fieldsList">
          {data.fields.map(f => (
            <Field
              key={f.uuid}
              field={f}
              onChange={this.onFieldChange.bind(this, f)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Editor;
