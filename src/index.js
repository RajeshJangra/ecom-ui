// import React from 'react';
import {render} from 'react-dom';
// import './index.css';
import App from './App';
import Registration from './Registration';
import Login from './Login';
import React from 'react';
// Import routing components
// import {Router, Route} from 'react-router';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Signup from './Signup';
// import Car from './Cars';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


render(
    <Router>
        <div>
        {/* <!--Each route is defined with Route--> */}
        <Route exact path="/" component={App}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Registration} />
        {/* <Route path="/cars" component={Car} /> */}
        <Route path="/teachers" component={Login} />
        <Route path="/courses" component={Login} />
        {/* <Redirect to="/" /> */}
        </div>
    </Router>,
    document.getElementById('root')
);

