import { data } from "../../fetchAPI"
import { Abilities } from "../pokemon-ability/"

import "../../components/pokemon-list/colorType.css"

import { ThemeContext } from "../../contexts/themeContext"
import { useLocation } from "react-router-dom"
import { useContext } from "react"

import styled from "styled-components"
import css from '@styled-system/css'


const DetailsContent = () => {

    const location = useLocation()

    const id = location.state.id

    const { theme } = useContext(ThemeContext)

    // estou acessando o array data pelo id do pokemon selecionado, porém o id do pokemon selecionado não bate com o indice do array, dai tenho que subtrair 1 para acessar os detalhes do pokemon que foi clicado na home, por isso o - 1 

    return (
        <>
            <Main key={data[id - 1].id} style={{ backgroundColor: theme.background }}>

                <Div>
                    <img src={data[id - 1].image} alt={data[id - 1].name} />

                    <Name style={{ color: theme.color}}>{data[id - 1].name ?? ''}</Name>

                    <DivType>
                        {data[id - 1].type1 ? <P className={data[id - 1].type1}>{data[id - 1].type1 ?? <></>}</P> : ''}

                        {data[id - 1].type2 ? <P className={data[id - 1].type2}>{data[id - 1].type2 ?? <></>}</P> : ''}
                    </DivType>

                </Div>

                <Section>

                    <H3>ABILITIES</H3>
                    {data[id - 1].abilities.map((ability, index) => <Abilities key={index} value={ability}/>)}

                    <H3>WEIGHT</H3>
                    <p>{data[id - 1].weight / 10} kg</p>
                    
                    <H3>HEIGHT</H3>
                    <PMargim>{data[id - 1].height / 10} m</PMargim>
                </Section>

            </Main>

            <MainMoviSet style={{ backgroundColor: theme.background }}>
                <h2 style={{color: theme.color}}>MOVES</h2>
                <Ul >
                    {data[id - 1].moves ? data[id - 1].moves.map((move, index) => <Li key={index}>{move.move.name}</Li>) : ''}
                </Ul>
            </MainMoviSet>
        </>
    )
}

export { DetailsContent }

const Main = styled.main(
    css({
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        margin: '50px',
        borderRadius: '16px',
        padding: '50px',
        transition: 'all 0.3s ease',

        '@media screen and (max-width: 1530px)': {
            flexDirection: 'column',
            gap: '0px',
        },

        '@media screen and (max-width: 590px)': {
            margin: '20px',
            padding: ' 50px 20px',
        }
    })
)

const Div = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 5px;
    flex-direction: column;
`

const DivType = styled.div`
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

const Name = styled.h1`
    margin: 10px 0px;
    &::first-letter {
        text-transform: uppercase;
    }
`

const MainMoviSet = styled.main(
    css({
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        margin: '50px',
        flexDirection: 'column',
        borderRadius: '16px',
        padding: '50px',
        transition: 'all 0.3s ease',


        '@media screen and (max-width: 590px)': {
            margin: '20px',
            padding: ' 50px 20px',
        }
    })
)


const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`

const Li = styled.li`
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    flex: 0 1 auto;
    
`

const Section = styled.section(
    css({
        display: 'flex',
        flexDirection: 'column',
        width: '85%',
        backgroundColor: '#30a7d7',
        borderRadius:  '16px',
        padding: '20px',

        '@media screen and (max-width: 1530px)': {
            width: '100%',
        }

    })
)


const H3 = styled.h3`
    margin: 20px 0px 5px 0px;
    color: #fff;
`

const PMargim = styled.p(
    css({
        marginBottom: '20px',
    })
)