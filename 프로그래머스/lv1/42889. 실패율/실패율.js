function solution(N, stages) {


    let opened = 0;
    let unclear = 0;
    let stageFailrate = [];
  
    //스테이지(N)별 클리어 못한 플레이어 수 찾기 
    for(let i = 1; i <= N; i++){
        unclear = stages.filter((player) => i === player).length; //클리어 못한자 = 현재 스테이지 i 레벨이랑 같은자
        opened = stages.filter((player) => i <= player).length; //해당 스테이지가 열린자 == i스테이지보다 같거나 큰자
        let failrate = unclear / opened;
        stageFailrate.push({stage: i, rate : failrate });  //객체형태로 {스테이지레벨:실패율}을 결과배열안에 푸시
      }                                                     // {stage 2 : rate : 0.42...}
  
        //실패율이 높은것 내림차순 정렬하기  
            //일단 객체로 푸시를하긴했는데, 어떻게 정렬할지몰라서 검색해봤는데..겉에게 배열이니까 sort를 할 수있엇슴.
            //오 지저스 배열안 내용물이 객체여도 sort가 먹잖아?
            //mdn | 개체는 해당 속성 중 하나의 값을 기준으로 정렬 할 수 있습니다 의 예시를 따라함.
    
      stageFailrate.sort((a,b)=> {
          if(a.rate === b.rate) return a.stage - b.stage; //실패율이 같으면 낮은레벨 스테이지가 먼저오게 해준다.
          else return b.rate - a.rate;       //그게아니라면 높은 실패율부터 내림차순되게 해준다.
      });
                                                        //이제 실패율이 높은것 부터 객체로 담겨있는 배열을
      return stageFailrate.map((obj) => obj.stage);     //객체의 stage값 으로만 남겨두기로 맵핑 
  }                                                         //[3,4,2,1,5]
  
  
  