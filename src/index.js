import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Icon from '@material-ui/core/Icon';

class LayerOverKihonjouhou extends React.Component {
  render() {
    return (
      <div className="LayerOver">
        <h2>
          <div className="LayerLargeTitle">
            基本情報
          </div>
        </h2>
        <div className="LayerMiddleTitle">
          名前
        </div>
        <div className="LayerSmallTitle">
          中村一貴
        </div>
        <div className="LayerMiddleTitle">
          誕生日
        </div>
        <div className="LayerSmallTitle">
          1991/11/26
        </div>
        <div className="LayerMiddleTitle">
          趣味
        </div>
        <div className="LayerSmallTitle">
          筋トレ
        </div>
        <div className="LayerMiddleTitle">
          SNS
        </div>
        <div className="LayerSmallTitle">
          Github
          <a target="_blank" href="https://github.com/kazukinakamuraKN">
            <Icon>link</Icon>
          </a>
        </div>
      </div>
    )
  }
}

class LayerOverSkill extends React.Component {
  render() {
    return (
      <div className="LayerOver">
        <h2>
          <div className="LayerLargeTitle">
            スキル
          </div>
        </h2>
        <div className="LayerMiddleTitle">
          Java
        </div>
        <div>
          <ul>
            <li>
            実務で証券システムの設計書の修正、実装、単体テストを行ってきた
            </li>
            <li>
            資材管理システムの詳細設計の修正
            </li>
          </ul>
        </div>
        <div className="LayerMiddleTitle">
          バージョン管理
        </div>
          <div>
            <ul>
              <li>
                実務でGit,SVNを使用。Fetch,Pull,commitをメインで行ってきた
              </li>
            </ul>
          </div>
        <div className="LayerMiddleTitle">
          JavaScript
        </div>
        <div>
          <ul>
            <li>
              JavaScriptとHerokuを使用してLineBotを作成。筋トレに役立つカロリー計算をしてくれる
              <a target="_blank" href="https://github.com/kazukinakamuraKN/Linebot_Node.js_macro-app">
                <Icon>link</Icon>
              </a>
            </li>
            <li>
              Vue.jsとGithubPagesを使った、clickで色が変わるポートフォリオを、このポートフォリオとは別に作成
              <a target="_blank" href="https://kazukinakamurakn.github.io/portfolio/#/">
                <Icon>link</Icon>
              </a>
            </li>
            <li>
              Vue.jsとfirebaseで、リアルタイム反映できるMarkDownエディタの作成
              <a target="_blank" href="https://mymarkdown2-7b0a7.firebaseapp.com/#/">
                <Icon>link</Icon>
              </a>
            </li>
            <li>
              React.jsとfirebaseを用いて、このポートフォリオを作成
            </li>
          </ul>
        </div>
        <div className="LayerMiddleTitle">
          Ruby
        </div>
        <div>
          <ul>
            <li>
              RubyとHerokuで筋トレに役立つ、カロリー計算を行うプログラムを作成
              <a target="_blank" href="https://macro-manage-app.herokuapp.com/">
                <Icon>link</Icon>
              </a>
            </li>
            <li>
              RubyOnRailsTutorialを完了
              <a target="_blank" href="https://gentle-waters-14409.herokuapp.com/">
                <Icon>link</Icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

class LayerOverShokureki extends React.Component {
  render() {
    return (
      <div className="LayerOver">
        <h2>
          <div className="LayerLargeTitle">
            職歴
          </div>
        </h2>
        <div className="LayerMiddleTitle">
          アウトソーシングテクノロジー
        </div>
        <div>
          <div className="LayerSmallTitle">
              2018/07~
          </div>
          <ul>
            <li>
              SE職として電力会社の資材開発システムの詳細設計の修正
            </li>
            <li>
              証券会社のシステム改修に伴い、詳細設計の修正、実装、単体テスト
              <br/>
              担当のブランチで行われた修正を別ブランチにも適応するかの確認
            </li>
          </ul>
        </div>
        <div>
        <div className="LayerMiddleTitle">
          デンロコーポレーション
        </div>
          <div className="LayerSmallTitle">
            2018/06~高校卒業
          </div>
          <ul>
            <li>
              製造業で機材の操作など行う
            </li>
            <li>
              在職中に自発的にプログラミング講習をTechAcademyにてオンラインで受講
            </li>
          </ul>
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
        <LayerOverSkill/>
        <LayerOverShokureki/>
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