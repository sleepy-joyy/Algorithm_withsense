function solution(nums) {

    //폰켓몬의 종은 최대한 다양해야 하니깐, 중복값 제거
    
    
    let kinds = [...new Set(nums)].length;  //중복값 제거, 연구실 내 폰켓몬 종의 수
    
                                            //만약 종의 수가 내가 가져갈 수있는 최대마릿수보다 작거나 같아서 
    if(nums.length /2 >= kinds){            //내맘대로 골라갈 수 있다면,
    return kinds;                           //해당 종의 수 리턴
        
    } else return nums.length/2;            //만약 내가 가져갈 수 있는 폰켓몬의 수 보다 종의 수가 더 다양하다면, 어차피 못가져갈 아이들..
                                            //그냥 내가 가져갈 수 있는 폰켓몬 최대마릿수 리턴.
}
    