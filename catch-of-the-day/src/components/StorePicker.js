import React, {Fragment} from 'react';
import { getFunName } from "./helpers"

class StorePicker extends React.Component {
    handleClick(){
        alert('Heyyyy!')
    }
    render(){
        // return <p>I am the store Picker!!!</p>
        // return React.createElement('p', {className:'hey'}, 'Heyyyyyoo!!!')
        console.log(this)
        return (  
        <Fragment>
            {/* JavaScript */}
            {/* <p>Fish!</p> */}
            <form className='store-selector'>
                <h2>Please Enter A Store!</h2>
                <button onClick={this.handleClick}>Click me!</button>
                {/* <input type="text" required placeholder='Store Name' defaultValue="hello" /> */}
                <input type="text" required placeholder='Store Name' defaultValue={getFunName()} />
                <button type='submit'>Visit Store  →</button>
            </form>
        </Fragment>)

    }
}
export default StorePicker;