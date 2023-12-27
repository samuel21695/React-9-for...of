/*
  아래의 함수는 모든 매개변수를 하나하나 문자열로 만들어 지역변수에 할당하고 마지막에 이를 조합하여 반환하는 일련의 과정이 '반복적으로' 작성되어있는 안티 패턴입니다.

  하지만, 매개변수가 너무 많아질 때의 문제와 반복 작동 코드의 문제점을 발견하기 좋습니다.
  매우 절차적이고, 융통성(?)이 없는 코드이므로 jsx로 멋지게 추상화된 코드와 함께 비교하시기 바랍니다.
*/

function vanillaComponent(tagName, attributes, style, events, children) {
  // #1
  let attributeString = "";
  for (const [key, value] of Object.entries(attributes)) {
    attributeString += ` ${key}="${value}"`;
  }
}