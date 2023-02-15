import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { IPosts } from '../Blog'
import { PostContent } from './components/PostContent'
import { PostHeader } from './components/PostHeader'

// const username = import.meta.env.VITE_GITHUB_USERNAME
// const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post() {
  const [postData, setPostData] = useState<IPosts>({} as IPosts)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `repos/pedrohbcosta/github_blog/issues/${id}`,
      )

      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPostDetails()
  }, [getPostDetails])

  return (
    <>
      <PostHeader postData={postData} isLoading={isLoading} />
      {!isLoading && <PostContent content={postData.body} />}
    </>
  )
}
