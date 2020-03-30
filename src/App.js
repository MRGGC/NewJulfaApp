import React from 'react';
import Content from './components/content/Content';
import Slider from './components/timeline/slider/slider'

function App() {
    return (
        <div className="App">
            <Slider values={[1620, 1920, 1324, 1236, 6434, 7634, 5212, 5235, 5123, 1231, 5432, 5123, 7453]} />
            <Content />
        </div>
    );
}

export default App;
