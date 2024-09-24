
import style from './app.module.css'
import PropTypes from 'prop-types'

function UserGreeting(props) {

  const welcomeMessage = (
    <h2 className= {style['welcome-message']}>Welcome {props.username}</h2>
  )
  const loginPromp = (
    <h2 className= {style['login-prompt']}>Please log in to continue</h2>
  )
  

  return props.isLoggedIn ? welcomeMessage : loginPromp
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string
}

export default UserGreeting
