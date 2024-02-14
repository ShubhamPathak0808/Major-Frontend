// added

import React, { useState, useContext } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';



const CodeEditor = ({ initialValue }) => {
  const [code, setCode] = useState(initialValue || '// Write your code here');

  return (
    <CodeMirror
      style ={{height:"80vh !important"}}
      value={code}
      onBeforeChange={(editor, data, value) => setCode(value)}
      options={{
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true
      }}
      className="code-editor"
    />
  );
};

export default CodeEditor;
