import React from 'react';
import Slider from './slider/slider'
import Map from './map/map'


class Timeline extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            year: 1620
        };
        this.map = React.createRef();
    }

    oyc = year => {
        this.map.current.updateMarkers(year);
    }


    render() {
        return (
            <>
                <Map year={this.state.year} ref={this.map} />
                <Slider values={[1620, 1630, 1640, 1650, 1660, 1670, 1680, 1690, 1700, 1710, 1720]} onYearChange={this.oyc} />
            </>
        );
    }
}

export default Timeline;
