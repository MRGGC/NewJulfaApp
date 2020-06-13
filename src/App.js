import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Content from './components/content/Content';
import Timeline from './components/timeline/timeline';
import Admin from './components/admin/Admin';

function Main() {
    const TITLE = "նոր ջուղա";

    return (
        <React.Fragment>
            <h1 className="title">{TITLE}</h1>
            <Timeline />
            <Content />
        </React.Fragment>
    );
}

function App() {
    return (
        <BrowserRouter>
        <div className="App">
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/login' component={Admin} />
        </Switch>
        </div>
        </BrowserRouter>
    );
}

export default App;
