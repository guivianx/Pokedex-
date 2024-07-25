import Header from "../../components/header"
import ButtonTheme from "../../components/button-theme-toggler"
import { DetailsContent } from "../../components/pokemon-details"

import "../../components/pokemon-list/colorType.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom"


const Details =  () => {

    window.scrollTo(0, 0)

    return (
        <>
            <Header>
                <Link to='/'>
                <FontAwesomeIcon className="btn" icon={faHouse} />
                </Link>
                <ButtonTheme />
            </Header>
            
            <DetailsContent/>
        </>
    )
}

export { Details }