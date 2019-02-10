import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are not tags!</p>;
    }
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    //Return Automatic semicolon insertion, would work when we have single statement in front of
    //return statement or return ()

    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="Picsum Image" /> */}
        {/* styles={this.styles} or inline style { {fontSize: 30} } */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="brn btn-secondary btn-sm">Increment</button>

        {/* This is javascript that displays the second operand. As if first is true the javascript
        Engine would see the next operand and in case of String it is true */}
        {this.state.tags.length === 0 && "Please, create a new tag"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
