import React from "react";

const RandomNumber: React.FC = () => {
  return (
    <main>
      <button onClick={() => {
        let min: number = Number(prompt("최소 숫자"));
        let max: number = Number(prompt("최대 숫자"));
        let n: number = Number(prompt("숫자 개수"))

        let Arr: number[]; //숫자 배열

        for (let i = 0; i < n; i++) {
          
        }
        
        
        
        
        Math.floor(Math.random() * (max - min + 1) + min);

      }}>랜덤 숫자</button>
    </main>
  );
};

export default RandomNumber;
