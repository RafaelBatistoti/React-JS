import { useState } from "react";
import style from "./counter.module.css";

function Counter() {
	const [count, setCount] = useState(0);

	/*
    !It's work but is not good practice 
    const increment = () => {
      setCount(count + 1);
    };
    const reset = () => {
      setCount(0);
    };
    const decrement = () => {
      setCount(count - 1);
    };
  */

	//? This is the correct implementation.
	//? The first argument is the count in your initial state.
  //? the second argument is the argument changed
	const increment = () => {
		setCount(countPrevious => countPrevious + 1);
	};
	const reset = () => {
		setCount(0);
	};
	const decrement = () => {
		setCount(countPrevious => countPrevious - 1);
	};

	return (
		<div className={style["counter-container"]}>
			<p className={style["counter-display"]}>{count}</p>
			<button className={style["counter-button"]} onClick={decrement}>
				Decrement
			</button>
			<button className={style["counter-button"]} onClick={reset}>
				Reset
			</button>
			<button className={style["counter-button"]} onClick={increment}>
				Increment
			</button>
		</div>
	);
}

export default Counter;
