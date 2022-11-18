function solution(numbers) {
 
  const newArr = [];   //두개의 수를 더해서 담을 새로운 어레이 선언
  
  for(let i = 0; i < numbers.length; i++){ //배열을 순회하면서 i번째 인덱스값이랑
      for(let j = i+1; j < numbers.length; j++){  //(i다음번째부터 순회하는) j번째 인덱스값을 
          newArr.push(numbers[i] + numbers[j]);     //더한 다음 그값을 새배열에 푸시함
      }
  }
  newArr.sort((a,b)=> a - b);       //결과로 나온 수를 오름차순정렬
  const result = [...new Set(newArr)]; //set으로 중복제거 후 리턴
  return result;
}

