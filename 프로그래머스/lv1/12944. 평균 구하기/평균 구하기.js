function solution(arr) {
    var answer = 0;
    let sum = 0;
    for(i=0;i<arr.length;i++){
        sum += arr[i];
        answer = sum / (arr.length)
    }
    return answer;
}

//arr의 i번 값에 반복문으로 접근 
//arr의 i번째 값을 계속해서 sum에 합산 
//합산한 값을 arr.length 로 나눔
