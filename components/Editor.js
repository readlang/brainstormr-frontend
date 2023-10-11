import "@/styles/styles.css"


import {$getRoot, $getSelection} from 'lexical';
import {useEffect, useState, useRef} from 'react';
import exampleTheme from "@/components/ExampleTheme";

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
// import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';



// import TreeViewPlugin from "./plugins/TreeViewPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";

// import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
// import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
// import AutoLinkPlugin from "./plugins/AutoLinkPlugin";



const theme = {
  // Theme styling goes here
//   ...
}


// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}


// Catch any errors that occur during Lexical updates and log them or throw them as needed. 
// If you don't throw them, Lexical will try to recover gracefully without losing user data.
function onError(error) {
  console.error(error);
}

///** 
// When the editor changes, you can get notified via the
// OnChangePlugin!
function OnChangePlugin({ onChange }) {
    // Access the editor through the LexicalComposerContext
    const [editor] = useLexicalComposerContext();
    // Wrap our listener in useEffect to handle the teardown and avoid stale references.
    useEffect(() => {
      // most listeners return a teardown function that can be called to clean them up.
      return editor.registerUpdateListener(({editorState}) => {
        // call onChange here to pass the latest state up to the parent.
        onChange(editorState);
      });
    }, [editor, onChange]);
  
}
//*/

function RL() {
    const [editor] = useLexicalComposerContext();
    console.log(editor.getEditorState())

    return null;
}

export default function Editor() {
    const [editorState, setEditorState] = useState();
    const editorStateRef = useRef();



    console.log(editorState);

    function onChange(editorState) {
        // Call toJSON on the EditorState object, which produces a serialization safe string
        const editorStateJSON = editorState.toJSON();
        // However, we still have a JavaScript object, so we need to convert it to an actual string with JSON.stringify
        setEditorState(JSON.stringify(editorStateJSON));

    }

    const initialExampleValue = '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"this is the initial editor state that I typed into the edit box. 123456 done.","type":"text","version":1},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"This is a 2nd paragraph.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}'

  const initialConfig = {
    editorState: initialExampleValue,
    namespace: 'MyEditor',
    theme: exampleTheme,
    onError,
    nodes: [
        HeadingNode,
        ListNode,
        ListItemNode,
        QuoteNode,
        CodeNode,
        CodeHighlightNode,
        TableNode,
        TableCellNode,
        TableRowNode,
        AutoLinkNode,
        LinkNode
    ],
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
        <ToolbarPlugin />
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>Enter some text...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />

      <div>next line</div>

      {/* <RichTextPlugin /> */}

      <HistoryPlugin />
      <MyCustomAutoFocusPlugin />
      {/*  */}
      <OnChangePlugin onChange={onChange}/>
      <RL/>

      {/* <LexicalOnChangePlugin onChange={editorState => editorStateRef.current = editorState} /> */}

      <button label="Save" onPress={() => {
        if (editorStateRef.current) {
        saveContent(JSON.stringify(editorStateRef.current))
        }
        }} />

        {/* <TreeViewPlugin /> */}
          {/* <AutoFocusPlugin /> */}
          {/* <CodeHighlightPlugin /> */}
          <ListPlugin />
          <LinkPlugin />
          {/* <AutoLinkPlugin /> */}
          {/* <ListMaxIndentLevelPlugin maxDepth={7} /> */}
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />


    </LexicalComposer>
  );
}

