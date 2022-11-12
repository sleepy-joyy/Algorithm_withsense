function solution(arr) {

    let result = [];                        //결과를 담을 빈배열 선언
    
    for(let i =0; i<arr.length; i++){       //문자열을 순회하면서
        if(arr[i] != arr[i+1]){             //배열의 i번째 값이 바로 다음에 오는 숫자랑 같지 않다면
            result.push(arr[i]);            //결과배열에 푸시
        }
    } return result;
}




// 1트
//이중for문과 splice를 써서 앞자리랑 비교해서 같으면 한글자씩 삭제하려했지만..
//코드실행시에는 테스트통과 했지만 / 제출시에 실패 잔뜩 + 효율성 테스트도 실패했다ㅠㅠ
//제거가 답이 아닌가 싶어서 새 배열에 추가를 해보기로 방향전환

// function solution(arr) {
//   for(let i=1; i<=arr.length;i++){       //문자열 1번째 인덱스부터 올라가면서 문자열 비교할거임
//       for(let j=0; j<arr[i]; j++){       //문자열 1번째 보다 이전 인덱스의 값들을 비교하면서
//         if(arr[j] === arr[i]){           //이전인덱스 값이 현재 i번째 값이랑 같으면
//           arr.splice(i,1);               //arr배열의 i번째 글자 한글자를 제거
//       }
//     }
//   }return arr;
// }


