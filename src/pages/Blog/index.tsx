import { useCallback, useEffect, useState } from 'react'
import { Loading } from '../../components/Loading'
import { api } from '../../lib/axios'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { PostListContainer } from './styles'

// const USERNAME = import.meta.env.VITE_GITHUB_USERNAME
// const REPONAME = import.meta.env.VITE_GITHUB_REPONAME
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

  const getPosts = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${query}%20repo:pedrohbcosta/github_blog`,
      )

      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <div>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PostListContainer>
            {posts.map((post) => (
              <PostCard key={post.number} post={post} />
            ))}
          </PostListContainer>
        </>
      )}
    </div>
  )
}
