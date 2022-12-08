function solution(id_list, report, k) {
  let report1 = [...new Set(report)];             //"무지 프로도" ...., "무지 프로도" 동일인이 동일인 중복신고 없애기
  let banList = [];                               //k번 이상 신고먹어서 정지당할 아이들
  
                                                  //       ["muzi", "frodo", "apeach", "neo"]
  let count = Array(id_list.length).fill(0); // 신고수        [  0,      0,        0,       0 ]
  let mail = Array(id_list.length).fill(0);  // 메일 받을 수   [  0,      0,        0,       0 ]
  
  
  //밴리스트에 k번 이상 신고 당한 자 올리기
  for(let rpt of report1){
    // let reporter = rpt.split(" ")[0];   //"muzi frodo" -> ["muzi", "frodo"] -> "muzi" 여기선 필요가 없넹
    let reported = rpt.split(" ")[1];                                          //"frodo"
    let reportedIdx = id_list.indexOf(reported);        //id_list에서 프로도의 인덱스를 찾고
      count[reportedIdx] += 1;                            //신고카운트에 +1 [ 0, 1, 0,  0 ]
      
    if(count[reportedIdx] >= k){        //신고를 최대치인 k번보다 많이 당하면
      banList.push(reportedIdx)       //밴리스트에 프로도의 인덱스 1을푸시        banlist : [1,3]
      }
  }

  for(let rpt of report1){
    let reporter = rpt.split(" ")[0];
    let reported = rpt.split(" ")[1];     
    if(banList.includes(id_list.indexOf(reported))){   // 신고당한 애의 인덱스가 밴리스트에 올라가 있다면
      let idx = id_list.indexOf(reporter);  // 신고한 아이의 인덱스를 id리스트에서 찾고 
      mail[idx] += 1;                            // 메일수신리스트에서 신고한 아이 인덱스에 1을 더함.
      } 
  }

    return mail
}

solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi frodo","muzi neo","apeach muzi"],2)