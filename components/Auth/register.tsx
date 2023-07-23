import React, { FormEvent, useState } from 'react'
import { Button, Container, Form, Input, Label, Link } from './style';

type registerProps = {
    onFormSwitch: (name: string) => void
}

export const Register = ({onFormSwitch}: registerProps) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [usrname, setUsrname] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(email)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="usrname">username</Label>
                <Input value={usrname} onChange={(e) => setEmail(e.target.value)} type="string" placeholder='username' id="usrname" name="usrname"/>
                <Label htmlFor="email">email</Label>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@host.com" id="email" name="email"/>
                <Label htmlFor="pass">password</Label>
                <Input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="************" id="pass" name="pass"/>
                <Button type="submit">Submit</Button>
            </Form>
            <Link onClick={() => onFormSwitch('login')}>Login</Link>
        </Container>
    )
}