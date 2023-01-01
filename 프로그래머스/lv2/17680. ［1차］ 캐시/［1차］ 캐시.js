function solution(cacheSize, cities) {

    let runtime = 0;
    let cache = [];
    
    if(cacheSize === 0 ) return cities.length * 5
    
    while(cities.length){
        let city = cities.shift().toLowerCase();
        const idx = cache.findIndex((el)=> el === city);
            if(idx !== -1){
                cache.splice(idx,1)
                cache.push(city);
                runtime += 1;
            } else {                
             if(cache.length === cacheSize) cache.shift()
             cache.push(city);
             runtime += 5;
        }
    }
    return runtime;
}
    
/*
캐시 : 자주 사용하는 데이터나 값을 미리 복사해 놓는 임시 장소
LRU : 캐시에서 사용한지 가장 오래된 캐시를 지우기
캐시사이즈가 주어지고, 캐시가 꽉찬 상태에서, 새로운 값을 캐시에 넣으려고할때
캐시에서 사용한지 가장 오래된 값을 지우고, 새로운 값을 캐시에 넣는다.

캐시안에 현재값이 들어있으면(cache hit) 더빨리 실행되니까 +1
캐시안에 현재값이 없으면(cache miss) 빼주고 넣어줘야하니까 +5로 더느려진다. 


-cache size === 0 -> 모든값이 cache miss 니까 실행시간은 모든도시길이 * 5
-cache 배열만들고 cities 에서 shift() 맨앞하나씩 빼서 캐시값과 비교
    - 있으면 해당 인덱스 시티값을 지워주고, 맨뒤에 푸시 (최근사용) & runtime +1
    - 없으면 cache 배열에 자리가 꽉찼는지 확인하고
       - 꽉찼으면, 0번째 값을 shift()로 없애주고, 맨뒤에 해당도시 푸시 & runtime +5
       - 안꽉찼으면, 그냥 push();
*/
    