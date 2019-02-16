import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   // this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //Commenting state because of Single Source of Truth
  // state = {
  //   //If constructor is there we never get the value of value
  //   value: this.props.counter.value
  //   // tags: ["tag1", "tag2", "tag3"],
  //   // imageUrl: "https://picsum.photos/200"
  // };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  // renderTags() {
  //   if (this.state.tags.length === 0) {
  //     return <p>There are not tags!</p>;
  //   }
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // handleIncrement = product => {
  //   // console.log(product);
  //   //In React the changes goes to virtual dom and increment won't reflect so we have to tell React to
  //   //change its state. It isn't like Angular.
  //   //this.state.count++;
  //   this.setState({ value: this.state.value + 1 });
  //   //console.log("Increment clicked", this);
  //   //this.state.count++;
  //   //Never get this variable reason
  //   //obj.method() will not point to this
  //   //method() will point to Window if not in restricted mode.
  //   //So to get this object inside the function we use constructor with bind
  //   //Alternate solution: Convert the function to error function and this would be referenced in it.
  //   // handleIncrement() = () => {}
  //   //But it won't work in future
  // };

  //One solution to pass argument
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  componentDidUpdate(preProps, preState) {
    console.log("preProps", preProps);
    console.log("preState", preState);
    if (preProps.counter.value !== this.props.counter.value) {
      // Make Ajax Call to get some data from Server
    }
  }

  // Better place for clean up
  componentWillUnmount() {
    console.log("Counter -> Unmount");
  }

  render() {
    //Return Automatic semicolon insertion, would work when we have single statement in front of
    //return statement or return ()

    console.log("Counter -> Rendered");
    return (
      <div className="row">
        <div className="col-1">
          {/* <React.Fragment> */}
          {/* <img src={this.state.imageUrl} alt="Picsum Image" /> */}
          {/* styles={this.styles} or inline style { {fontSize: 30} } */}
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            //Passing error function to handle argument
            // onClick={() => this.handleIncrement({ id: 1 })}
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>

          {/* This is javascript that displays the second operand. As if first is true the javascript
        Engine would see the next operand and in case of String it is true */}
          {/* {this.state.tags.length === 0 && "Please, create a new tag"} */}
          {/* {this.renderTags()} */}
          {/* </React.Fragment> */}
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
