function solution(lottos, win_nums) {
    var answer = [];
    
    //민우의 로또에서 0 의 개수를 구한다
    //wins_num 에서 민우의 로또와 일치하는 수의 개수를 구한다 -> 최소 일치 개수
    //그 최소개수에다가 + 0의 갯수를 더하면 (0이 무엇으로 바뀌든 노상관이니깐) -> 최다일치개수 아닐까?
    
    let rank = [6,6,5,4,3,2,1];
        //랭크배열을 만들고, 0개 일치,1개일치는 6등 | 2개일치부터 5등 | ... | 6개 일치해야 1등

    let zeroCount = lottos.filter((v)=> v === 0).length;
    let minCount =  lottos.filter((v)=> win_nums.includes(v)).length;
    let maxCount = minCount + zeroCount;
    
    answer.push(rank[maxCount], rank[minCount]);
            //맥스카운트가 5개면 rank[5] ==> 2등!
    return answer;
}
