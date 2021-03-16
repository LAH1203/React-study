[Reactjs org](https://reactjs.org/)

### Section 1
- 샘플에서 실제로 눈으로 보이는 화면은 App.js를 통해 만들어져 있다.
- 우리가 실제로 서비스할 때는 build 파일의 것들을 사용한다.(?)
- npm install create-react-app
- 해당 폴더에 가서 create-react-app .
#### 명령어들
```
npm run start
npm run build
npm install -g serve
npx serve
npx serve -s build
```

### Section 2
- 우리가 html을 통해 코딩한 페이지는 알아보기 쉽게 각각 컴포넌트로 분리할 수 있다.
- 컴포넌트로 분리하면 사용자 정의 태그로 사용가능하다는 장점이 있다.
- App.js를 보면 props를 사용하여 태그에서 전달하는 것을 전달받아 화면에 표시할 수 있는 기능이 있다.([참고](https://reactjs.org/docs/components-and-props.html))

### Section 3
- State를 더 잘 이해하기 위해서는 Props랑 같이 보는 것이 좋다.

![image](https://user-images.githubusercontent.com/57928612/110427397-084f0b80-80eb-11eb-93e0-9dd0e13ebe3d.png)

### Section 4
- react에서는 props나 state 값이 바뀌면 밑의 render 함수가 다시 호출된다. -> 화면이 다시 그려진다.
    - 즉, 이것을 이용하면 상호작용 코딩이 가능하다는 것이다.
- 태그에서 onClick 함수가 실행될 때마다 페이지가 새로고침되는 성질이 있다. 이것을 막기 위해서 e.preventDefault();를 사용한다.
- onClick 함수에서 this를 그냥 사용하려면 this 값이 비어있기 때문에 오류가 난다. 그러므로 함수의 끝에 .bind(this)를 붙여주자.
    - .bind(~~~)를 쓰면 해당 함수의 this 값에 ~~~를 넣어준다!
    - bind의 매개변수로 this 말고 뒤에 하나씩 값을 넣을 경우 자동으로 onClick 함수의 매개변수(event 제외)로 들어간다.
- 함수 내에서 state 값을 바꾸려면 this.setState 함수를 사용해야 한다. 사용하지 않고 단순 대입으로 하면 값은 바뀌나 리액트가 바뀐 사실을 알지 못해 사실적으로는 반영되지 않는 결과를 볼 수 있다.
- data-id = {data[i].id} 이런 식으로 사용하면 dataset에 id라는 이름으로 data[i].id의 값이 들어가게 된다. 그 값을 활용하려면 e.target.dataset.id이라고 하면 된다.

### Section 5
![image](https://user-images.githubusercontent.com/57928612/111260993-1a89f600-8665-11eb-8bbb-31b50d0186c0.png)
![image](https://user-images.githubusercontent.com/57928612/111261027-28d81200-8665-11eb-889a-c12fa76e3990.png)

- 상위 컴포넌트에서 하위 컴포넌트에 값을 전달하거나 명령할 때는 props를 통해 전달한다. 그러나 하위 컴포넌트에서 상위 컴포넌트에 값을 전달하거나 명령할 때는 이벤트를 통해서 전달한다.
- shouldComponentUpdate(newProps, newState) {}
    - 값이 바뀌지 않을 때도 render가 호출되는데 소모되는 자원 낭비를 막을 수 있는 방법
    - shouldComponentUpdate가 true를 리턴하면 render가 호출되고, false를 리턴하면 호출되지 않는다.
    - shouldComponentUpdate 함수 내에서는 바뀌기 전 Props와 바뀐 후 Props에 모두 접근할 수 있다. 단, 이 경우에 배열 값이 바뀌면 안 되므로 App.js에서 push(원본 바뀜)를 사용하는 것이 아니라 concat(원본 바뀌지 X)을 사용하여야 하는 것이 맞다.
- push나 concat이 아니라 Array.from이라는 함수가 있다. 예를 들면 var a = [1, 2]; var b = Array.from(a);라고 한다면 a와 b는 값은 같으나 서로 다른 배열이다. 즉, b를 수정해도 a에 영향을 끼치지 않고 마찬가지로 a를 수정해도 b에 영향을 끼치지 않는다.
- Array.from은 배열 복제이고, 객체 복제를 하는 함수도 있다. 바로 Object.assign이다. 이는 {} 안에 있는 객체를 복제하여 새로운 객체를 만들지만 마찬가지로 두 객체는 서로 영향을 끼치지 않는 다른 객체인 것이다.
- 그 외에 원본이 불변되는 방법을 찾고 싶다면, immutable.js라고 검색해보면 react에서 제공하는 immutable.js가 있다. 이를 참고하자.

### Section 7
- [immutable.js](https://immutable-js.github.io/immutable-js/)
- `npm run eject`를 사용하면 create-react-app의 감춰진 기능을 수정할 수 있게 된다. 다만 한 번 eject을 하게 되면 다시 원래 기능으로 돌아갈 수 없기 때문에 주의해야한다!
- **redux**를 사용하면 각 컴포넌트를 관리하는 저장소(store)을 만들어 저장소를 통해 컴포넌트들에 편리하게 접근할 수 있다.
- **react server side rendering**을 이용하면 서버에서 웹페이지를 완성한 후에 클라이언트에 완성된 HTML을 전송하는 기능을 쓸 수 있다. 초기 구동 시간을 단축하면서도 로딩이 필요없는 기능을 유지할 수 있다는 장점이 있다.
- **react native**를 사용하면 react를 사용하면서도 native 앱을 만들 수 있다. native 앱이란, ios/android와 같은 것을 의미한다. 하나의 코드로 거의 모든 플랫폼에서 동작하는 애플리케이션을 만들 수 있다.