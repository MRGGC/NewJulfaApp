import React from 'react';
import { VectorMap } from "react-jvectormap"
import './jquery-jvectormap.css'
import { GetNodes } from '../../../services/api';


class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = { year: this.props.year, loaded: false };
        this.info = {};
        this.map = React.createRef();
    }

    omc = (event, id) => {
        alert(this.state.year);
    }

    async componentDidMount() {
        this.info = await GetNodes();
        console.log("INFO", this.info);
        this.updateMarkers(this.year);
    }

    updateMarkers = (year) => {
        let state = this.state;
        state.year = year;
        this.refs.map.getMapObject().removeAllMarkers();
        this.refs.map.getMapObject().addMarkers(this.info[year]);
    }

    render() {
        return (
            <div ref={this.map} style={{ width: "100%", height: "80vh" }}>
                <VectorMap map={'world_mill'}
                    backgroundColor="#3b96ce"
                    ref="map"
                    containerStyle={{
                        width: '75%',
                        height: '100%',
                        margin: "30px auto",
                    }}

                    containerClassName="map"
                    regionStyle={{
                        initial: {
                            fill: "white",
                            "fill-opacity": 1,
                            stroke: "white",
                            "stroke-width": 1,
                            "stroke-opacity": 1
                        },
                        hover: {
                            "fill-opacity": 1,
                            stroke: "white",
                            fill: "white"
                        },
                        selectedHover: {}
                    }}
                    onRegionTipShow={
                        function (e, label, code) {
                            e.preventDefault();
                        }
                    }

                    markerStyle={{
                        initial: { fill: '#F8E23B', stroke: '#383f47' }
                    }}
                    onMarkerClick={this.omc}

                />
            </div>
        );
    }
}

export default Map;
