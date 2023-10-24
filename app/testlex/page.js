"use client"
import QuillBubble from "@/components/QuillBubble"
// import Editor from "@/components/Editor"
import QuillSnow from "@/components/QuillSnow"

import "@/app/testlex/trialstyle.css"


export default function Page() {
	return(
		<>
			<QuillSnow/>
			<QuillBubble/>		
			another test

			<div className="relative-wrap relative">
				<div className="overflow-wrap">      
					<div className="respect-overflow relative"> respect </div>
					<div className="fuck-overflow absolute"> no respect </div>
				</div>
			</div>

		</>
	)
}