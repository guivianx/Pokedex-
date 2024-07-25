import styled from "styled-components"

const scrollToBotton = () => {

    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    })

}

export const ButtonShowMore = ({limit, setLimit}) => {

    return <Button onClick={() => {
        
        setLimit(limit + 10);
   
        setTimeout(() => {
            scrollToBotton()
        }, 400)}}
    
    >Show More</Button> 

}

export const ButtonShowAll = ({limit, setLimit}) => {
    
    return <Button onClick={() => setLimit(limit + 432)}>Show All</Button> 
}

const Button = styled.button`
    box-shadow: 0px 10px 0px rgb(197, 75, 54);
    background-color: tomato;
    border-radius: 50px;
    font-weight: 700;
    transition: 0.1s;
    cursor: pointer;
    color: #fff;
    padding: 25px 50px;
    margin: 20px 0px;
    &:active {
    box-shadow: none;
    transform: translateY(6px);
    }
`