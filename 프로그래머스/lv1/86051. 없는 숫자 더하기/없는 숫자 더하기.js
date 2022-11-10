function solution(numbers) {

    let sum = 0;           //없는 숫자를 모두 찾아 더한수를 담을 변수 선언
    
    for(i=0; i<10 ; i++){                //0,1,2,3,4,5,6,7,8,9까지 한바퀴 돌건데
      if (numbers.includes(i) === false){sum += i}
        // numbers[배열]안에 i값이 없다면     sum에 i를 더함.
    } return sum;
}
