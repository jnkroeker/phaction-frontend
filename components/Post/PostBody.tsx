import { MediaPlayer, MediaPlayerClass } from "dashjs"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Post } from "../../shared/types"
import { Breadcrumbs } from "../Breadcrumbs"
import { Title, Figure, Content, Meta } from "./PostBodyStyle"

type PostBodyProps = {
  post: Post
}

export const PostBody = ({ post }: PostBodyProps) => {

  const video = useRef<HTMLVideoElement>(null)
  
  useEffect(() => {
    if (video.current) {
        const src = "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd"; //"http://0.0.0.0:8080/video"
        const element = video.current;
        const player: MediaPlayerClass = MediaPlayer().create();
        player.initialize(element, src, true)
    }
  },[])

  return (
    <div>
      <Breadcrumbs post={post}/>
      <Title>{post.title}</Title>
      <Figure>
        <video id='video-player' ref={video} controls></video>
      </Figure>

      <Content dangerouslySetInnerHTML={{ __html: post.content }} />

      <Meta>
        <span>{post.date}</span>
        <span>&middot;</span>
        <Link href={`/category/${post.category}`}>
          {post.category}
        </Link>
        <span>&middot;</span>
        <a href={post.source}>Source</a>
      </Meta>
    </div>
  )
}
