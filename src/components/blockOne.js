import React from 'react';
import { Spring } from "react-spring/renderprops-universal";

function BlockOne(props) {
    return (
        <Spring
            from={{opacity: 0}}
            to={{opacity: 1}}
        >
            {
                props => {
                    <div style={props}>
                        <div style={blockOne}>
                            <h1>Block 1</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem culpa cupiditate
                                esse et, eum hic
                                itaque iusto maiores nemo neque nulla placeat qui quidem vitae. Ducimus eius iste
                                optio.</p>
                        </div>
                    </div>
                }
            }
        </Spring>
    );
}

const blockOne = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
};

export default BlockOne;