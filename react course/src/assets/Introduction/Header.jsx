import styles from '../Introduction/intro.module.css';

function Header() {
  return (
    <header>
      <h1 className = {styles['h1-intro']}>My Website</h1>
      <nav>
        <ul className="ul-intro">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
