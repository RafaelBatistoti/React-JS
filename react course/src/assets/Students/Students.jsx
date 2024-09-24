import style from "./students.module.css";
import PropTypes from "prop-types";

function Students(props) {
	return (
		<div className={style.students}>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
			<p>Student: {props.isStudent ? "Yes" : "No"}</p>
		</div>
	);
}

Students.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	isStudent: PropTypes.bool
};

Students.defaultProps = {
	name: 'Student',
	age: 0,
	isStudent: false
}

export default Students;
