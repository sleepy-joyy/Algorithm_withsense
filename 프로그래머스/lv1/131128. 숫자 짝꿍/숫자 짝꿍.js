function solution(X, Y) {

    let x = [...X];
    let y = [...Y];
    let answer = '';
 
    for(let i = 0 ; i < 10 ; i ++) {                            //공통으로 나타나는 정수 k(0 ≤ k ≤ 9) 까지 돌면서   [1,2,3,2,1]	[4,2,5,3,1]
        const tmpX = x.filter((a) => Number(a) === i).length      //x배열을 해당숫자만 있는 배열로 만들고 그 렝스를 저장  0 none / 1-> [1,1] (2번)
        const tmpY = y.filter((a) => Number(a) === i).length      //y배열도 똑같이                                      / 1 -> [1]  (1번)
        answer+=String(i).repeat(Math.min(tmpX, tmpY))          //앤서에 i숫자를 문자열로하고 x배열 /y배열 중에 작은 숫자로 리핏해서 넣어준다.'1' *1번
    }

    
    if(answer === '') return "-1"                               //x랑 y배열에 같은 수가 없으면 answer값도 없으니껜 -1
    if(Number(answer) === 0) return "0"                         //x,y배열에 0,0만 짝꿍들로 있으면  숫자로 바꾸고 리턴 0

    return answer.split("").sort((a,b) => Number(b)-Number(a)).join("") //앤서에 담긴문자열을 쪼개서, 숫자로 바꾸고 내림차순 정렬 후 조인
}

    
    
    








 /* 중복개수 안세서실패^_ㅠ 
  let newX = xArr.filter((v)=> yArr.includes(v))
  if(newX.length === 0){
      return "-1"
  } else {
      newX.sort((a,b)=> b-a);
      for(let i =0; i<newX.length;i++){
          answer.push(newX[i])
          if(answer[i]===answer[i-1]){
            answer.pop();
        }
    }
  }
     return answer.join('')
}
*/