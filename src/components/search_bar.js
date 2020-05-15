import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
        };

        this.onTermChange = this.onTermChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onTermChange(e) {
        this.setState({ term: e.currentTarget.value });
    }

    onFormSubmit(e) {
        e.preventDefault();

        this.props.videoSearch(this.state.term);
    }

    render() {
        return (
            <div className='row'>
                <form onSubmit={this.onFormSubmit} className='form-group'>
                    <input
                        className='col-md-5'
                        value={this.state.term} 
                        onChange={this.onTermChange}/>
                    <span className='col-md-4'>
                        <button className='btn btn-primary' type='submit'><i className='fas fa-search' /> 검색</button>
                    </span>
                </form>
            </div>
        );
    }
}

export default SearchBar;