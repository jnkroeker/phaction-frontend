import Head from "next/head"
import { Post, Category } from "@/shared/types"
import { fetchPosts, fetchCategories } from "../api/summary"
import { Grid } from "../components/Grid"

type FrontProps = {
  posts: Post[]
  categories: Category[]
}

export async function getServerSideProps() {
  const categories = await fetchCategories()
  const posts = await fetchPosts()
  return { props: { posts, categories } }
}

export default function Front({ posts, categories }: FrontProps) {
  
  return (
    <>
      <Head>
        <title>The Quantified Self App</title>
      </Head>

      <main>
        <Grid posts={posts} categories={categories}/>
      </main>
    </>
  )
}