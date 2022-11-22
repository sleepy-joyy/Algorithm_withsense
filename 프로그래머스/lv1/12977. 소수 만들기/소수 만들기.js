function solution(nums) {
    let answer = 0;
    
    function prime(num){                            //1,2는 소수가맞으니까 2부터 제곱근까지 순회하면서, 
        for(let i = 2; i<= Math.sqrt(num);i++){     //전달인자로 들어온 수가 i로 나눈 나머지가 0이면
            if(num%i ===0) return false;            //소수가 아닌걸로 판단하고 false처리
        } return true;                              //소수여부인지 t/f 여부만 리턴하는 함수선언해놓고.
      }
    
    
    for(let i =0; i<nums.length; i++){                  //num에 들어갈 서로다른 3개의수를 더한값구하기
        for(let j= i+1; j<nums.length; j++){            //3중포문
            for(let k= j+1; k<nums.length; k++){            
               let sum = nums[i]+nums[j]+nums[k];       //세개를 더한값을 sum이라는 변수안에 넣어주고
                if(prime(sum)) answer++                //만약 sum을 프라임함수에 전달인자로 넣었을 때 트루면 카운트+1
            }
        }
    }
    
    return answer;
}
