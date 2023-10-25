"use client"
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.bubble.css';
import './styles.css';

export default function QuillBubble({currentText, setCurrentText}) {

	const modules = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike'],
		],
		clipboard: {
			// toggle to add extra line breaks when pasting HTML:
			matchVisual: false,
		}
	}

	const formats = [
		'header', 'font', 'size',
		'bold', 'italic', 'underline', 'strike', 'blockquote',
		'list', 'bullet', 'indent',
		'link', 'image', 'video',
		'color'
	]

	return( 
		<ReactQuill className='quill-bubble-comp h-full overflow-y-scroll '
			name = "editor"
			theme="bubble" 
			value={currentText} 
			onChange={setCurrentText}
			modules={modules}
			formats={formats}
			placeholder={"notes go here..."}
		/>
	)
}