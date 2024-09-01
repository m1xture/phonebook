import { Component } from "react";
import css from "./Contact.module.css";

class Contact extends Component {
  render() {
    const { id, name, number } = this.props.contact;
    return (
      <li id={id} className={css.contact}>
        <h2>{name}</h2>
        <p>{number}</p>
        <button type="button" onClick={this.props.deleteFn}>
          Delete
        </button>
      </li>
    );
  }
}
export default Contact;
