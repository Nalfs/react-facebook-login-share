import React, { Component } from 'react';
import { Hello } from './hello';

export default class App extends Component  {

  state = {
    username: null
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
    }
  }

    render() {
      const { username } = this.state;

      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React Social Media Login</h1>
          </header>

          <div className="App-intro">
            { !username &&
              <div>
                <p>Click on one of any button below to login</p>
                <Hello onLogin={this.onFacebookLogin}>
                  <button>Facebook</button>
                </Hello>
              </div>
            }
            {username &&
              <p>Welcome back, {username}</p>
            }
          </div>
        </div>
      );
    }
};
