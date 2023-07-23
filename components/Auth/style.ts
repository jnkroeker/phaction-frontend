import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  background-image: linear-gradient(79deg, #fcfced, #fcedfc 48%)
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`

export const Label = styled.label`
  text-align: left;
  padding: 0.25rem 0;
`

export const Input = styled.input`
  margin: 0.5rem 0;
  padding: 1rem;
  border: none;
  border-radius: 10px;
`

export const Button = styled.button`
  border: none;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
`

export const Link = styled.button`
  border: none;
  background: none;
  color: white;
  text-decoration: underline;
`