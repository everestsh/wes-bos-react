import React, {Component} from "react";
import Header from "./Header";
import Inventory from "./Inventory"
import Order from "./Order";

class App extends Component {
    render() {
        return (
            <div className="catch-of-the-day">
                {/* <p>heyyy!</p> */}
                <div className="menu">
                    {/* <Header  tagline="Fresh Seafood Market"/> */}
                    {/* <Header  tagline="Wes is Cool"/> */}
                    <Header tagline="Fresh Seafood Market" age={100} />
                </div>
                    <Order />
                    <Inventory />
            </div>
        )
    }
}
export default App;