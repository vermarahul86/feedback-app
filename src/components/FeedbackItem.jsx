import {FaTimes, FaEdit} from 'react-icons/fa'
//import { useState } from "react"
import Card from "./shared/Card"
import PropTypes  from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackItem({item}){

    /*
    const[rating, setRating] = useState(7)
    const[text, setText] = useState('This is an example of the feedback item.')
*/

    /*const handleClick = (id) => {
        console.log('delete id is ' + id)
    }*/
    const{deleteFeedback, editFeedback} = useContext(FeedbackContext)

    return(
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={() => deleteFeedback(item.id)}><FaTimes color='red'/></button>
            <button className='edit' onClick={() => editFeedback(item)}>
                <FaEdit color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )

}

FeedbackItem.propTypes = {
    item : PropTypes.object.isRequired,
}


export default FeedbackItem
