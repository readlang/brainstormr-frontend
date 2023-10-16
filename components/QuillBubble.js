"use client"
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

import '../styles/styles.css';

export default function QuillBubble() {

	const modules = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike', 'blockquote', {size: []}],
			[	{'list': 'ordered'}, 
				{'list': 'bullet'}, 
				{'indent': '-1'}, 
				{'indent': '+1'},
			],
			['link' ],
			[{color: ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'magenta', ]}],
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
		'list', 'bullet', 'indent',
		'link', 'image', 'video',
		'color'
	]
	
	const [value, setValue] = useState('this is the initial state text');
	// console.log(value);


	return( <>
		<ReactQuill className='mt-4'
			theme="bubble" 
			value={value} 
			onChange={setValue}
			modules={modules}
        	formats={formats}
        	
        	placeholder={"notes go here..."}
		/>
	</>
	)
}