function solution(s) {
    return s
        .split(" ")
        .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
        .join(" ");
}

/* 공백을 기준으로 스플릿한 배열을 만들고
배열의 각각의 요소들을

0번째 글자는 대문자로 --> v[0].toUpperCase() 하면 채점시 런타임에러남 싱기...이건 왜안돼?

나머지문자들은 1번인덱스 부터 substring 해서 
부분 문자열을 반환한값에 소문자화

나중에 join " "
*/
