import { Component } from "react";
import css from "./AddForm.module.css";

class AddForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.saveFn} className={css.form}>
        <input
          placeholder="Enter contact name here"
          type="text"
          name="name"
          required
          className={css.input}
        />
        <input
          placeholder="Enter contact number here"
          type="tel"
          name="tel"
          required
          className={css.input}
        />
        <button type="submit" className={css.saveBtn}>
          Save contact
        </button>
      </form>
    );
  }
}

export default AddForm;
