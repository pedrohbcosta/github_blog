import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { PostListContainer } from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME
export interface IPosts {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Blog() {
  const [posts, setPosts] = useState<IPosts[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`,
        )

        console.log(response.data)
        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [posts],
  )

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      <Profile />
      <SearchInput />
      <PostListContainer>
        {posts.map((post) => (
          <PostCard key={post.number} post={post} />
        ))}
      </PostListContainer>
    </div>
  )
}
