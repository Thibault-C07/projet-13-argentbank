import React from 'react'
import '../styles/Form.css'

const Form = () => {
  return (
    <section>
      <i className="fa fa-user-circle fa-4x sign-in-icon" />
      <h1> Sign In </h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" list="usernames" id="email" required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button"> Sign In</button>
      </form>
    </section>
  )
}

export default Form
