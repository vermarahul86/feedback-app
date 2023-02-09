
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
return(
    <>
        <Header/>
        <div className="container">
            <FeedbackForm/>
            <FeedbackStats feedback={feedbackState}/>
            <FeedbackList feedback={feedbackState} handleDelete={deleteFeedback}/>
        </div>
    </>
)

}

export default App