import React from 'react'

export const defaultUser = {
  name: '',
  age: '',
  photo: ''
}

export const UserContext = React.createContext({
  user: defaultUser,
  fountainOfYouth: () => {}
})
