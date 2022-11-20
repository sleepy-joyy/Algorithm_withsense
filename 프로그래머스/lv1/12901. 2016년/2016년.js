function solution(a, b) {

    //오잉..접근불가 -->날짜 메서드 검색 
    //Date(년, 월-1), 일) 하면 
            //월은 0부터시작 1월이면 0을 넣어야함
    //Sun Apr 03 2016 00:00:00 GMT+0900 이렇게 리턴
    // split으로 ' ' 띄어쓰기 기준 분리하고, 요일이 배열의 0번째니까 거기다가 어퍼케이스 먹이면 되지않을까?
 
    
    let fullDay = new Date(2016, a-1, b).toString(); //그냥 바로 스플릿 먹이려고 했으나 오류나서 문자로 변경
    let getDay = fullDay.split(' ')[0].toUpperCase();
    return getDay;

}



