import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  constructor(){
    super()

    this.state ={
      stocks: [],
      displayStocks: [],
      portStock: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks').then(resp=> resp.json())
    .then(stocks => {
    this.setState({stocks})
    })
  }

  addStock = (stock) => {
    this.setState(prevState => {
     return {
      portStock: [...prevState.portStock, stock]
     } 
    })
  }

  removeStock = (stock) => {
    const filteredStocks = this.state.portStock.filter(stc => stc.id !== stock.id);

    this.setState({
       portStock: filteredStocks
     })
  }

  sortByAlp = () => {
     const sortedArray = this.state.stocks.sort((a, b) => {
       const tickerA = a.ticker.toUpperCase()
       const tickerB = b.ticker.toUpperCase()

        if(tickerA > tickerB){
          return 1
        } else if (tickerA < tickerB) {
          return -1
        } else {
          return 0
        }
     });
    this.setState({displayStocks: sortedArray})
  }
  

  sortByPrice = () => {
    const sortedArray = this.state.stocks.sort((a, b) => {
      return b.price - a.price
    });
   this.setState({displayStocks: sortedArray})
  }

  handleFiterType = (e) => {
    const valueType = e.target.value
    const filteredArray = this.state.stocks.filter(stock => stock.type === valueType)
    console.log(filteredArray);
    this.setState({displayStocks: filteredArray})
  }

  render() {
    return (
      <div>
        {console.log(this.state.displayStocks)}
        <Header/>
        <MainContainer  addStock={this.addStock} 
        portStock={this.state.portStock} removeStock={this.removeStock} 
        sortByAlp={this.sortByAlp}  sortByPrice={this.sortByPrice} handleFiterType={this.handleFiterType} 
        stocks={ this.state.displayStocks.length == 0 ? this.state.stocks : this.state.displayStocks } 

        />
      </div>
    );
  }
}

export default App;
