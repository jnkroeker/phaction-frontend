import styled from "styled-components"

export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    height: 50px;
    padding: 7px 0;
    
    background-color: white;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    `

export const Logo = styled.h1`
    font-size: 1.6rem;
    font-family: Georgia, serif;
    
    a {
        text-decoration: none;
        color: black;
    }
    
    a:hover {
        color: yellow;
    }`

export const Form = styled.form`
button {
    border: 0;
    font-size: 1rem;
    padding: 8px 20px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035),
      0 4px 25px rgba(0, 0, 0, 0.07);
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035),
        0 6px 35px rgba(0, 0, 0, 0.2);
    }
  }`