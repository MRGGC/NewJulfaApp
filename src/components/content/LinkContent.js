import React  from 'react';

export default function LinkContent({ content }) {
    return (
        <div className={"linkPart linkContent"}>
            <span className={"linkContentText"}>{ content }</span>
        </div>
    );
}
