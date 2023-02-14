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
        console.log('App.js')
        console.log(newFeedback)
        setFeedback([newFeedback,...feedback])

    }

    return <FeedbackContext.Provider value= {{
        feedback, 
        deleteFeedback, 
        addFeedback, 
        editFeedback,
        feedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext