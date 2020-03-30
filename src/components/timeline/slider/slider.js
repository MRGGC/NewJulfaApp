import React from "react";
import "./slider.css";

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            renderPosition: "0%",
            coords: { x: 0, y: 0 }
        };
        this.sliderDragStart = this.sliderDragStart.bind(this);
        this.sliderDragEnd = this.sliderDragEnd.bind(this);
        this.sliderDrag = this.sliderDrag.bind(this);
        this.selector = React.createRef();
    }

    componentDidMount() {
        let bodyRect = document.body.getBoundingClientRect();
        const elemRect = this.selector.current.getBoundingClientRect();
        this.offset = elemRect.left - bodyRect.left;
        this.len = elemRect.right - elemRect.left;
        this.updatePosition(0);
    }

    sliderDrag(e) {
        let s = this.state;
        s.coords.x = e.screenX;
        s.coords.y = e.screenY;
        this.setState(s);
        let output = s.coords.x;
        if (output > this.offset + this.len) output = this.offset + this.len;
        if (output < this.offset) output = this.offset;
        this.updatePosition(((output - this.offset) / this.len) * 10.4 - 0.3);
    }

    sliderDragStart(e) {
        document.addEventListener("mouseup", this.sliderDragEnd);
        document.addEventListener("mousemove", this.sliderDrag);
    }

    sliderDragEnd() {
        document.removeEventListener("mouseup", this.sliderDragEnd);
        document.removeEventListener("mousemove", this.sliderDrag);

        this.updatePosition(Math.round(this.state.position));
    }

    updatePosition(n) {
        let outputState = this.state;
        outputState.position = n;
        outputState.renderPosition = n * 9.65 + 0.7 + "%";
        this.setState(outputState);
    }

    render() {
        return (
            <div
                ref={this.selector}
                style={{
                    width: "40%",
                    margin: "auto",
                    marginTop: "20%",
                    padding: "0"
                }}
            >
                <div className="slider-bar">
                    <div
                        className="slider-bar-past"
                        style={{ width: this.state.renderPosition }}
                    >
                        <div
                            style={{
                                borderRadius: "1000px",
                                width: "20px",
                                height: "20px",
                                backgroundColor: "white",
                                position: "relative",
                                left: "98%",
                                transform: "translateY(-7px)",
                                cursor: "pointer"
                            }}
                            onMouseDown={this.sliderDragStart}
                        ></div>
                    </div>
                </div>
                <div
                    style={{
                        width: "100%",
                        textAlign: "justify",
                        padding: "0",
                        
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
