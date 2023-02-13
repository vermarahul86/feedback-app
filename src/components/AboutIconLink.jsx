import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function AboutIconLink(){

    return(
        <div className="about-link">
            {/*
            <a href ='/about'>
                <FaQuestion sice={30}/>
            </a>
            This causes refresh in browser instead Link is used.
            Important, any internal linking should be done via Link and not Anchoring.
            Everything happens in the client side.
            */}
            <Link to={
                {
                    pathname: '/about',
                    search : '?sort=name',
                    hash: '#hello',
                }
            }>
                <FaQuestion sice={30}/>
            </Link>
        </div>
    )

}

export default AboutIconLink