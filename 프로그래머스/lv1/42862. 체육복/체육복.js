function solution(n, lost, reserve) {

    let noHave = lost.filter((student) => !reserve.includes(student));  //lost학생번호가 reserve학생배열에도 없으면 찐 없는애들
    let iHave = reserve.filter((student) => !lost.includes(student));    //도난도 안당하고, 여유분이 확실히 있는 애들
    let answer = n - lost.length + (lost.length - noHave.length);  //처음수강가능인원에서, 중복값 있는애들을 뺀 수를 더한다.

    
    noHave.sort((a,b)=> a-b);                                           //테케 힌트보니까 정렬해야한다고 해서 추가
    console.log(noHave)
    
    noHave.forEach((student) => {                              //찐체육복없는 스튜던트 한명이 돌아다니면서 여벌있는 애들중 앞뒤체격 애들한테 물어본다. "여벌있음?"
        if (iHave.includes(student-1)){                         //여분이 있는 애들 중에 자기 바로 앞번호 애가있다면?
            iHave = iHave.filter((he)=> he!==student-1);        //그아이한테 빌렸기때문에, 그 아이는 번호 빼고 남은 애들 필터링
            answer++                                            //nohave 1인이 체육복을 빌려서 수업을 듣게됐다!!
        }
        else if(iHave.includes(student+1)){                //여분이 있는 애들 중에 자기 바로 뒷번호 애가있다면?
            iHave = iHave.filter((he)=> he!==student+1); //걔한테도 빌릴 수 있기 때문에 걔 빼고 다시 필터링 forEach다시 돌려
            answer ++
        }   
    })
    return answer;
}
















    //일단 첨엔 전체학생수에서 체육복 도난당한 애들 뺀다. 나중에 빌린 애들생기면 그때 +1씩해보자.
    //전체학생수 n 중에 체육복 자체가 없는애는 0, 자기껀 있는 애들 1, 자기것도 있으면서 여분도 있는애들 2개라 가정
    //애초에 1인애들하고, 
    //lost 배열 reserve 배열 비교해서 중복값 있는 애들(도난신고했으나 여분있어서 1이 된 애들)은 다 걸러버리고 찐 0과 찐 2만 구한다.
    //찐 0인 애가 찐2인애들 배열 돌아다니면서 자기 앞뒤번호애가 있는지 확인하고, 있으면 걔빼고 필터링+answer ++
    //리턴앤서.