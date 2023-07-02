import React, { useState } from 'react';
import { authenticated, logout } from '../utils/authentication';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

import { javascript } from '@codemirror/lang-javascript';

const Editor = ({ code,setCode }) => {
    //   const [code, setCode] = useState('console.log("Hello, world!");');
    const options = {
        theme: vscodeDark,
        extraKeys: {
            Tab: false, // Disable the default behavior of Tab key
        },
        lineNumbers: true,
        autofocus: true,
        mode: javascript(),
    };

    return (
        <>
            <CodeMirror value={code} options={options} onChange={setCode} />
            {code}
        </>
    );
};

export default Editor;
