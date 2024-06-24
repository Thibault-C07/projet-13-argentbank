import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProfile } from '../redux/actions'
import '../styles/Header.css'

const Header = () => {
  const dispatch = useDispatch()

  const { firstName } = useSelector((state) => state.userProfile)
  const { lastName } = useSelector((state) => state.userProfile)
  const { token } = useSelector((state) => state.userLogin)

  const [newFirstname, setNewFirstname] = useState()
  const [newLastname, setNewLastname] = useState()

  const [editButton, setEditButton] = useState(false)

  const editNameButton = (e) => {
    e.preventDefault()
    setEditButton((current) => !current)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      await dispatch(updateProfile(token, newFirstname, newLastname))
      setEditButton(false)
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  return (
    <>
      {!editButton ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName + ' ' + lastName} !
          </h1>
          <button onClick={editNameButton} className="edit-button">
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>
          <form className="editNameContent" onSubmit={submitHandler}>
            <div className="editNameInputs">
              <input
                type="text"
                placeholder={firstName}
                onChange={(e) => setNewFirstname(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder={lastName}
                onChange={(e) => setNewLastname(e.target.value)}
                required
              />
            </div>
            <div className="editNameButtons">
              <button className="save-button" type="submit">
                Save
              </button>
              <button className="cancel-button" onClick={editNameButton}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default Header
