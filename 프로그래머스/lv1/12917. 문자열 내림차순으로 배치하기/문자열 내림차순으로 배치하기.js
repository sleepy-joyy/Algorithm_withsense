function solution(s) {
    
    let arr = s.split("")   //문자열을 배열의 형태로 스플릿해서 arr에 할당
    arr.sort();         // arr.sort() 해서 오름차순으로 정렬
    arr.reverse();      // 다시 arr.reverse()해서 내림차순으로 변경
    let result = arr.join(''); //다시 join('')이용해 콤마없이 문자열로 변경
    return result;                 //리턴리절트.
}
