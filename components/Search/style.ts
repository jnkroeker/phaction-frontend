import styled from "styled-components"

export const Button = styled.button`
    border: 1;
    background-color: #fff;
    padding: 8px 20px;
    img {
        float: left;
        width:  100px;
        height: 100px;
        object-fit: cover;
    }
    &:hover {
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035),
        0 6px 35px rgba(0, 0, 0, 0.2);
        border-radius: 6px;
    }
`