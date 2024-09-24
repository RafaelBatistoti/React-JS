import rafael from './rafael.jpeg';
import style from './card.module.css';


function Card() {
  return (
    <div className={style.card}>
			<img className= {style['card-image']}src={rafael} alt='profile picture' />
			<h2 className={style['card-title']}>Rafael</h2>
			<p className={style['card-text']}>Lorem ipsum odor amet, consectetuer adipiscing elit. Imper</p>
		</div>
  )
}

export default Card
