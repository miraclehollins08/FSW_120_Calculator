import React, {Component} from 'react'
import './App.css'
class App extends Component {

    state={
        dice:1
    }
    throwDice=() =>{
        const diceValue=Math.floor(Math.random()*6+1);
        
        this.setState({
            dice:diceValue
        })
    }
     
    render() {
        return(
        <div className="App">
        <div className="Container">
        <div className="DiceContainer">  
        <img src={require('./assets/dice/dice1.png')} alt="dice"/>
        </div>
        <div className="DiceBtnContainer">
        <button onClick={this.throwDice}className="DiceBtn">Click Play</button>
        </div>
        </div>
        </div>
        );
    }

}


export default App;