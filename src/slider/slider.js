import React from "react";
import "./slider.css";

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { position: 0, renderPosition: "0%" };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 600);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.updatePosition(this.state.position);
        this.state.position++;
    }

    updatePosition(n) {
        let outputState = this.state;
        outputState.position = n;
        outputState.renderPosition = n * 9.615 + 0.7 + "%";
        this.setState(outputState);
    }

    render() {
        return (
            <div style={{ width: "60%", margin: "auto", marginTop: "20%" }}>
                <div className="slider-bar">
                    <div
                        style={{
                            borderRadius: "1000px",
                            width: "20px",
                            height: "20px",
                            backgroundColor: "white",
                            position: "relative",
                            left: this.state.renderPosition,
                            transform: "translateY(-7px)",
                            cursor: "pointer"
                        }}
                        draggable={true}
                        // onDragOver={sliderDrag}
                    ></div>
                </div>
                <div
                    style={{
                        width: "100%",
                        textAlign: "justify"
                    }}
                >
                    1620 1630 1640 1650 1660 1670 1680 1690 1700 1710 1720
                    <span> </span>
                </div>
            </div>
        );
    }
}

export default Slider;
