# 조건부, 반복, 리스트

## 핵심 내용

- v-if와 v-else 조건부 활용
- v-for를 사용한 반복
- 배열의 변화 관찰

## 이전에 배운 내용과 이번에 배울 내용

- **이전**: v-model을 이용해서 입력과 애플리케이션 데이터를 연결하는 방법을 배움
- **이후**: 이전에 이용했던 조건문, 반복, 리스트 더 잘 활용해보기

## 상품이 얼마 남지 않았을 때 메시지 띄우기

- v-if, v-else-if, v-else 지시자 사용

### v-show / v-if

- v-show 지시자는 항상 DOM에서 렌더링 된다
- v-if, v-else-if, v-else는 조건 값이 바뀌면, DOM에서 제거되거나 다시 렌더된다
- 대부분의 경우 렌더링되거나, 한 번 이상 변하면 v-show 지시자를 이용하는 게 좋다

### v-else와 v-else-if

- 조건마다 상태에 대한 메시지를 변화시켜주기 위해 케이스별 조건을 추가한다
- v-else에는 v-if 또는 v-else-if 조건이 붙은 태그가 바로 붙어있어야 한다
- v-else-if는 여러번 사용 가능하다
- 일반적인 조건문과 같다
- 템플릿에 너무 많은 조건부나 로직을 사용하지 않는 게 좋다

## 반복

### v-for

- 객체, 배열, 컴포넌트와 함께 사용 가능
- 사용 방법

  - 가장 간단한 방법은 정수 값 설정

- 기본적인 형태

```html
<li v-for="item in items">{{ item }}</li>
```

- 정수 값만큼 반복

```html
<span v-for="n in 5">☆</span>
```

### 별점에 HTML 클래스 바인딩

```html
<span v-for="n in 5">☆</span>
```

- 정수 5만큼 반복해서 ☆을 그린다
- 색상 값을 업데이트 해주기 위해 메서드를 추가한다

```js
checkRating(n) {
  return this.product.rating - n >= 0
}
```

- v-bind를 통해서 class를 바인딩하고 메서드를 추가할 수 있다

```html
<div class="rating">
  <span v-bind:class="{'rating-active': checkRating(n)}" v-for="n in 5">
    ☆
  </span>
</div>
```

### 상품 셋팅

- v-for를 이용해서 상품 배열을 순환하여 출력한다
- 기본적으로 변형 메서드를 사용 가능하나, Vue가 감지할 수 없는 배열의 변화가 있다
  - 배열에 아이템을 직접 설정하거나, length 프로퍼티의 값을 변경시키는 일이 이에 해당한다
- 비동기로 받아온 데이터를 computed에서 처리한다
