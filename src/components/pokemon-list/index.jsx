import { ThemeContext } from "../../contexts/themeContext"
import { ItemsContext } from "../../contexts/itemContexHome"


import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from "styled-components"
import css from '@styled-system/css'


import { ButtonShowMore, ButtonShowAll } from "../button-content"
import { data } from "../../fetchAPI"

import './colorType.css'
import './animation.css'


const List = () => {

    const { theme } = useContext(ThemeContext)
    
    const [limit, setLimit] = useContext(ItemsContext)
    
    const limitedData = data.slice(0, limit)

    return (
        <>

            <TransitionGroup component={Ul} >

                {limitedData.map((pokemon) => {

                    const nodeRef = React.createRef(); //(Ln 131)

                    return (

                        <CSSTransition key={pokemon.id} timeout={500} classNames={'fade'} nodeRef={nodeRef}>

                            <Link to='/details' state={{ id: pokemon.id }} key={pokemon.id} >

                                <Li ref={nodeRef} id={pokemon.id} style={{ backgroundColor: theme.background }}>

                                    <PId style={{ color: theme.color }}>N° {pokemon.id}</PId>

                                    <Img src={pokemon.image} alt={pokemon.name} />

                                    <Pname style={{ color: theme.color }}>{pokemon.name ?? ''}</Pname>

                                    <Div>
                                        {pokemon.type1 ? <P className={pokemon.type1}>{pokemon.type1 ?? <></>}</P> : ''}
                                        
                                        {pokemon.type2 ? <P className={pokemon.type2}>{pokemon.type2 ?? <></>}</P> : ''}
                                    </Div>

                                </Li>

                            </Link>
                        </CSSTransition>
                    )
                })}

            </TransitionGroup>


            <DivButtons >
                {limitedData.length >= 442 ? '' : <ButtonShowMore limit={limit} setLimit={setLimit} />}
                {limitedData.length >= 442 ? '' : <ButtonShowAll limit={limit} setLimit={setLimit} />}
            </DivButtons>

        </>
    )
}

export default List

const Ul = styled.ul(
    css({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
        listStyle: 'none',
        margin: '20px',

        '@media screen and (max-width: 340px)': {
            margin: '20px 5px',
        }
    })
)


const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 16px;
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.03);
        opacity: 0.9;
    }
`

const PId = styled.p`
    font-size: 13px;
    margin-top: 5px;
    font-weight: 700;
          
    `
const Img = styled.img`
    width: 200px;
`

const Pname = styled.p`
    &::first-letter {
        text-transform: uppercase;
    }
    font-size: 18px;
    margin: 20px 10px 10px 10px;
`

const Div = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 5px;

`
const P = styled.p`
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
`

const DivButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
 
`



// const nodeRef = React.createRef() - Função que cria um relacionamento entre elementos para acessarmos diretamente um elemento DOM ou um componente React

// utilizei nesse caso para a funcionalidade das animações de transição

// o nodeRef permite que cssTransition manipule elemento DOM diretamente evitando o uso do 'findDOMNode' que esta ficando obsoleto

// usei o react-transition-group para controlar as animações e cada elemento que faz parte dessa transição precisa de uma referencia para a biblioteca aplique corretamente as classes de transição durante entrada/saída.