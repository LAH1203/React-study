import React, { Component } from 'react';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import './App.css';
import CreateContent from './components/CreateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id=3;
    this.state = {
      mode: 'read',
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
  render() {
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title = {_title} desc = {_desc}></ReadContent>
    }
    else if (this.state.mode === 'read') {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc; 
          break;
        }
        i++;
      }
      _article = <ReadContent title = {_title} desc = {_desc}></ReadContent>
      
    } else if (this.state.mode === 'create') {
      _article= <CreateContent onSubmit={function(_title,_desc){
        // add content to this.state.contents
        this.max_content_id = this.max_content_id+1;
        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title: _title, desc: _desc}
        )
        this.setState({
          contents:_contents
        });
      }.bind(this)}></CreateContent>
    }
    return (
      <div className="App">
          <Subject 
            title={this.state.subject.title} 
            sub={this.state.subject.sub}
            onChangePage= {function(){
              this.setState({mode:'welcome'});
              //alert('hi');
            }.bind(this)}
            >
          </Subject>
 
        <TOC onChangePage={function(id){
          //alert('hi');
          this.setState({
            mode: 'read',
            selected_content_id: Number(id) // String을 숫자로 바꾸기
          });
        }.bind(this)}data={this.state.contents}></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode // 현재 상태에 따라 mode 변경하기
          });
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
