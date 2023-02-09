import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm(){

    const[text, setText] = useState('')
    const[btnDisbaled, setBtnDisbaled] = useState(true)
    const[message, setMessage] = useState('')
    

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

    return(
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                {/* @todo - rating select component.*/}
                <div className="input-group">
                    <input  onChange={handleTextChange} 
                            type="text" 
                            placeholder="Write a review" 
                            value={text}/>
                    <Button type='submit' isDisabled={btnDisbaled}>Submit</Button>
                </div>
                {message && <div classname='message'>{message}</div>}
            </form>
        </Card>

    )
}

export default FeedbackForm