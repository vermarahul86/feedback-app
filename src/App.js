import {v4 as uuidv4} from 'uuid'
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import { useState } from "react"
import FeedbackData from './data/FeedbackData'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App(){

    const[feedbackState, setFeedbackState] = useState(FeedbackData)

    const deleteFeedback = (id)=> {
        if(window.confirm("Are you sure?")){
            setFeedbackState(feedbackState.filter((item)=> item.id!==id))
        }
    }

    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        console.log('App.js')
        console.log(newFeedback)
        setFeedbackState([newFeedback,...feedbackState])

    }
return(
    <>
        <Header/>
        <div className="container">
            <FeedbackForm handleAdd={addFeedback}/>
            <FeedbackStats feedback={feedbackState}/>
            <FeedbackList feedback={feedbackState} handleDelete={deleteFeedback}/>
        </div>
    </>
)

}

export default App