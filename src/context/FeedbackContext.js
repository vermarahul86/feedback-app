import { createContext, useState } from "react"
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()



export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState(
        [
            {
                id : 1,
                text : 'This is feedback item 1',
                rating : 10
            },
            {
                id : 2,
                text : 'This is feedback item 2',
                rating : 8
            },
            {
                id : 3,
                text : 'This is feedback item 3',
                rating : 5
            }
        ]
    )

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

    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])

    }

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id? {...item, ...updItem}: item))
    }

    return <FeedbackContext.Provider value= {{
        feedback,
        feedbackEdit, 
        deleteFeedback, 
        addFeedback, 
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext