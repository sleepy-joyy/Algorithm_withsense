function solution(n, m) {
    let answer = [];
    
    //최대공약수(G) n,m을 i로 나눴을 때 둘다 나머지가 0인 i수
    //최소공배수(L) n*m / 최대공약수(G) 로 나눈 수
    
    let G = 1; 
    let L = 1;
    
    //최대공약수 G 구하기
    for(let i = 2; i <= Math.min(n,m); i++){  //1은 어차피 모든 수의 서로소, 2부터 시작해서 n,m둘중 작은수까지
      if(n % i === 0 && m % i === 0) G = i;   //둘다 i로 나눠서 나머지가 0인 수가 바로 최대공약수
    }
    
    //최소공배수 L 구하기
     L = (n * m) / G;                            //n*m / 최대공약수(G) 로 나눈 수
    
    
    
    answer = [G,L];                             //배열에 담기
    return answer;
}

//최대 공약수는 어케어케 푼건데, 최소공배수는 검색ㅠㅠ