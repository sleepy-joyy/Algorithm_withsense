function solution(strings, n) {
    var answer = [];
    
  return strings.sort((a,b) => {
        if(a[n]>b[n]) return 1;  //n번째인덱스 문자열 기준으로 정렬
        else if (a[n]<b[n]) return -1;
        else return a > b ? 1 : -1;     
        //만약에 둘이 비교해서 유니코드가 어느쪽도 크지않으면 같은걸로 간주 n번째인덱스가 아니라 그냥 원래 문자열로 정렬
    });
}




//strings를 split?       //sun bed car 1
// n번째 인덱스를 따로 저장?    u    e   a
// 유니코드화 해서 다시정렬?   -- 아 ! sort() 는 자체적으로 유니코드화 함.
// 아!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// mdn에서 sort() 함수 보고오면 한 5분이면 해결합니다.
// --> 구라쟁이

// function compare(a, b) {
//   if (a < b by some ordering criterion) {
//     return -1;
//   }
//   if (a > b by the ordering criterion) {
//     return 1;
//   }
//   // a  = b
//   return 0;
// }



