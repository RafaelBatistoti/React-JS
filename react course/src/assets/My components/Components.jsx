import style from './components.module.css'
import { useState } from "react";


function Components() {
  const [name,setName] = useState('Guest')
  const [age, setAge] = useState(0)
  const [isEmploy, setIsEmploy] = useState(false)

  const updateName = ()=>{
    setName('Rafael')
  }
  const incrementAge = ()=>{
    setAge(age + 1) 
  }
  const toggleEmployeStatus = ()=>{
    setIsEmploy(!isEmploy)
  }
  return (

    		<div>
			<p className={style['p-comoponents']}>Name: {name}</p>
			<button className={style['button-updated']} onClick={updateName}>
				Set name
			</button>

			<p className={style['p-comoponents']}>age: {age}</p>
			<button className={style['button-updated']} onClick={incrementAge}>
				Increment Age
			</button>

			<p className={style['p-comoponents']}>Is isEmploy: {isEmploy ? 'Yes' : 'No' }</p>
			<button className={style['button-updated']} onClick={toggleEmployeStatus}>
				Toglle status
			</button>
		</div>
  )
}

export default Components
