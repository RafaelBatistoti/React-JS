import style from "./list.module.css";
import PropTypes from "prop-types";

function List(props) {
	/*
    !It's doesn not work
    const fruits = ['apple', 'banana', 'coconuts', 'pinaapple', 'orange']
    return fruits
  */

	/*
    *it works, displaying a list of fruit names
    const fruits = ["apple", "banana", "coconuts", "pinaapple", "orange"];
    const listFruits = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);
    return <ol>{listFruits}</ol>;
  */

	/*
    
    TODO Copy this list and past in App. There you should pass like arguments
    const fruits = [
      { id: 1, name: "banana", calories: 78 },
      { id: 2, name: "apple", calories: 57 },
      { id: 3, name: "orange", calories: 25 },
      { id: 4, name: "coconut", calories: 58 },
      { id: 5, name: "pineapple", calories: 64 },
      { id: 6, name: "grape", calories: 42 },
    ];
  */

	/*
    TODO this sorts can handle the list of fruit
		fruits.sort((a,b)=>a.name.localeCompare(b.name)); //* ALPHABETICAL
		fruits.sort((a,b)=>b.name.localeCompare(a.name)); //* REVERSE ALPHABETICAL
		fruits.sort((a,b)=>a.calories - b.calories);//*  NUMERICAL
		fruits.sort((a,b)=>b.calories - a.calories);//* REVERSE NUMERICAL
	*/

	/*
    TODO This is a filter function. Bring all the calories higher or lower the 60
		const lowCalFruits = fruits.filter(fruit => fruit.calories < 60)
		const highCalFruits = fruits.filter(fruit => fruit.calories > 60)
  */

 //?Is possible to pass this list like props
 const fruitsList = props.items

	const listFruits = fruitsList.map((fruitList, index) => (
		<li key={index.id} >
			{fruitList.name}: &nbsp; <b>{fruitList.calories}</b>
		</li>
	));

	return <ol className={style.listar}>{listFruits}</ol>;
}

List.prototype = {
	category: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			calories: PropTypes.number,
		})
	),
};

export default List;
