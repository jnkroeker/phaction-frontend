import { useRouter } from "next/router";

const Post = () => {

    // useRouter hook provides access to the router object
    // pathname is the path of the page in the pages directory
    // query is a query string containing the id of the current post,
    // later to be used for data loading

    const { pathname, query } = useRouter()

    return (
        <div>
            Pathname: {pathname};<br/>
            Post Id: {query.id}
        </div>
    )
}

export default Post