props나 state 값이 바뀌면 render가 다시 호출된다 -> 화면이 다시 그려진다

함수 뒤에 **.bind(obj)**를 붙이면 함수의 this가 obj가 된다

컴포넌트 생성 후 동적으로 state 값을 변경할 때는 **setState 함수**를 이용해서 변경해야 한다.