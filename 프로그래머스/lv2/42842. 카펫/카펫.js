function solution(brown, yellow) {
    
   const xPlusy = brown/2 + 2
   for (let tmpY =3; 2 * tmpY <= xPlusy ; tmpY++){ 
       if((xPlusy-tmpY-2)* (tmpY - 2) === yellow) {
           return [xPlusy - tmpY, tmpY];
       }
   }
    
}



 /*
      전체가로=x 전체세로=y
      브라운 =    2개의 위아래 가로줄 ㅡ, 2개의 왼오 세로줄 |, 겹치는 부분 4칸
                 2x + 2y - 4
      (브라운/2)   = x + y - 2
     (브라운/2)+2  =  x + y
    
     옐로우의 넓이 = (x-2) * (y-2) 
     옐로우는 최소 1칸 양옆 테두리2칸 포함하면 전체x,y의 최소개수는 [3,3]
     가로가 더 길어야한다는 조건이 있으니 y를 늘리면서 확인
*/