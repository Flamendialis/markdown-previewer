import React from 'react';
import './MarkdownPreviewer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faFileDownload, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons'

var marked = require('marked');
marked.setOptions({
  breaks: true,
});



class MarkdownPreviewer extends React.Component {
    constructor(props) {
      super(props);
          this.state = {
            input: '',
            editorExpanded: false,
            previewExpanded: false
          }
    this.copyText = this.copyText.bind(this);
    this.download = this.download.bind(this);
    this.expandEditor = this.expandEditor.bind(this);
    this.expandPreview = this.expandPreview.bind(this);
    }
    expandEditor() {
      if(this.state.editorExpanded){
        document.getElementById("editor-container").classList.remove("expanded");
        document.getElementById("preview-container").classList.remove("preview-collapsed");
        this.setState({editorExpanded : false});
      }
      else{
        document.getElementById("editor-container").classList.add("expanded");
        document.getElementById("preview-container").classList.add("preview-collapsed");
        this.setState({editorExpanded : true});
      }

    }
    expandPreview() {
      if(this.state.previewExpanded){
        document.getElementById("preview-container").classList.remove("expanded");
        document.getElementById("editor-container").classList.remove("editor-collapsed");
        ;
        this.setState({previewExpanded : false});
      }
      else{
        document.getElementById("preview-container").classList.add("expanded");
        document.getElementById("editor-container").classList.add("editor-collapsed");
        this.setState({previewExpanded : true});
      }

    }
    download() {
      var text = this.state.input;
      text = text.replace(/\n/g, "\r\n");
      var blob = new Blob([text], { type: "text/plain"});
      var anchor = document.createElement("a");
      anchor.download = this.props.fileName;
      anchor.href = window.URL.createObjectURL(blob);
      anchor.target ="_blank";
      anchor.style.display = "none"; 
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }

    copyText() {
      document.querySelector("#editor").select();
      document.execCommand("copy");
      alert("Markdown copy to clipboard");
    }
    handleChange(event) {
      this.setState({input: event.target.value});
    }
    componentDidMount() {
      this.setState({input: this.props.text});
    }


    
  
    render() {
      return (
        <div className="container">
          <div id="editor-container" >
            <div className="header">
              <p>Editor</p>
              <button onClick={this.download}><FontAwesomeIcon className="icon" icon = {faFileDownload} /></button>
              <button onClick={this.copyText}><FontAwesomeIcon className="icon" icon = {faCopy} /></button>
              <button onClick={this.expandEditor} ><FontAwesomeIcon className="icon expand"icon = {!this.state.editorExpanded ? faExpand : faCompress}/></button>
            </div>
            <textarea  id="editor" className="editor" value={this.state.input} onChange = {this.handleChange.bind(this)}></textarea>   
          </div>
          <div id="preview-container" >
            <div className="header header-preview">
              <p>Preview</p>
              <button onClick={this.expandPreview}><FontAwesomeIcon className="icon expand" icon = {!this.state.previewExpanded ? faExpand : faCompress} /></button>
            </div>
            <div id="preview" className="preview" dangerouslySetInnerHTML={{__html:marked(this.state.input)}}></div>
              
          </div>
        </div> 
      );
    }
  }
  MarkdownPreviewer.defaultProps = {fileName: 'markdown.txt'}

  export default MarkdownPreviewer;