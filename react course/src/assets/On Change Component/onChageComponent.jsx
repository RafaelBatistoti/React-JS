import { useState } from "react";
import style from "./app.module.css";

function OnChageComponent() {
	const [name, setName] = useState("");
	const [quantity, setQuantitye] = useState();
	const [comment, setComment] = useState("");
	const [paymment, setPaymment] = useState("");
	const [shipping, setShipping] = useState("");

  function handlleNameChange(e) {
		setName(e.target.value);
	}

	function handlleQuantityChange(e) {
		setQuantitye(e.target.value);
	}

	function handlleCommentChange(e) {
		setComment(e.target.value);
	}

	function handlePaymmentChange(e) {
		setPaymment(e.target.value);
	}

	function handleShippingChange(e) {
		setShipping(e.target.value);
	}

	return (
		<div>
			<input className = {style.entrada}type='num' value={name} onChange={handlleNameChange} />
			<p className={style['p-comoponents']} >Name: {name}</p>

			<input type='number' value={quantity} onChange={handlleQuantityChange} />
			<p className={style['p-comoponents']} >Quantity: {quantity}</p>

			<textarea
				value={comment}
				onChange={handlleCommentChange}
				placeholder='Enter delivery instructions'></textarea>
			<p className={style['p-comoponents']} >Comment: {comment}</p>

			<select value={paymment} onChange={handlePaymmentChange}>
				<option value=''>Select an option</option>
				<option value='Visa'>Visa</option>
				<option value='Mastercard'>Mastercard</option>
				<option value='Paypal'>Paypal</option>
				<option value='Giftcard'>Giftcard</option>
			</select>
			<p className={style['p-comoponents']}>Paymment: {paymment}</p>

			<input className = {style.entrada}
				type='radio'
				value='Pick up'
				checked={shipping == "Pick up"}
				onChange={handleShippingChange}
			/>
			<label className={style.text1}>Pick up</label>
			<br />
			<input className = {style.entrada}
				type='radio'
				value='Delivery'
				checked={shipping == "Delivery"}
				onChange={handleShippingChange}
			/>
			<label className={style.text1}>Delivery</label>
			<p className={style['p-comoponents']} >Shipping: {shipping}</p>
		</div>
	);
}

export default OnChageComponent;
