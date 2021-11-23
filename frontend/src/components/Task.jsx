import React,{useState} from 'react'

export default function Task(props) {
	const [completed, setCompleted] = useState(false)
	return (
		<li onClick={(e)=>{setCompleted(!completed);e.stopPropagation();}} className={`${completed?'completed':null}`}>
			<span onClick={(e)=>{props.deleteTask(props.id);e.stopPropagation()}}>
				<i className="fas fa-trash"></i>
			</span>
				{props.text}
		</li>
	)
}