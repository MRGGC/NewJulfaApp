import React from 'react';
import ReactQuill from 'react-quill';
import '../../../node_modules/react-quill/dist/quill.snow.css';

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        dispatch: this.props.dispatch,
        current: this.props.current,
        content: this.props.content,
    };

    componentWillReceiveProps(nextProps) {
        if (this.state.content !== nextProps.content || this.state.current !== nextProps.current) {
            this.setState({
                current: nextProps.current,
                content: nextProps.content,
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.current !== this.state.current) {
            this.state.dispatch({ type: 'EDIT_ARTICLE', content: prevState.content, id: prevState.current });
        }
    }

    handleChange = (val) => {
        this.setState({
            content: val,
        })
    };

    modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean']
        ],
    };

    formats = [
        'bold', 'italic', 'underline', 'strike',
        'blockquote', 'code-block',
        'list',
        'script',
        'indent',
        'direction',
        'size',
        'header',
        'color', 'background',
        'font',
        'align',
        'clean',
    ];

    render() {
        return (
            <ReactQuill
                theme={"snow"}
                modules={this.modules}
                formats={this.formats}
                className={"editorPanel"}
                value={this.state.content}
                onChange={this.handleChange}
            />
        );
    }
}

export default Editor;
