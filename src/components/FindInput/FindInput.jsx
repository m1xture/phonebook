// import { Component } from "react";
import css from "./FindInput.module.css";

// class FindInput extends Component {
//   render() {
//     return (
//       <label className={css.label}>
//         Find contacts by the name
//         <input type="text" onChange={this.props.findContactFn} />
//       </label>
//     );
//   }
// }

const FindInput = ({ findContactFn }) => {
  return (
    <label className={css.label}>
      Find contacts by the name
      <input type="text" onChange={findContactFn} />
    </label>
  );
};

export default FindInput;
