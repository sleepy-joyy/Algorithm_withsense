function solution(babbling) {
  var answer = 0;
  let cant = ['ayaaya', 'yeye', 'woowoo', 'mama'];


    for (let i = 0; i < babbling.length; i++) {  //옹알이 단어들을 돌면서
      for (let word of cant) {                   //못말하는 단어있는지 확인
        if (babbling[i].includes(word)) {           //있다면
          babbling[i] = false;                      //false로  바꾸기
          break;
        }
      }
        
        if(babbling[i]) {                   //false로 바뀐 단어가 아니라면
            babbling[i] = babbling[i]
                .replaceAll("aya", "1")      //말할수있는 발음들을 모두 1로 처리
                .replaceAll("ye", "1")
                .replaceAll("woo", "1")
                .replaceAll("ma", "1");
        }
        else continue;  //false(반복단어)라면 말할수없으니 다음단어로!

        babbling[i] = babbling[i].replaceAll(/[1234]/g, '');    //숫자1로만 이뤄져있다면 ''이 될것.
        if (babbling[i].length === 0) answer++;     //다 말할수있는 단어 '' 되어 길이가 0이면 카운트올리기
      }
      return answer;
    }

solution(["ayaye", "uuu", "yehe", "yemawoo", "ayaayaa"]);
                         //1he가 되고, he만남아서 앤서카운트는 못올림.

/* 가능발음을 바로 공백으로 바꾸려했지만 테케 9~14,19,20 실패 ㅠㅠ 
숫자로 바꾸는걸 한번 거쳐서 다시 공백화 */