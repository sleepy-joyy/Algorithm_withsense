function solution(a, b, n) {

    let newCoke = 0
        //받을 수 있는 콜라수
    
                                                //n 20 
    while(n >= a) {                     //상빈쓰 콜라병수가, 교환가능한 수량과 같거나 크면 계속 반복
        newCoke += Math.floor(n/a)*b    // (상빈이 가진 콜라병 / 필요병수) *  마트가 주는 콜라 수
        n = Math.floor(n/a)*b + n%a     // 그 나머지를 더함
    }
    return newCoke
}
