function solution(priorities, location) {
    let answer = 0;
    let priorityIdx = priorities.map((v,idx) => [v,idx]);
                     //[ [ 2, 0 ], [ 1, 1 ], [ 3, 2 ], [ 2, 3 ] ] 중요도와 인덱스를 함께 저장
    const queue = [];  //인쇄순서


    for(let i = 0; i < priorityIdx.length;){
        const temp = priorityIdx.shift();   //가장앞에있는 문서 꺼내기
        const important = priorityIdx.filter((arr)=> arr[0] > temp[0]).length; //우선순위가 더 높은게 있는지 확인하기
        
        if(important !== 0) priorityIdx.push(temp); //하나라도 있다면, 대기목록 마지막으로 추가하기       
        else queue.push(temp);                      //더중요한게 없다면, 인쇄하기
    }
    
    return queue.findIndex(doc => doc[1] === location)+1;   //인쇄순서는 0번째는 없고 1번째 부터시작이니까 +1 해주기
}
