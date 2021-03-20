📋 정리 노트
====



#### 👉 01 개발환경
```
npm run start
npm run build
npm install -g serve
```
#
#### 👉 02 컴포넌트 제작
  > Javascript의 문법을 이용해 Html을 구조화
**props (사용자 정의 태그)**
  ```
  <속성>{this.props.이름}</속성>
  {this.props.동작구문이름}
  ```


#
#### 👉 03 State
  > 컴포넌트가 잘 구현되기 위해서는 사용자가 접근하기 쉬운 ``Props``와, 내부의 ``State``가 분리되어 있어야 한다.
* state로 속성을 정하고 아래 함수로 불러오면서 효율적으로 실행
* 배열을 사용할 시, 리액트가 ``Key``값을 필요로 함  
* ``alert(내용)`` 경고창 띄우기


#
#### 👉 04 Event
  > 페이지가 rerode 되지 않고, 동적으로 바뀌는 것은 리액트의 장점이다
* click에 따라 ``mode``를 바꾸어 실행함으로써 이벤트를 만들 수 있음
* ``this.mode``로 직접 수정하지 말고 ``setState``를 통해 수정해야 리액트가 반영 가능
* ``this``는 가르키는 것이 모호함 ``.bind{this}``를 뒤에 붙여주어야 함
* ``selected_content_id``를 통해 ``mode``내에서 순번을 만들어 이벤트가 입력값(번호)에 따라 실행하게 만들 수 있음
* ``e.preventDefault()``로 새창으로 전환되는 것을 막음

**onChangePage & onClick**

```react
onClick={function(e){ //함수 생성
  e.preventDefaut();
  //이벤트를 막음 (다른 페이지로 이동하는 것을 막음)
  this.props.onChangePage(e.target.dataset.id);
}.bind(this)}
}
```

#
#### 👉 05 Create 기능 구현
  >``Component``안에서 ``props``를 변경할 수 는 없다
  >이벤트를 구현함으로써 하위 → 상위 ``Component``를 바꿀 수 있음. 반대로는 ``props`` 사용



![a](https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb7Ing6%2FbtqDrkNbvBs%2FMi1pUyMUSRYYLmE6zvjAG0%2Fimg.png)
* 이벤트가 실행되는 함수를 ``handler``라고도 부름

**mode 변경**
```
<a href="/create" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMode('create');
        }.bind(this)}>create</a>
```

**mode 전환**
```
<Control onChangeMode={function (_mode){
          this.setState{
            mode:_mode;
          }
위에서
this.state.mode === '모드 이름'
```

**form 구현**
* 값이 아무것도 없을 때 ``placeholder="내용"`` 내용이 출력 화면에 나타나게 함
* ``textarea`` 텍스트가 여러 줄일 때 사용
* ``action="/주소"`` 정보를 주소로 전달
* 아래의 버튼 ``submit``를 실행했을 시, ``onSubmit``안에 들어 있는 함수를 실행함 (form에서 지원)

**onSubmit 이벤트**
```
onSubmit={function (e) {
                e.preventDefault();
                this.props.onSubmit(
                  e.taget.title.value, //입력 값을 받아 오기 (타이틀)
                  e.taget.desc.value //입력 값 내용 받기
                );
              }.bind(this)
```

**contents 변경**
  > ``onSubmit event``으로 받아온 내용을 ``create``모드일 때, ``contents``에 추가시켜 주면 된다
  * ``max_content_id``라는 변수를 만들어서 마지막 배열의 수를 저장함. 내용을 추가할 때마다 ``max_content_id``를 증가시켜줌
* ``this.setState``를 사용하여 얻은 값을 ``state``에 추가시킬 수 있다
* ``push``는 배열에 원소를 추가하여 오리지널 데이터를 변경함. ``concat``으로 배열에 원소를 넣으면 원본을 바꾸지 않으면서 배열을 새로 갱신함.
* 객체를 만듦
```
var _contents = this.state.contents.concat(
        {id:this.max_conid, title:_title, desc:_desc}
      )
this.setState({
  contents:_contents
});
```

**shouldComponentUpdate & immutable**
  >우리는 필요한 때에만 ``TOC``를 호출시킬 수 있어야 한다 (낭비X)
```
shouldComponentUpdate(newProps, newState){
  if(this.props.data === newProps.data){
    return false;
  }
  return true;
}
```
* 이전의 데이터와 바꾼 데이터(인자값 ``newProps``)가 같다면 false를 리턴 → ``render()``가 실행되지 않는다
* true를 리턴하였을 땐 실행됨
* 이는 원본 배열을 변경하지 않고 복사한 후, 수정하였을 때 가능하다
* 배열을 복사하는 방법으로는 ``Array.from()``이 있음
* 객체를 복사하는 방법으로는 ``Object.assign()``이 있음
```
var x = Object.assign({객체 (빈 공간)}, 복사할 객체)
```
* immutable (불변성) : 원본을 변경시키지 않는 방법

#
#### 👉 06 Updata & delete
  > Update는, mode에 해당하는 id를 긁어와 ``read`` 할 수 있어야 하며 마찬가지로 입력값을 가변적으로 받아 들여 ``content``에 반영할 수 있어야 한다
* 이때 받아온 ``props``를 변경하지 말고 ``state``화 시키는 작업이 필요함
* ``onChange``를 통해 인덱스값 수정
```
constructor(props){
  super(props) //상위 props를 선택
  this.state = {
    title:this.props.data.title,
    desc:this.props.data.desc
  }
}
```
```
inputFormHandler(e){
  this.setState({[e.target.name]:e.tatget.value});
}
```
* id값을 저장해두는 것이 좋은 이유 : 다른 용도로 활용될 가능성이 있음 (구현에 충실)
* 메인 코드 ↓
```
<UpdateContent data={_cont} onSubmit={
  function(_id, _tit, _desc){
    var _con = Array.from(this.state.contents);
    var i=0;
    while(i<_con.length){
      if(_con[i].id === _id){
      _con[i] = {id:_id, title:_tit, desc:_desc};
      break;
      }
      i++;
    }
  }
}></UpdateContent>
