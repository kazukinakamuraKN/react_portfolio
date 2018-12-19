import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from '@material-ui/core/Button';

class LayerOverLeft extends React.Component {
  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}

class LayerOverRight extends React.Component {
  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}

class LayerUnder extends React.Component {
  render() {
    return (
      <div className="OuterLayerOver">
        <div className="LayerOverLeft">
          <LayerOverLeft/>
        </div>
        <div className="LayerOverRight">
          <LayerOverRight/>
        </div>
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