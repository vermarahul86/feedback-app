import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from "./FeedbackItem"
//import PropTypes  from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList({handleDelete}){


    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        <p>No feedback yet</p>
    }
    
    return (<div className="feedback-list">
        {
            <AnimatePresence>
                {
                    feedback.map(
                        (itemResult) => (
                            <motion.div 
                                key={itemResult.id}
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                exit={{opacity:0}}
                            >
                                <FeedbackItem 
                                    key={itemResult.id} item={itemResult}
                                    handleDelete={handleDelete}/>
                            </motion.div>
                        )
                    )
                }
            </AnimatePresence>
        }
    </div>
    )

    /*return (<div className="feedback-list">
        {
            feedback.map(
                (itemResult) => (
                    <FeedbackItem 
                        key={itemResult.id} item={itemResult}
                        handleDelete={handleDelete}/>
                )
            )
        }
    </div>
    )*/

}
/*
FeedbackList.propTypes = {
    feedback : PropTypes.arrayOf(
        PropTypes.shape(
            {
                id : PropTypes.number.isRequired,
                text : PropTypes.string.isRequired,
                rating : PropTypes.number.isRequired,
            }
        )
    ),
}*/

export default FeedbackList