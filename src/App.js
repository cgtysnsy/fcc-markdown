import "./App.css";
import { useState } from "react";
import { marked } from "marked";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

/* a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text */

function App() {
  const [text, setText] = useState(`
  # This is a sub-heading...
## And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `);
  const [editorMaximized, setEditorMaximized] = useState(false);
  const [previewMaximized, setpreviewMaximized] = useState(false);

  marked.setOptions({
    breaks: true,
  });

  const classes = editorMaximized
    ? ["editorWrap maximized", "previewWrap hide", "fa fa-compress"]
    : previewMaximized
    ? ["editorWrap hide", "previewWrap maximized", "fa fa-compress"]
    : ["editorWrap", "previewWrap", "fa fa-arrows-alt"];

  const handleEditorMaximize = () => {
    console.log("editor click");
    setEditorMaximized(!editorMaximized);
  };
  const handlePreviewMaximize = () => {
    console.log("preview click");
    setpreviewMaximized(!previewMaximized);
  };
  return (
    <div>
      <div className={classes[0]}>
        <div
          className="toolbar"
          icon={classes[2]}
          onClick={handleEditorMaximize}
          text="Editor"
        >
          <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
          Editor
          <i className="fa fa-arrows-alt"></i>
        </div>
        <textarea
          id="editor"
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
        ></textarea>
      </div>
      <div className="converter"></div>

      <div className={classes[1]}>
        <div
          className="toolbar"
          icon={classes[2]}
          onClick={handlePreviewMaximize}
          text="Previewer"
        >
          <i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i>
          Previewer
          <i className={classes[2]}></i>
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
