process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let stars = '*'.repeat(a);       //별을 a번만큼 반복 변수 'stars'에 할당
    for(let i=0 ; i<b; i++){         //콘솔로그는 실행되면 개행이 되는 것 같아서 그냥 반복문 b번 돌림
        console.log(stars);
    }


});


//[버린코드]
//아웃풋 사이즈 다르다고 나와서 바이바이
//   let starsrow = `${'*'.repeat(a)}\n` ;
//   let result = starsrow.repeat(n);