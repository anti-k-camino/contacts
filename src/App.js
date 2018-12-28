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

  createContact(contact) {
    ContactsApi.create(contact)
    .then((contact) => {
      this.setState((current) => ({
        contacts: current.contacts.concat([contact])
      }))
    })
  }
  createContact = this.createContact.bind(this)

  render() {
    return (
      <Fragment>
        <Route exact path="/" render={() => (
          <ListContacts
            contacts={this.state.contacts}
            onDelete={this.removeContact}
          />
        )} />
        <Route path="/create" render={({history}) => (
          <CreateContact
            onCreateContact={
              (contact) => {
                this.createContact(contact)
                history.push("/")
              }
            }
          />
        )} />
      </Fragment>
    )
  }
}

export default App
