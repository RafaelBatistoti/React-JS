import Footer from "./assets/Introduction/Footer";
import Header from "./assets/Introduction/Header";
import Card from "./assets/Card/Card";
import Food from "./assets/Food/Food";
import Button from "./assets/Button/Button";
import Students from "./assets/Students/Students";
import UserGreeting from "./assets/UserGreeting/UserGreeting";
import List from "./assets/Simple List/List";
import Components from "./assets/My components/Components";
import Counter from "./assets/Counter Project/Counter";


function App() {

	const fruits = [
      { id: 1, name: "banana", calories: 78 },
      { id: 2, name: "apple", calories: 57 },
      { id: 3, name: "orange", calories: 25 },
      { id: 4, name: "coconut", calories: 58 },
      { id: 5, name: "pineapple", calories: 64 },
      { id: 6, name: "grape", calories: 42 },
    ];

	return (
		<>
			<Header />
			<Footer />
			<Card />
			<Food />
			<Button />
			<Students name='Rafael' age={30} isStudent={true} />
			<Students/>
			<UserGreeting isLoggedIn={true} username={'Rafael'}/>
			<List items={fruits} category={'Fruits'}/>
			<Components/>
			<Counter/>
		</>
	);
}

export default App;
