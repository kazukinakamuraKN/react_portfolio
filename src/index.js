import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from '@material-ui/core/Button';



class LayerOverKihonjouhou extends React.Component {
  render() {
    return (
      <div className="LayerOver">
        <h2>
          <p className="LayerLargeTitle">
            基本情報
          </p>
        </h2>
        <div className="LayerMiddleTitle">
          名前
        </div>
        <div className="LayerSmallTitle">
          中村一貴
        </div>
      </div>
    )
  }
}

class LayerUnder extends React.Component {
  render() {
    return (
      <div className="LayerUnder">
        <LayerOverKihonjouhou/>
      </div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <LayerUnder/>
      </div>
    )
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);