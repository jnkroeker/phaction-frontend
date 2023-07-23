import React, {FormEvent ,useState} from 'react'
import { Button, Container, Form, Input, Label, Link } from './style';

type loginProps = {
    onFormSwitch: (name: string) => void
}

export const Login = ({onFormSwitch}: loginProps) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(email)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="email">email</Label>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@host.com" id="email" name="email"/>
                <Label htmlFor="pass">password</Label>
                <Input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="pass" name="pass"/>
                <Button type="submit">Log In</Button>
            </Form>
            <Link onClick={() => onFormSwitch('register')}>Register</Link>
        </Container>
    )
}