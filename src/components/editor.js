import React from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

import { javascript } from '@codemirror/lang-javascript';

const Editor = ({ code, setCode }) => {
    const options = {
        theme: vscodeDark,
        extraKeys: {
            Tab: false, // Disable the default behavior of Tab key
        },
        lineNumbers: true,
        autofocus: true,
        mode: javascript(),
    };

    const handleChange = (value) => {
        setCode(value);
        // console.log(code)
    };

    return (
        <>
            <CodeMirror value={code} options={options} onChange={handleChange} />
        </>
    );
};

export default Editor;
