import React from "react";

class SearchBar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: " "
        };
        this.valueChange = this.valueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    };

    valueChange(event) {
        this.setState({value: event.target.value});
    };

    handleSubmit(event) {
        event.preventDefault();
        this.props.searchWeatherByCityName(this.state.value);
    };
    
    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Find city:
                        <input className="input-city" value={this.state.value} type="text" onChange={this.valueChange}/>
                    </label>
                    <input className="search-btn" type="submit" value="Find"/>
                </form>
            </div>
        )
    };
};

export default SearchBar;