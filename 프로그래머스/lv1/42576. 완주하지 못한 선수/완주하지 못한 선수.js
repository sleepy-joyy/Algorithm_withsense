function solution(participant, completion) {
    let answer = '';
    
    participant.sort();
    completion.sort();

    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
            answer = participant[i]
            break
        }
    }
    
    return answer
}
    

/*
return (participant.filter((person)=> !completion.includes(person))).join('')
해서 한방에 끝내고싶었는데 ^_^.....동명이인이있네.. ㅎ ㅏ ㅠ힘드러

completion 이 participant -1 차이뿐이니까
이름 오름차순해서, 비교햇는데 같은 이름 아니면 그냥 그사람 내보내자. */