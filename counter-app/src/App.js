import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // Mounting Phase
  // constructor(props) {
  //   super(props);
  //   console.log("App -> Constructor", this.props);
  // Perfect place for initialising variables
  constructor() {
    super();
    console.log("App -> Constructor");
    // this.state = this.props.something;

    //this.setState() is couldn't called in constructor as it is useful we the object in the DOM
  }

  // After object rendered into the DOM and perfect place for Ajax Call
  componentDidMount() {
    console.log("App -> Mounted");
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    this.setState({
      counters: this.state.counters.filter(c => c.id !== counterId)
    });
  };

  handleIncrement = product => {
    const { counters, index } = this.prepareCounters(product);
    // const counters = [...this.state.counters];
    // const index = counters.indexOf(product);
    //It will change the value in actual data that we don't want
    // counter[index].value++
    counters[index] = { ...product };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = product => {
    const { counters, index } = this.prepareCounters(product);
    counters[index].value--;
    this.setState({ counters });
  };

  prepareCounters(product) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(product);
    counters[index] = { ...product };
    return { counters, index };
  }

  // When a component renders all its children were rendered recurssively
  render() {
    console.log("App -> Rendered");
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
