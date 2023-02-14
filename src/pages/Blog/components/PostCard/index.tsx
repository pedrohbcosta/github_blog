import { IPosts } from '../..'
import { PostCardContainer } from './styles'

interface PostProps {
  post: IPosts
}

export function PostCard({ post }: PostProps) {
  return (
    <PostCardContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{post.created_at}</span>
      </div>
      <p>{post.body}</p>
    </PostCardContainer>
  )
}
