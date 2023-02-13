import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { PostListContainer } from './styles'

export function Blog() {
  return (
    <div>
      <Profile />
      <SearchInput />
      <PostListContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostListContainer>
    </div>
  )
}
