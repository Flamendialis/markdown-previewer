import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MarkdownPreviewer from './components/MarkdownPreviewer';
import * as serviceWorker from './serviceWorker';

const initialText = 
`# Markdown Previewer
![very good|512x397,20%](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Font_Awesome_5_brands_markdown.svg/200px-Font_Awesome_5_brands_markdown.svg.png)
You can use this tool to preview the markdown for your GitHub readme files.

* Copy:

Copy your markdown text directly to the clipboard so you can paste it directly on your readme file.

* Download:

Download your markdown and then upload it to your repository.

## Put some code in your files

**Single line code** 

\`<p>Like this</p>\`

**Full blocks**

\`\`\`
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`


You can use all the features of markdown format
Check [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) all your options.

> Félix :)

`;
ReactDOM.render(
  <React.StrictMode>
    <div className="main-container">
      <div className="previewer-container">
        <MarkdownPreviewer text={initialText} fileName = 'README.md' />
      </div>
      <div className="footer">
        <p>Created by Félix Menéndez using React</p>
        <p>Powered by <a href='https://marked.js.org/' target="_blank" rel="noopener noreferrer">Marked.js</a></p>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
