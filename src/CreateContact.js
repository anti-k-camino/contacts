import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"
import formSerialize from "form-serialize"
import PropTypes from "prop-types"
import ImageInput from "./ImageInput"

class CreateContact extends Component {
  static propTypes = {
    onCreateContact: PropTypes.func
  }
  handleSubmit(event) {
    event.preventDefault()
    const value = formSerialize(event.target, {hash: true})

    if (this.props.onCreateContact) {
      this.props.onCreateContact(value)
    }
  }
  handleSubmit = this.handleSubmit.bind(this)
  render() {
    return (
      <Fragment>
        <Link className="close-create-contact" to="/">
          Close
        </Link>
        <form
          onSubmit={this.handleSubmit}
          className="create-contact-form"
        >
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="handle" placeholder="Handle" />
            <button>
              ADD CONTACT
            </button>
          </div>
        </form>
      </Fragment>
    )
  }
}

export default CreateContact
