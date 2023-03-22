// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationCard from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = destination => {
    this.setState({searchInput: destination})
  }

  onChangeInputSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResult = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="list-container">
        <h1 className="title">Destination Search</h1>
        <input
          type="search"
          className="input-search-element"
          value={searchInput}
          onChange={this.onChangeInputSearch}
        />
        <ul className="container">
          {searchResult.map(eachItem => (
            <DestinationCard key={eachItem.id} cardDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
