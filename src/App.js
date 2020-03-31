import React from 'react';
import Content from './components/content/Content';
import Slider from './components/timeline/slider/slider'

function App() {
    return (
        <div className="App">
            <Slider values={[1620, 1630, 1640, 1650, 1660, 1670, 1680, 1690, 1700, 1710, 1720]} />
            <Content />
        </div>
    );
}

export default App;
