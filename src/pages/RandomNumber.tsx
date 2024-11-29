import React from "react";

const RandomNumber: React.FC = () => {
  const RandomNumber = () => {
    const min: number = Number(prompt("최소 숫자"));
        const max: number = Number(prompt("최대 숫자"));
        const n: number = Number(prompt("숫자 개수"))

        let Arr: number[] = []; //숫자 배열

        for (let i = 0; i < n; i++) {
          Arr.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
        alert(Arr);
  }

  return (
    <main>
      <button onClick={RandomNumber}>랜덤 숫자</button>
    </main>
  );
};

export default RandomNumber;
