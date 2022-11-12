function solution(s) {

  //일단 띄어쓰기를 기준으로 단어별로 split(' ')으로 자른다.
  // 그 결과는 arr에 담는데, 만약 '_try___hello_world_'라고 하면
  // ['','try','','','','hello','','world','']가 들어간다.
  //반복문(i가 arr길이만큼)을 돌면서 단어 단어별로 아래반복문이 반복되게한다.

  // --> 만약 알파벳 하나도 없이 띄어쓰기로만 이뤄졌으면 아래반복문의 조건에 충족하지 못해
  //  (arr[i].length) === 0 이기때문에 못돌고
  // 바로 result.push(changed)로 넘어가서 changed 의 디폴트값인 ''공백이 추가된다.

  //--> 만약 알파벳이 있다면, 아래반복문(j) 문자열 하나하나 0부터 돌면 그게 바로 인덱스가 되니깐
  //j % 2 === 0 이면 대문자
  //아니면 소문자로 변환해서 그 결과 값을 changed 변수에 더해준다.
  //그리고 대소문자가 변경된 문자열을 result에 푸시하여 다음단어로 넘어간다. 
  //나중에 result 를 조인하여 공백과 대소문자가 변경된 문자열을 한번에 문자열로 바꾼다.
    
    let arr = s.split(' '); 
    let result = [];
    
    for (let i =0; i <arr.length; i++){
        let changed = '';
        for(let j=0; j<arr[i].length; j++){
            if(j%2===0){
                changed += arr[i][j].toUpperCase();
            }else {
                changed += arr[i][j].toLowerCase();
            }  
    }
    result.push(changed)          //result 배열에 변환된 문자열(TrY)을 push, 후 다음 단어로
    }
    return result.join(' ');
}
