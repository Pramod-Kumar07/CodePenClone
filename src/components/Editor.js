import React, { useState } from 'react';
import './Editor.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
import { Controlled } from 'react-codemirror2';
import { MdOutlineCloseFullscreen } from 'react-icons/md';
import { FaExpandAlt } from 'react-icons/fa';

function Editor(props) {

    const{
        language,
        title,
        value,
        onChange
    } = props;

    const [open, setOpen] = useState(true);

    function handleChange(editor, data, value){
        onChange(value)
    }

  return (
    <div className={`editorContainer ${open ? '' : 'close'}`}>
        <div className='editorTitle'>
            {title}
            <button
                className='btn'
                type = 'button'
                onClick = {() => setOpen(!open)}
            >
                {open ? <FaExpandAlt/> : <MdOutlineCloseFullscreen/>}
            </button>
        </div>
        <Controlled
            onBeforeChange={handleChange}
            value={value}
            className='codeMirrorWrapper'
            options={{
                lineWrapping : true,
                lint : true,
                mode : language,
                theme : 'material',
                lineNumbers : true
            }}
        />
    </div>
  )
}

export default Editor;