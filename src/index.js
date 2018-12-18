import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LayerUnder extends React.Component {
  render() {
    return (
      <div>
        {this.props.value}
      </div>
    )
  }
}

class Main extends React.Component {
  renderLayerUnder(i) {
    return (
        <LayerUnder value={i}/>
    )
  }
  render() {
    return (
      <div>
        {this.renderLayerUnder(1)}
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);