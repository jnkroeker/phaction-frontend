import Link from "next/link"
import React, { FormEvent } from "react"
import { submitTask } from "@/api/tasks/submit"
import { Center } from "../Center"
import { Container, Logo } from "./style"
import { Form } from "./style"

async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const response = await submitTask("s3://k8s-communications-test/object.mp4")
    const task = await response.json()

    console.log(task)

  }

export const Header = () => {
    return (
        <Container>
            <Center>
                <Logo>
                    <Link href="/">
                        Phaction
                    </Link>
                </Logo>
                <Form onSubmit={submit}><button>Submit Task</button></Form>
            </Center>
        </Container>
    )
}