import React from 'react';
import { VectorMap } from "react-jvectormap"
import './jquery-jvectormap.css'


class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = { year: this.props.year };
        this.info = {
            "1680": [
                {
                    "latLng": [
                        40.372338,
                        44.85211
                    ],
                    "name": "angirstan",
                    "text": "this place is known for angir",
                    "status": "new"
                },
                {
                    "latLng": [
                        40.372338,
                        44.85211
                    ],
                    "name": "angirstan 2",
                    "text": "this place is even more known for angir",
                    "status": "alive"
                }
            ],
            "1690": [
                {
                    "latLng": [
                        40.372338,
                        45.85211
                    ],
                    "name": "krinj",
                    "text": "lmao exdddddd",
                    "status": "dead"
                },
                {
                    "latLng": [
                        40.372338,
                        43.85211
                    ],
                    "name": "angirstan 69",
                    "text": "this is text info about node kthx",
                    "status": "dead"
                }
            ]
        };
        this.map = React.createRef();
    }

    omc = (event, id) => {
        alert(this.state.year);
    }

    componentDidMount() {
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
