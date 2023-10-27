"use client"
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import './styles.css';

export default function QuillSnow({currentText, setCurrentText}) {
	const modules = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{'header': [1,2,3,4,5,6,7]}, { 'font': [] }, {size: []}],
			[{color: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'magenta', ]}, {background: [false, 'red', 'orange', 'yellow', 'green', 'blue', 'magenta', ]}],
			['code-block'],
			[	{'list': 'ordered'}, 
				{'list': 'bullet'}, 
				{'indent': '-1'}, 
				{'indent': '+1'},
			],
			['link', 'image', 'video'],
			['clean']
		],
		clipboard: {
			// toggle to add extra line breaks when pasting HTML:
			matchVisual: false,
		}
	}

	const formats = [
		'header', 'font', 'size',
		'bold', 'italic', 'underline', 'strike', 'blockquote',
		'color', 'background', 'code', 'code-block',
		'list', 'bullet', 'indent',
		'link', 'image', 'video',
	]
	
	return( 
		<ReactQuill
			theme="snow" 
			value={currentText} 
			onChange={setCurrentText}
			modules={modules}
        	formats={formats}
        	placeholder={"notes go here..."}
		/>
	)
}