function solution(n) {
    
//소수 : 1과 자기자신 외에는 자연수로 나눌수 없는 1보다 큰 자연수. (약수가 없는)
//반복문으로 풀었다가 효율성테스트에서 탈락....소수 알고리즘 검색 ^_^;
//에라토스테네스의 체 --> 소수의 배수들을 제거하면 결국 소수만 남는다는 로직

    
    let isPrime = [];     //0부터 n까지의 숫자를 쭉 늘어놓고 배수인지 확인할 배열
    let primeLs = [];    //진짜 소수만 담을 결과 배열 선언
   
    
    for(let i = 0 ; i<=n; i++){  //   n=10일 경우 0,1,2,3,4,5,6,7,8,9,10 으로 배열 인덱스랑 일치시켜서 isPrime 배열 만들기
        if(i===0||i===1){
            isPrime[i] = false;   //  근데 0,1은소수가 아니니 false, false 로 놓고 2는 소수이므로  2부터는 쭉 true로 남겨놓고 배수를 false 처리할 예정
        }else isPrime[i] = true;        //isPrime = [F,F,T,T,T,T,T,T,T,T,T];
    }
    
    for(let i = 2; i<=n; i++){  //2부터 돌면서 만약 
        if(isPrime[i]){         //i(현재2)번째 값이 true라면,
            primeLs.push(i);      // primeLs에 푸시를 하고
        for(let j=i;j<=n;j+=i){     //또다른 반복문이 돌면서 j(현재2)가 i의 배수씩 증가 (+= 현재2)하면서 배수들을 모조리 true --> false로 바꿔버림.
            isPrime[j] = false;        //isPrime = [F,F,T,T,F,T,F,T,F,T,F];
        }
      }
    }
    return primeLs.length;
}