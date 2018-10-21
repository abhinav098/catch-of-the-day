import React from "react";
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
  myInput = React.createRef();

  goToStore = (event) =>{
    // stop the form
    event.preventDefault();
    // get the text
    const storeName = this.myInput.current.value;
    // change the page to /store/:id
    this.props.history.push(`/store/${storeName}`)
  }

  render() {
    return (
        <React.Fragment>
          <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please enter a store name</h2>
            <input
              ref={this.myInput}
              type="text"
              required placeholder="Store Name"
              defaultValue={getFunName()}
            />
            <button type="submit">Visit this Store</button>
          </form>
        </React.Fragment>
      )
  };
};

export default StorePicker;
