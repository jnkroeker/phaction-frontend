import { fetchTasks } from "@/api/tasks/fetch"
import Link from "next/link"
import React, { FormEvent } from "react"
// import { submitTask } from "@/api/tasks/submit"
import { Center } from "../Center"
import { Container, Logo } from "./style"
import { Form, Row } from "./style"

async function submitTasks(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    /* TODO: SET UP A POST HANDLER IN NGINX TO HIT KHYME-API POST ENDPOINT */
    // const response = await submitTask("s3://k8s-communications-test/object.mp4")
    // const task = await response.json()

    const tasks = await fetchTasks()

    console.log(tasks)

}

export const Header = () => {
    return (
        <Container>
            <Center>
                <Row>
                    <Logo>
                        <Link href="/">
                            Phaction
                        </Link>
                    </Logo>
                    <Form onSubmit={submitTasks}><button>Get Tasks</button></Form>
                    <Form><Link href="/upload"><button>Upload Files</button></Link></Form>
                </Row>
            </Center>
        </Container>
    )
}