function solution(n) {
  let arr=[];
  arr = String(n).split('').map(Number);
  arr.sort((a,b) => {return b-a})
  return arr;
}

//결과값을 담을 새 변수(arr)를 선언하고 빈 배열을 할당한다.
//n의 값을 split("")을 통해 배열로 만든다. 
//   ㄴ--그러고 보니 여긴 문자열이에요 !!각 배열의 값을 숫자로 바꾸고싶어요  
//   ㄴ==> 검색했더니 split뒤에.map(Number)를 붙여주면 숫자로 배열안에 들어간대요

//array.sort()기능을 이용해 내림차순으로 만든다.
//   ㄴ==>정렬 어떻게 쓰는지 모르겠어요, 그래서 구글링(머쓱..)
//arr = 내림차순 정렬된 배열 할당.