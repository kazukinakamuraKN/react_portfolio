import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from '@material-ui/core/Button';

class LayerOver extends React.Component {
  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}

class LayerUnder extends React.Component {
  render() {
    return (
      <div>
        <LayerOver/>
      </div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className="LayerUnder">
        <LayerUnder/>
      </div>
    )
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);