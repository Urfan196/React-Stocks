import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar sortByAlp={this.props.sortByAlp}  sortByPrice={this.props.sortByPrice}  handleFiterType={this.props.handleFiterType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} addStock={this.props.addStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer portStock={this.props.portStock} removeStock={this.props.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
