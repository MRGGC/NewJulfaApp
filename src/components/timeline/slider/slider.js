import React from "react";
import "./slider.css";

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            renderPosition: "0%",
            coords: { x: 0, y: 0 },
            vlength: props.values.length - 1
        };

        this.selector = React.createRef();
    }

    componentDidMount() {
        let bodyRect = document.body.getBoundingClientRect();
        const elemRect = this.selector.current.getBoundingClientRect();
        this.offset = elemRect.left - bodyRect.left;
        this.len = elemRect.right - elemRect.left;
        this.updatePosition(0);
    }

    sliderDrag = e => {
        let s = this.state;
        s.coords.x = e.screenX;
        s.coords.y = e.screenY;
        this.setState(s);
        let coords = s.coords.x;
        if (coords > this.offset + this.len) coords = this.offset + this.len;
        if (coords < this.offset) coords = this.offset;
        let output = (((coords - this.offset) / this.len) * (1/0.945) - 0.03);
        this.updatePosition(output * this.state.vlength);
    }

    sliderDragStart = (e) => {
        document.addEventListener("mouseup", this.sliderDragEnd);
        document.addEventListener("mousemove", this.sliderDrag);
    }

    sliderDragEnd = () => {
        document.removeEventListener("mouseup", this.sliderDragEnd);
        document.removeEventListener("mousemove", this.sliderDrag);

        this.updatePosition(Math.round(this.state.position));
    }

    updatePosition = n => {
        let outputState = this.state;
        outputState.position = n;
        let outputPercent = (n / this.state.vlength) * 94.5 + 2.5;
        outputState.renderPosition = outputPercent + "%";
        this.setState(outputState);
    }

    stringifyDates = () => {
        let out = "";
        this.props.values.forEach(value => out += (value + " "));
        return out;
    }

    render() {
        return (
            <div
                ref={this.selector}
                className="slider"
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
                                left: "100%",
                                transform: "translate(-10px,-7px)",
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
                    {this.stringifyDates()}
                    <span style={{
                        width: "100%",
                        display: "inline-block"
                    }}> </span>
                </div>
            </div>
        );
    }
}

export default Slider;
