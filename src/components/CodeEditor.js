// added by shubham
import React, { useState, useContext } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { CodeContext } from './contextAPI/codeContext';



const CodeEditor = ({ initialValue }) => {
  // const [code, setCode] = useState(initialValue || '// Write your code here');
  const { coding, setCoding } = useContext(CodeContext);      //new added part

  return (
    <CodeMirror
      style ={{height:"80vh !important"}}
      value={coding}
      onBeforeChange={(editor, data, value) => setCoding(value)}
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
