import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import { useState } from "react"
import FeedbackData from './data/FeedbackData'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

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
    <Router>
        <Header/>
        <div className="container">
            <Routes>
            <Route exact path='/' element={
                <>
                    <FeedbackForm handleAdd={addFeedback}/>
                    <FeedbackStats feedback={feedbackState}/>
                    <FeedbackList feedback={feedbackState} handleDelete={deleteFeedback}/>
                </>
            }>
                
            </Route>
                <Route path='/about' element={<AboutPage />}/>
            </Routes>
           <AboutIconLink/>
        </div>
    </Router>
    
    )

}
export default App