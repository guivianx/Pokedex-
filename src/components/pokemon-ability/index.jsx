import { useEffect, useState } from "react"
import { getAbilityData } from "../../fetchAPI"
import styled from "styled-components"

export const Abilities = ({ value }) => {

    const [description, setDescription] = useState('')

    useEffect(()=> {

        const fetchDescription = async () => {

            const descriptionData = await getAbilityData(value.ability.url)

            const effect = descriptionData.effect_entries.find(entry => entry.language.name === 'en')

            setDescription(effect.effect)

        }

        fetchDescription()
        
    }, [value.ability.url])    

    return (
        <>
            <H4>{value.ability.name}:</H4>
            <P>{description}</P>
        </>
    )

}

const H4 = styled.h4`
    margin: 15px 0px 10px 0px;
    &:first-letter {
        text-transform: uppercase
    }
`

const P = styled.p`
    line-height: 1.5;
    letter-spacing: 0.5px;
`
