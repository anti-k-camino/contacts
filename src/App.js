import React, { Component, Fragment } from "react"
import { Route } from "react-router-dom"
import ListContacts from "./ListContacts"
import * as ContactsApi from "./utils/ContactsAPI"
import CreateContact from "./CreateContact"

class App extends Component {
  state = {
    contacts: []
  }
  componentDidMount() {
    ContactsApi.getAll().then((contacts) => {
      this.setState(() => ({contacts}))
    })
  }
  removeContact(contact) {
    this.setState((current) => ({
      contacts: current.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
    ContactsApi.remove(contact)
  }

  removeContact = this.removeContact.bind(this)

  render() {
    return (
      <Fragment>
        <Route exact path="/" render={() => (
          <ListContacts
            contacts={this.state.contacts}
            onDelete={this.removeContact}
          />
        )} />
        <Route path="/create" component={CreateContact} />
      </Fragment>
    )
  }
}

export default App
