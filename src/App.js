import React, { Component, Fragment } from 'react'
import ListContacts from './ListContacts'

class App extends Component {
  state = {
    contacts: [
     {
       "id": "karen",
       "name": "Karen Isgrigg",
       "handle": "karen_isgrigg",
       "avatarURL": "http://localhost:5001/karen.jpg"
     },
     {
       "id": "richard",
       "name": "Richard Kalehoff",
       "handle": "richardkalehoff",
       "avatarURL": "http://localhost:5001/richard.jpg"
     },
     {
       "id": "tyler",
       "name": "Tyler McGinnis",
       "handle": "tylermcginnis",
       "avatarURL": "http://localhost:5001/tyler.jpg"
     }
    ]
  }

  removeContact(contact) {
    this.setState((current) => ({
      contacts: current.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
  }

  removeContact = this.removeContact.bind(this)

  render() {
    return (
      <Fragment>
        <ListContacts
          contacts={this.state.contacts}
          onDelete={this.removeContact}
        />
      </Fragment>
    )
  }
}

export default App
