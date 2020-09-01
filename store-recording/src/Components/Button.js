import styled from 'styled-components'

export const ButtonContainer = styled.button
`text-transform:capitalize;
font-size:1.4rem;
color:white;
border:1.5rem;
border-color-white;
background:${
    prop=>prop.cart? "blue": "orange"
}
`