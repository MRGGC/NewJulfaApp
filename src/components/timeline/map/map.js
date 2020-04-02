import React from 'react';
import { VectorMap } from "react-jvectormap"
import './jquery-jvectormap.css'


class Map extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ position: "relative", margin: "auto" }}>
                <div style={{ width: "100%", height: "500px" }}>
                    <VectorMap map={'world_mill'}
                        backgroundColor="#3b96ce"
                        ref="map"
                        containerStyle={{
                            width: '100%',
                            height: '100%',

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
                                stroke: "grey",
                                fill: "grey"
                            },
                            selectedHover: {}
                        }}
                        markerStyle={{
                            initial: { fill: '#F8E23B', stroke: '#383f47' }
                        }}
                        markers={[
                            { latLng: [40.372338, 44.85211], name: 'helo' },

                        ]}

                    />
                </div>
            </div>
        );
    }
}

export default Map;
