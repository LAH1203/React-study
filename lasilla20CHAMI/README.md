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


#
#### 👉 04 Event
  > 페이지가 rerode 되지 않고, 동적으로 바뀌는 것은 리액트의 장점이다
* click에 따라 ``mode``를 바꾸어 실행함으로써 이벤트를 만들 수 있음
* ``this.mode``로 직접 수정하지 말고 ``setState``를 통해 수정해야 리액트가 반영 가능
* ``this``는 가르키는 것이 모호함. ``.bind{this}``를 뒤에 붙여주어야 함
* ``selected_content_id``를 통해 ``mode``내에서 순번을 만들어 이벤트가 입력값(번호)에 따라 실행하게 만들 수 있음

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
#### 👉 05 Creat 기능 구현

![a](https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb7Ing6%2FbtqDrkNbvBs%2FMi1pUyMUSRYYLmE6zvjAG0%2Fimg.png)
