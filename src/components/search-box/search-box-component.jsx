import { Component } from "react";
import "./style.css";

class SearcBox extends Component {
  render() {
    const { onSearchChange, placeholder, className } = this.props;
    return (
      <input
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
        className={className}
      />
    );
  }
}
export default SearcBox;
