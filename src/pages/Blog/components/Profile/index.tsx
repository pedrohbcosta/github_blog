import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { ProfileContainer, ProfileDetails, ProfilePhoto } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePhoto src="https://github.com/pedrohbcosta.png" />

      <ProfileDetails>
        <header>
          <h1>Pedro Batista</h1>
          <ExternalLink text="Github" href="#" />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            pedrohbcosta
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            123 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
