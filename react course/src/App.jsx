import Footer from "./assets/Introduction/Footer";
import Header from "./assets/Introduction/Header";
import Card from "./assets/Card/Card";
import Food from "./assets/Food/Food";
import Button from "./assets/Button/Button";
import Students from "./assets/Students/Students";
import UserGreeting from "./assets/UserGreeting/UserGreeting";

function App() {
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
		</>
	);
}

export default App;
