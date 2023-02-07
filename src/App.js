
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import { useState } from "react"
import FeedbackData from './data/FeedbackData'

function App(){

    const[feedbackState, setFeedbackState] = useState(FeedbackData)

return(
    <>
        <Header/>
        <div className="container">
           <FeedbackList feedback={feedbackState}/>
        </div>
    </>
)

}

export default App