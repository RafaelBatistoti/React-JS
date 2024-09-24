import style from "./food.module.css";

const fruit1 = "Apple";
const fruit2 = "Orange";

function Food() {
	return (
		<ul className= {style.listar}>
			<li>Apple</li>
			<li>{fruit1}</li>
			<li>{fruit2.toUpperCase()}</li>
		</ul>
	);
}

export default Food;
