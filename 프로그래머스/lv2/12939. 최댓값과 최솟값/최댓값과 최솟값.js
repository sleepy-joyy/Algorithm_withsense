function solution(s) {
    
 let arr = s.split(' ');
 let newArr= arr.map((v)=> Number(v)).sort((a,b)=> a-b);
 let min = newArr[0]
 let max = newArr.at(-1);

    return `${min} ${max}`
    
    
// console.log(min)
// console.log(max)
}