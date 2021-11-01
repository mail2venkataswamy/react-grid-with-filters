import { Component } from "react";
import Aggrid from "./components/Aggrid.jsx";
import FilterContainer from "./components/filterscontainer.jsx";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect(value) {
    console.log("values is", value);
  }
  render() {
    return (
      <div className="filterGridWrapper">
        <FilterContainer onSelect={() => this.onSelect}></FilterContainer>
        <Aggrid></Aggrid>
      </div>
    );
  }
}

export default App;
