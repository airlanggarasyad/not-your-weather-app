import React, {Component} from 'react';
import '../Styles/search.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            barInput: ''
        };
    };



    render() {
        return(
            <form onSubmit={this.props.loc}>
                <div className="search-box">
                    <input 
                        type="text"
                        name="city"
                        className="search-bar" 
                        placeholder="Search..."
                    />
                </div>
            </form>
        );
    }
}

export default SearchBar