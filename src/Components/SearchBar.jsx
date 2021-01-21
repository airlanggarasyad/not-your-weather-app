import React, {Component} from 'react';
import '../Styles/search.css';

class SearchBar extends Component {
    render() {
        return(
            <form onSubmit={this.props.loc}>
                <div className="search-box">
                    <input 
                        type="text"
                        name="city"
                        className="search-bar" 
                        placeholder="Fill in a location..."
                    />
                </div>
            </form>
        );
    }
}

export default SearchBar