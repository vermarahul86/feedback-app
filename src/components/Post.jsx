import {useParams, Navigate, useNavigate, Routes, Route} from 'react-router-dom'

function Post(){

    const params = useParams()
    const status = 200

    const navigate = useNavigate()

    const onClick = () =>{
        console.log('Hello buddy')
        navigate('/about')
    }

    if(status === 404){
        return <Navigate to='/notfound'/>
    }
    return(

        <div>
            <h1>POST</h1>
            <button onClick={onClick}>Click it</button>


            {/*
            <h1>Post : {params.id}</h1>
            Below can only be seen by using:
            http://localhost:3000/post/show
            */}
            <Routes>
                <Route path='/show' element={<h1>Hello world</h1>}>

                </Route>
            </Routes>
            
        </div>
    )
}

export default Post