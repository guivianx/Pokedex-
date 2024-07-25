import { ThemeContext } from "../../contexts/themeContext"
import React, { useContext } from "react"
import styled from "styled-components"
import css from '@styled-system/css'

import pokemonLogo from "../../img/pokemon-logo.png"

const Header = ({ children }) => {

    const { theme } = useContext(ThemeContext)

    return (
        <HeaderContainer style={{ backgroundColor: theme.background}}>
            <ImgPokemon src={pokemonLogo} alt="logo" />
            <Div>
                {children}
            </Div>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.header(
    css({
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
        padding: '10px 40px 10px 40px',
        gap: '30px',
        transition: 'all 0.3s ease',

        '@media screen and ( max-width: 530px )': {

            padding: '0px',
            gap: '0px',
            margin: '0px auto',

        },

    })
)

const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0px 15px 0px 15px;
`

const ImgPokemon = styled.img`
    width: 200px;
    height: 100px;
`