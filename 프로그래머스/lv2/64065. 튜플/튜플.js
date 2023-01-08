function solution(s) {
  var answer = [];
  
  /*
  1) 앞뒤 따옴표+중괄호 "{{, }}" 없애기  -->            2},{2,1},{2,1,3},{2,1,3,4
  2) 중간 중괄호를 '},{'를 기준으로 스플릿  -->         ['2'],['2,1'],['2,1,3'],['2,1,3,4']
  3) 요소의 길이로 오름차순 정렬 
  4) 다시 각각을 ,기준으로 스플릿.                  ['2'],['2','1'],['2','1','3'],['2','1','3','4']
  5) 튜플각각을 돌면서 answer에 없으면 푸시
  6) answer를 Number로 매핑하고 리턴.
  
  */
  
  let tuples = s.slice(2,-2)
                .split(/},{/g)
                .sort((a,b)=> a.length - b.length)

                
  tuples.forEach((v) => {
      let tuple = v.split(',')
      tuple.forEach((v) => {
          if(!answer.includes(v)) answer.push((v))
      })     
  })
  
  return answer.map((v)=> Number(v));
}

