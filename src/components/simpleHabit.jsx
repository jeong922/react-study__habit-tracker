import React, { useCallback, useEffect, useRef, useState } from 'react';

// 클래스에서 멤버변수는 클래스가 만들어질때 한번만 만들어짐
// 함수는 props나 state가 변경되면 코드 블럭 전체가 반복해서 호출 됨.
// 즉, 지역 변수들도 반복 됨
const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated! : ${count}`);
  }, [count]);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
