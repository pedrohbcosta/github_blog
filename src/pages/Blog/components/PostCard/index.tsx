import { IPosts } from '../..'
import { relativeDateFromNow } from '../../../../utils/formatter'
import { PostCardContainer } from './styles'

interface PostProps {
  post: IPosts
}

export function PostCard({ post }: PostProps) {
  const formattedDate = relativeDateFromNow(post.created_at)

  return (
    <PostCardContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </div>
      <p>{post.body}</p>
    </PostCardContainer>
  )
}
