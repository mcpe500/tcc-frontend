import React, { useState } from 'react';
import Editor from '../components/editor';

const CodeEditor = () => {
      const [code, setCode] = useState('');
    
    return (
        <div className="code-editor">
            <Editor code={code} setCode={setCode}/>
        </div>
    );
};

export default CodeEditor;
