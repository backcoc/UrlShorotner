import React, { Component } from 'react';
import axios from 'axios';


class Url extends Component {
    constructor() {
        super();
        this.state = {
            status: false,
            data: {},
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.getUrl = this.getUrl.bind(this);
        this.apiUrl = 'https://link-shortner-ng.herokuapp.com/api';
    }

    // Update the State when the form is submitted
    onSubmit(event) {
        this.setState({ data: {} });
        this.setState({ status: 302 });
        event.preventDefault();
        const urlLink =  this.url.value;
        this.getUrl(urlLink);
    }
    // GET WEATHER METHOD
    getUrl(urlLink) {
        const postRequest = {
            method: 'POST',
            url: urlLink,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        axios.post(this.apiUrl, postRequest)
        .then((response) => {
            const data = response.data;
            console.log(data);
        this.setState({data: data.message});
        this.setState({status: data.status});
        })
        .catch(error => {
            console.log(error);
            this.setState({data: 'Ooops Something Broke!.😞'});
            this.setState({status: 500});
        })
    }


    componentDidMount() {
    }

    // Render Method
    render() {
        const urlState = this.state.data;
        const urlStatus = this.state.status;
        let views = <div className="text-red">Processing....</div>
        if(urlStatus === false) {
            views = <div></div>
        }
        else if(urlStatus === 302){
            views = <div>{views}</div>
        }
        else if (urlStatus === 500) {
            views = <div>{urlState}</div>
        }
        else if(urlStatus === 200) {
            views = <div>{urlState}</div>
        }
        return (
            <div className="text-center">
                 <form ref={(input) => this.urlForm = input} className="form-signin" onSubmit={this.onSubmit}>
                    <div className="form-group">
                     <input ref={(input) => this.url = input} type="text" placeholder="Paste a Link Here" className="form-control form-control-lg" />
                    </div>
                </form>
                {views}
            </div>
        );
    }
}

export default Url;
