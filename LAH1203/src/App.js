// function type
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

// class type
import React, { Component } from 'react';
// import logo from './logo.svg'
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Subject from './components/Subject';
import Control from './components/Control';
import './App.css';

class App extends Component {
  // constructor가 가장 먼저 실행되면서 초기화됨
  constructor(props) {
    // 초기화시키고 싶은 코드를 이 안에 작성
    super(props);
    // 내부 보안이 필요한 정보는 state로 정리
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
      selected_content_id: 2,
      subject: {title: 'WEB', sub: 'world wide web!'},
      welcome: {title: 'Welcome', desc: 'Hello, React!!'},
      contents: [
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i++;
    }
  }
  render() {
    // section 4
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
        this.max_content_id++;
        // push
        // this.state.contents.push(
        //   {id: this.max_content_id, title: _title, desc: _desc}
        // );
        // concat
        // var _contents = this.state.contents.concat(
        //   {id: this.max_content_id, title: _title, desc: _desc}
        // )
        var _contents = Array.from(this.state.contents);
        _contents.push(
          {id: this.max_content_id, title: _title, desc: _desc}
        );
        this.setState({
          // contents: this.state.contents
          contents: _contents,
          mode: 'read',
          selected_content_id: this.max_content_id
        });
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update') {
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={function(_id, _title, _desc){
        var _contents = Array.from(this.state.contents);
        var i = 0;
        while (i < _contents.length) {
          if (_contents[i].id === _id) {
            _contents[i] = {id: _id, title: _title, desc: _desc};
            break;
          }
          i++;
        }
        console.log(_contents);
        this.setState({
          contents: _contents,
          mode: 'read'
        });
      }.bind(this)}></UpdateContent>
    }
    return (
      /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      */
      /*
      // Section 2
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
      */
      // Section 3, 4
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode: 'welcome'});
          }.bind(this)}
        >
        </Subject>
        <TOC onChangePage={function(id){
          this.setState({
            mode: 'read',
            selected_content_id: Number(id)
          });
        }.bind(this)} data={this.state.contents}></TOC>
        <Control onChangeMode={function(_mode){
          if (_mode === 'delete') {
            if (window.confirm('삭제하시겠습니까?')) {
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while (i < _contents.length) {
                if(_contents[i].id === this.state.selected_content_id) {
                  _contents.splice(i, 1);
                  break;
                }
                i++;
              }
              this.setState({
                mode: 'welcome',
                contents: _contents
              });
              alert('삭제되었습니다.');
            }
          } else {
            this.setState({
              mode: _mode
            });
          }
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
