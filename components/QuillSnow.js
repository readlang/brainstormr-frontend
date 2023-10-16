"use client"
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import '../styles/styles.css';

export default function QuillSnow() {

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

	/* 
	* Quill editor formats
	* See https://quilljs.com/docs/formats/
	*/

	const formats = [
		'header', 'font', 'size',
		'bold', 'italic', 'underline', 'strike', 'blockquote',
		'color', 'background', 'code', 'code-block',
		'list', 'bullet', 'indent',
		'link', 'image', 'video',
	]
	
	const [value, setValue] = useState('this is the initial state text');
	console.log(value);


	return( <>
		<ReactQuill
			theme="snow" 
			value={value} 
			onChange={setValue}
			modules={modules}
        	formats={formats}
        	// bounds={'.app'}
        	placeholder={"notes go here..."}
		/>
	</> )
}