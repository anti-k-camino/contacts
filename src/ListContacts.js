import React, { Component } from "react"
import PropTypes from "prop-types"

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
  }
  state = {
    query: ""
  }
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }
  resetSearch = () => {
    this.setState({
      query: ""
    })
  }
  render() {
    const { query } = this.state
    const { contacts, onDelete } = this.props

    const showedContacts = query === "" ? contacts : contacts
      .filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search"
            value={query}
            onChange={(event) => {this.updateQuery(event.target.value)}}
          />
        </div>
        { showedContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              Now showing {showedContacts.length} of {contacts.length} contacts
            </span>
            <button onClick={() => this.resetSearch()}>
              Show all
            </button>
          </div>
        )}
        <ol className="contact-list">
          { showedContacts.map((contact) => (
              <li key={contact.id} className="contact-list-item">
                <div
                  className="contact-avatar"
                  style={{backgroundImage: `url(${contact.avatarURL})`}}
                ></div>
                <div className="contact-details">
                  <p>{contact.name}</p>
                  <p>@{contact.handle}</p>
                </div>
                <button
                  className="contact-remove"
                  onClick={() => onDelete(contact)}
                >
                  Remove
                </button>
              </li>
            ))
          }
        </ol>
    </div>
    )
  }
}

export default ListContacts
