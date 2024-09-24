import style from "../Button/Button.module.css";

function Button() {
	/*
      let count = 0;
      const handleClick = name => {
        if (count < 3) {
          count++;
          console.log(`${name} you clicking me ${count} time/s`);
        } else {
          console.log(`${name} stop clicking me!`);
        }
      };

      return (
        <button onClick={() => handleClick('Rafael')} className={style.button}>
          {' '}
          Click me
        </button>
      );
    */

	//const handleClick = (e) => console.log(e);

	return <button className={style.button}>Click me!</button>;
}
export default Button;
