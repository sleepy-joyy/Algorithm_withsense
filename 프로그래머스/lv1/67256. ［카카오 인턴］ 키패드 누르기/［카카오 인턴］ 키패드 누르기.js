function solution(numbers, hand) {
 
    var answer = '';
    let pad = {                     //번호를 키로하고 값은 [행,열]로 저장
        1:[1,1],2:[1,2],3:[1,3],
        4:[2,1],5:[2,2],6:[2,3],
        7:[3,1],8:[3,2],9:[3,3],
      '*':[4,1],0:[4,2],'#':[4,3]
        };

                
    let nowL = [4,1]; //왼손시작 * 좌표
    let nowR = [4,3]; //오른손시작 # 좌표
    
    numbers.forEach(number => {
        let target = pad[number];       // 누르고자 하는 버튼 만약 5면 타겟은 [2열,2행번째]
        
        if(target[1] === 1){            // colum이 1일때 = 무조건 왼손일 때
            nowL = target;
            answer += "L";
        } else if(target[1] === 3){     //colum이 3일때 = 무조건 오른손
            nowR = target;
            answer += "R";
            
        } else{                 //중간 컬럼 2,5,8,0일때 거리계산하기 
                                //행으로 몇 칸,열로 몇 칸 이동하는지 합산
            let dist_L = Math.abs(target[0]-nowL[0]) + Math.abs(target[1]-nowL[1]);
            let dist_R = Math.abs(target[0]-nowR[0]) + Math.abs(target[1]-nowR[1]);
            
            if(dist_L<dist_R){      //왼손으로 이동하는게 더 칸수가 적으면
                nowL= target;       //왼손으로 이동하고 현재 위치로 저장
                answer += "L"
            }else if(dist_L>dist_R){
                nowR = target;
                answer += "R"
            }else {                 //왼손이동거리 = 오른손이동거리 면 손잡이에 따라서 앤서에 푸시.
                if(hand==="right"){
                    nowR = target;
                    answer += "R";
                }else{
                    nowL = target;
                    answer += "L";
                }
            }
        }
    }
    );
    return answer;
};   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // let answer = '';
    // let lT = 10;        //* = 10, 0=11, #=12 로 보고 
    // let rT = 12;        //시작점을 왼엄지 10  오엄지12로 설정후 시작.
    // for(let i=0; i<numbers.length; i++){  
    //     if(numbers[i] === 1 || numbers[i] === 4|| numbers[i] === 7 ){
    //         answer += 'L';
    //         lT = numbers[i];
    //     }
    //     else if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9){
    //         answer += 'R';
    //         rT = numbers[i];
    //     }
    //     else {    // 2, 5, 8, 0 일때 가야할 거리 구하기
    //         if(numbers[i] === 0) numbers[i] = 11; // 0을 11로 설정
    //         let tmpL = Math.abs(numbers[i]-lT);    // 거리 = |가야할 번호 - 현재엄지|를 임시L,R에 저장.
    //         let tmpR = Math.abs(numbers[i]-rT);
    //         //     아 모르겟다....패스ㅜㅜ
