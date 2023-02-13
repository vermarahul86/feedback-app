import {FaTimes} from 'react-icons/fa'
//import { useState } from "react"
import Card from "./shared/Card"
import PropTypes  from 'prop-types'


function FeedbackItem({item, handleDelete}){

    /*
    const[rating, setRating] = useState(7)
    const[text, setText] = useState('This is an example of the feedback item.')
*/

    /*const handleClick = (id) => {
        console.log('delete id is ' + id)
    }*/

    return(
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={()=> handleDelete(item.id)}><FaTimes color='red'/></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )

}

FeedbackItem.propTypes = {
    item : PropTypes.object.isRequired,
}


export default FeedbackItem
