import fetch from "node-fetch"
import { Post, Category } from "@/shared/types"
import { config } from "./config"

// When Next builds a project, it runs outside of the browser environment, where it
// does not have access to the fetch() function. The node-fetch package provides the
// fetch() function in the Node environment.

export async function fetchPosts(): Promise<Post[]> {
    const res = await fetch(`${config.baseUrl}/posts`)
    return await res.json() as Promise<Post[]>
}

export async function fetchCategories(): Promise<Category[]> {
    const res = await fetch(`${config.baseUrl}/categories`)
    return await res.json() as Promise<Category[]>
}