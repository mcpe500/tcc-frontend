import React, { useState } from 'react';

const EditorInOutController = ({ expected }) => {
    const [selectedTestCase, setSelectedTestCase] = useState(0);

    const changeToTestCase = (index) => {
        setSelectedTestCase(index);
    };

    return (
        <>
            <h3>Test Cases</h3>
            {expected.map(e => {
                return (
                    <button onClick={() => changeToTestCase(e.index)}>{e.index}</button>)
            })}
            {expected.map((e) => {
                const { expectedInput, expectedOutput,index } = e;
                if (selectedTestCase !== null && index !== selectedTestCase) {
                    return null; // Skip rendering if not the selected test case
                }
                return (
                    <div className={`test-case ${selectedTestCase === index ? 'selected' : ''}`} key={e.id}>
                        <h4>Input:</h4>
                        <div className="code-section">{expectedInput}</div>
                        <h4>Output:</h4>
                        <div className="code-section">{expectedOutput}</div>
                    </div>
                );
            })}
        </>
    );
};

export default EditorInOutController;
