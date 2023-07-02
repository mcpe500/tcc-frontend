import React, { useState } from 'react';
import Editor from '../components/editor';
import EditorInOutController from '../components/editorInOutController';
import { addIndex } from '../utils/editorFunctions';
import axios from 'axios';
import { serverURL } from '../config/env';
import { getToken } from '../utils/authentication';

const CodeEditor = () => {
    const [code, setCode] = useState('');
    const [result, setResult] = useState();
    let expected = [
        {
            expectedInput: [10],
            expectedOutput: [100]
        },
        {
            expectedInput: [101],
            expectedOutput: [100]
        }
    ]

    const runCode = async () => {
        const data = {
            source_code: code,
            language_id: 71
        }
        axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
        await axios.post(serverURL + "/api/code", data)
            .then(res => {
                console.log(res);
                setResult(res.data.output);
            })
            .catch(error => {
                console.error(error);
            });
    }

    expected = addIndex(expected);
    console.log(expected);
    return (
        <div className="code-editor">
            <pre>{result}</pre>
            <Editor code={code} setCode={setCode} />
            <EditorInOutController expected={expected} />
            <button className='run-code' onClick={runCode}>Run Code</button>
        </div>
    );
};

export default CodeEditor;
