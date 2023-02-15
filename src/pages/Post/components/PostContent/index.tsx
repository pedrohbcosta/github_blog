import ReactMarkdown from 'react-markdown'
import { PostContentContainer } from './styles'

interface PostContainerProps {
  content: string
}

export function PostContent({ content }: PostContainerProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown children={content} />
    </PostContentContainer>
  )
}
