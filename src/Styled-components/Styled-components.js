import React from 'react'
import styled from 'styled-components'



const DivComponent = styled.div`
font-weight: 500;
color: lightcoral;
font-size: 2rem;
`;

const SubmitButton = styled.button`
color: ${props => props.myAlt ? 'blue' : 'brown'};
background-color: ${props => props.myAlt ? 'lightgreen' : 'salmon'};
width: 5rem;
height: 2rem;
margin: 2rem;
cursor:pointer;
&:hover{
    color: white;
    background-color: ${props => props.myAlt ? 'green' : 'red'};
}
`
const StyleComponent = props => {

    return (
        <DivComponent>
            <span>Sai</span>
            <span>Ganesh</span>
            <SubmitButton>Submit</SubmitButton>
            <SubmitButton myAlt={props.buttonColor}>Submit</SubmitButton>

        </DivComponent>
    )
}




export default StyleComponent