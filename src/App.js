import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import LocalStorage  from './components/LocalStorage';


function App() {

  const [html, setHtml] = LocalStorage('html', '');
  const [css, setCss] = LocalStorage('css', '');
  const [js, setJs] = LocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSrcDoc(`
        <html>
          <body> ${html} </body>
          <style> ${css} </style>
          <script> ${js} </script>
        </html>
      `)
    }, 500);

    return ()=> clearTimeout(timeout);
  }, [html, css, js]);


  return (
    <Fragment>
      <div className='pane topPane'>
        <Editor
          language = 'xml'
          title = 'HTML'
          value = {html}
          onChange = {setHtml}
        />
        <Editor
          language = 'css'
          title = 'CSS'
          value = {css}
          onChange = {setCss}
        />
        <Editor
          language = 'js'
          title = 'JS'
          value = {js}
          onChange = {setJs}
        />
      </div>
      <div className='pane'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder='0'
          width='100%'
          height='100%'
        />        
      </div>
    </Fragment>
  );
}

export default App;
