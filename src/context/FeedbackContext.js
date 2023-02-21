import { createContext, useEffect, useState } from "react"
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()



export const FeedbackProvider = ({children}) => {

    const[isLoading, setIsLoading] = useState(true)

    const [feedback, setFeedback] = useState([])

    useEffect(()=>{
        fetchFeedback()
    }, [])

    //Fetch Feedback from the json-server
    const fetchFeedback = async() =>{
        const response = await fetch('/feedback?_sort=id&_order=desc')
        const data  = await response.json()
        setFeedback(data)
        setIsLoading(false)
    }

    const [feedbackEdit, setFeedbackEdit] = useState({
        item : {},
        edit : false
    })

    //set item to be updated and flagup that the edit is being done, by setting it to true.
    const editFeedback = (item)=>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //delete feedback.
    const deleteFeedback = (id)=> {
        console.log('Hello')
        if(window.confirm("Are you sure?")){
            setFeedback(feedback.filter((item)=> item.id!==id))
        }
    }

    const addFeedback = async(newFeedback) => {
        
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
           body : JSON.stringify(newFeedback),
        })

        const data = await response.json()
        //newFeedback.id = uuidv4()
        setFeedback([data,...feedback])

    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id? {...item, ...updItem}: item))
    }

    return <FeedbackContext.Provider value= {{
        feedback,
        feedbackEdit, 
        isLoading,
        deleteFeedback, 
        addFeedback, 
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext