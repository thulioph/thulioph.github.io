import React from "react";

import { SocialListItem, SocialListLink, SocialListText, SocialListIcon } from './style'

import { getExtraSocialIcon } from '../getTechIcon'

const SocialMediaLink = ({ link, title }) => {
	return (
		<React.Fragment>
			<SocialListItem>
				<SocialListLink href={link} target="_blank" rel="noopener noreferrer">
					<SocialListIcon src={getExtraSocialIcon(title)} alt={title} />
					<SocialListText>{title}</SocialListText>
				</SocialListLink>
			</SocialListItem>
		</React.Fragment>
	)
}

export default SocialMediaLink