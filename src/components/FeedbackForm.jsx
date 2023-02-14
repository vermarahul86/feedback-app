import { useEffect, useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm(/*{handleAdd}*/){

    const[text, setText] = useState('')
    const[btnDisbaled, setBtnDisbaled] = useState(true)
    const[message, setMessage] = useState('')
    const[rating, setRating] = useState(10)

    const{addFeedback, feedbackEdit} = useContext(FeedbackContext)

    useEffect(()=>{
           if(feedbackEdit.edit === true){
            setBtnDisbaled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
           }
    }, [feedbackEdit])
    

    const handleTextChange = (e) => {
        if(text===''){
            setBtnDisbaled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <=10){
            setBtnDisbaled(true)
            setMessage('Text must be at least 10 characters.')
        }
        else{
            setMessage(null)
            setBtnDisbaled(false)
            
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback = {
                text, rating
            }

            //handleAdd(newFeedback)
            addFeedback(newFeedback)

            setText('')
        }
    }

    return(
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input  onChange={handleTextChange} 
                            type="text" 
                            placeholder="Write a review" 
                            value={text}/>
                    <Button type='submit' isDisabled={btnDisbaled}>Submit</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>

    )
}

export default FeedbackForm