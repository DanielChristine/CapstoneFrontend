import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createAccount, customerLogin} from '../../actions/customerActions'

class CustomerLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            company: '',
            password: ''
        };
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
          
        const customer = {
          company: this.state.company,
          password: this.state.password,
          email: this.state.email,
          address: this.state.address
        }
        this.props.createCustomer(customer);
      }

    render() {
        return (
            <div>
                <h1>New Customer</h1>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div>
                        <label>
                            Company:
                        </label>
                        <br/>
                        <input type="text" name="company" value={this.state.company} onChange={(e) => this.onChange(e)}/>
                    </div>
                    <br />
                    <div>
                        <label>
                            Password:
                        </label>
                        <br/>
                        <textarea name="password" value={this.state.password} onChange={(e) => this.onChange(e)}/>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default connect(null, { createCustomer });
