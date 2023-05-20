import Head from "next/head"
import { Option, Post, Category } from "@/shared/types"
import { fetchPosts, fetchCategories } from "../api/summary"
import { Grid } from "../components/Grid"

type FrontProps = {
  posts: Post[]
  categories: Category[]
  options: Option[]
}

export async function getServerSideProps() {
  const posts = await fetchPosts()
  const options = [{label: 'CrossFit', value: 'crossfit'}, {label: 'Cycling', value: 'cycling'}, {label: 'Skiing', value: 'skiing'}]
  const categories = await fetchCategories()
  return { props: { posts, categories, options } }
}

export default function Front({ posts, categories, options }: FrontProps) {
  
  return (
    <>
      <Head>
        <title>The Quantified Self App</title>
      </Head>

      <main>
        <Grid posts={posts} categories={categories} options={options}/>
      </main>
    </>
  )
}