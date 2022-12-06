function solution(new_id) {
    let answer = new_id
        .toLowerCase()             //lv.1 소문자화
        .replace(/[^\w-_.]/g, "")  
        .replace(/\.+/g, ".")      // lv.3
        .replace(/^\.|\.$/g, "")   // lv.4
        .replace(/^$/, "a")        // lv.5
        .slice(0, 15)
        .replace(/\.$/, "");        //lv.6
 
  return answer.length > 2 
      ? answer 
      : answer + answer.charAt(answer.length - 1).repeat(3 - answer.length);
}

//두글자 이상이면 그냥 그대로 리턴
//이하면, charAt으로 마지막글자 인덱스값을 가지고 문자열을 불러온다음, 그걸 리핏 (3번될때까지만하면되니까 3-렝스)

