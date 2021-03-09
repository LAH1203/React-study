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
