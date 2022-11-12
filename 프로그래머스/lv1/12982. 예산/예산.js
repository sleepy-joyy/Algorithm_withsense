function solution(d, budget) {

  let answer = 0;

    d.sort((a, b) => a - b);     //부서별 요청구매비를 오름차순으로 정렬

    for(let i = 0; i < d.length; i++) { //부서별로 요청구매비를 작은거부터 끝까지 순회하면서
        if(d[i] > budget) break;    //부서i의 요청구매비가 예산보다 클경우 반복그만! 리턴 앤서!

        budget -= d[i];     //예산이 더크면 그냥 예산에서 구매비를 빼고
        answer += 1;        //지원가능부서의 갯수를 1씩 늘림.
    }
    return answer;      //최종 지원가능부서 개수 리턴.
}

//첨에 접근을 어렵게 생각했는데,, 그냥 입출력예시가 오름차순이라서 해봄..^_^
