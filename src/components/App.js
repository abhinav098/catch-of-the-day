import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";

class App extends React.Component{
  state = {
    fishes: {},
    order: {}
  }

  addFish = (fish) => {
    // take a copy of the state object
    const fishes = { ...this.state.fishes };
    // create a new fish object
    fishes[`fish${Date.now()}`] = fish;
    // update the state
    this.setState({ fishes });
  }

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes});
  }

  render(){
    return (
      <div className="catch-of-the-day">
        <div className= "menu">
          <Header tagline="Fresh Food Always"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key =>
              <Fish
                index={key}
                key={key}
                fish={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            )}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  };
};

export default App;
