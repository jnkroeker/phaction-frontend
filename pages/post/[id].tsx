import { NextPage } from "next";
import { useSelector } from "react-redux";
import { Comments } from "@/components/Comments";
import { fetchPost } from "@/api/posts";
import { Loader } from "@/components/Loader";
import { PostBody } from "@/components/Post/PostBody";
import { fetchComments } from "@/api/comments/fetch";
import { State, store } from "@/store";
import { CommentsState, UPDATE_COMMENTS_ACTION } from "@/store/comments";
import { PostState, UPDATE_POST_ACTION } from "@/store/posts"

export const getServerSideProps = store.getServerSideProps(
    (store) =>
        async ({ params }) => {
            if (!params || typeof params.id !== "string") {
                throw new Error("Unexpected Id")
            }

            const comments = await fetchComments(params.id)
            const post = await fetchPost(params.id)

            store.dispatch({ type: UPDATE_POST_ACTION, post })
            store.dispatch({ type: UPDATE_COMMENTS_ACTION, comments })

            return null as any
        }
)

const Post: NextPage = ()  => {
    const post = useSelector<State, PostState>(({ post }) => post)
    const comments = useSelector<State, CommentsState>(({ comments }) => comments )

    if (!post) return <Loader/>
    return(
        <>
            <PostBody post={post}/>
            <Comments comments={comments} post={post.id}/>
        </>
    )  
        
}

export default Post