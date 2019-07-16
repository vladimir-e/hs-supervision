import React from 'react';
import './App.css';
import Editor from './components/Editor';

const TASKS_URL = 'https://raw.githubusercontent.com/hyperscience/interview-problems/master/taskRequest_1.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: null,
    };
  }

  componentDidMount() {
    fetch(TASKS_URL)
      .then(response => response.json())
      .then(json => this.setState({ task: json }));
  }

  render() {
    const { task } = this.state;

    if (!task) {
      return <div>Loading Task...</div>;
    }

    const editorData = task.input_payload;

    return (
      <div className="App">
        <header className="App-header">{editorData.template_name}</header>
        <Editor data={editorData} />
      </div>
    );
  }
}

export default App;
