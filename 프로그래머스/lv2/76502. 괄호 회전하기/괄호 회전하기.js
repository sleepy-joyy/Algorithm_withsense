function solution(s) {
    let x = 0;
    if(s.length % 2 === 1) return 0;  //문자열이 홀수개면 아무리 돌려도 올바른 괄호가 아님
    
    for(let i =0; i<s.length; i++){
        const stack = [];
        let curStr = s.substring(i) + s.substring(0, i);  //회전시키기 | 마지막인덱스 미포함
        let pair = true;

        for (let str of curStr) {
            if (str === "(" || str === "{" || str === "[") stack.push(str); //여는괄호일때 스택푸시
            else { 
                let tmpOpener = stack.pop();                              
                if (tmpOpener === "(" && str === ")" ||
                    tmpOpener === "{" && str === "}" ||
                    tmpOpener === "[" && str === "]" ) {
                    continue;  //올바른 괄호고, 스택에서 pop도해줬으니 아예 그 다음 괄호(str)로 넘어간다.
                } else {
                    pair = false; //만약 스택에 아무것도 없거나, 
                    break;        //올바른괄호가 아니라면 회전시키기위해 바깥 for문으로 탈출!
                }
            }
        }
        if (pair) x++;      //모든 괄호(curStr)을 다 돌았는데 pair 가 트루이면 x를 +1 씩 증가시켜준다.
    }
    return x;
}

        
                
                
                
                
                
                
//                 //닫는괄호일때 
//                 let tmpOpener = stack.pop();                              
//                 if (tmpOpener === "(" && str === ")" ) continue;
//                 if (tmpOpener === "{" && str === "}" ) continue;
//                 if (tmpOpener === "[" && str === "]" ) continue;
                
//                 pair = false;
//                 break;
//             }
//         }
//         if (pair) x++;
//     }
//     return x;
// }

        

/* 회전이 뭔말-? 둥근 띠 처럼 생겨서 한칸씩 밀어버린단 얘기

- s길이가 홀수면 아무리 돌려도 짝궁괄호가 안되니까 리턴 0
- 회전 substring (i) i부터 끝까지 한거 + 0,i 한걸 뒤로 붙이기
- 회전된 문자열을 돌면서, 여는괄호는 스택에 넣고
  스택의 마지막 값(임시여는괄호)랑 지금닫는 괄호랑 짝꿍인지 확인하고 
  짝꿍이면 answer 를 올리고 스택에서 제거
- 왼쪽으로 회전을 어케 구현하지? 
    s를 쪼개서 arr에 담은 다음, shift() 한걸, push()하면? 시간이 오래걸리겟지
    */

 

