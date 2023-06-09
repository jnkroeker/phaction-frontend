import Link from "next/link"
import { PostCard } from "../Post/PostCard";
import { Post } from "../../shared/types";
import { Grid, Title, MoreLink } from "./style";

type SectionProps = {
    title: string
    posts: Post[]
    isCompact?: boolean
}

export const Section = ({title, posts, isCompact=false}: SectionProps) => {
    return (
        <section>
            <Title>{title}</Title>
            <Grid>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </Grid>

            {isCompact && (
                <Link href={`/category/${title}`} passHref>
                    <MoreLink>More in {title}</MoreLink>
                </Link>
            )}
        </section>
    )
}