import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from '@material-ui/core/Button';

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
        {this.renderLayerUnder(1234253346457)}
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      </div>
    )
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);