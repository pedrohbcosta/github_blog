import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { ExternalLink } from '../../../../components/ExternalLink'
import { Loading } from '../../../../components/Loading'
import { relativeDateFromNow } from '../../../../utils/formatter'
import { IPosts } from '../../../Blog'
import { PostHeaderContainer } from './styles'

interface PostHeaderProps {
  postData: IPosts
  isLoading: boolean
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  const formattedDate = relativeDateFromNow(postData?.created_at)

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header>
            <ExternalLink
              as="button"
              onClick={goBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              variant="iconLeft"
            />
            <ExternalLink
              text="Ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>

          <h1>{postData.title}</h1>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  )
}
