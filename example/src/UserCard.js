import React from 'react'
import { UserContext } from './user-context'

export default () => (
  <UserContext.Consumer>
    {({ user, fountainOfYouth }) => (
      <div
        style={{
          border: '2px solid',
          width: '25vw',
          padding: '1vw',
          backgroundColor: '#ccc'
        }}
      >
        <h3>{user.name}</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <h4>Age: {user.age}</h4>
          <button
            onClick={fountainOfYouth}
            style={{ height: '4vh', cursor: 'pointer' }}
          >
            Make Me Younger
          </button>
        </div>

        <img src={user.photo} alt="user avatar" style={{ height: '20vh' }} />
      </div>
    )}
  </UserContext.Consumer>
)
