import React from 'react';
import Field from './Field';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldsMap: {},
    };
  }

  onFieldChange = (field, newValue) => {
    const fieldsMap = { ...this.state.fieldsMap };
    fieldsMap[field.uuid] = newValue;

    this.setState({ fieldsMap });
  };

  onSave = e => {
    e.preventDefault();
    const { fields } = this.props.data;
    const { fieldsMap } = this.state;
    const payloadFields = Object.keys(fieldsMap).map(uuid => {
      return {
        uuid: uuid,
        value: fieldsMap[uuid],
      };
    });

    const payload = { fields: payloadFields };

    console.table(payloadFields);
    console.log('*** SEND ***');
    console.log(payload);
  };

  render() {
    const { data } = this.props;

    return (
      <div className="Editor">
        <div className="workingArea">
          <img src={data.image} alt="" />
        </div>
        <div className="fieldsList">
          <form onSubmit={this.onSave}>
            <input type="submit" value="Save" />
            {data.fields.map(f => (
              <Field key={f.uuid} field={f} onChange={this.onFieldChange} />
            ))}
            <input type="submit" value="Save" />
          </form>
        </div>
      </div>
    );
  }
}

export default Editor;
