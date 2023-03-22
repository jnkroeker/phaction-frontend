import Link from "next/link"
import { Post } from "../../shared/types"
import { Container } from "./style"

type BreadcrumbsProps = {
  post: Post
}

export const Breadcrumbs = ({ post }: BreadcrumbsProps) => {
  return (
    <Container>
      <Link href="/">
        Front
      </Link>
      <span>▸</span>
      <Link href={`/category/${post.category}`}>
        {post.category}
      </Link>
    </Container>
  )
}
