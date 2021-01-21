import React, {Component} from 'react';
import '../Styles/search.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usrInput: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    
    handleChange = (e) => {
        this.setState({usrInput: e.target.value});
    }

    handleSubmit = (e) => {
        console.log(this.state.usrInput);
        e.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="search-box">
                    <input 
                        type="text"
                        value={this.state.usrInput}
                        onChange={this.handleChange}
                        className="search-bar" 
                        placeholder="Search..."
                    />
                </div>
            </form>
        );
    }
}

export default SearchBar