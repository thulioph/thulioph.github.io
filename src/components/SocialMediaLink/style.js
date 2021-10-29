import styled from 'styled-components'

export const SocialListItem = styled.li`
	display: flex;
	flex-flow: column;
	margin-bottom: 20px;
`

export const SocialListLink = styled.a`
	display: inherit;
	align-items: center;
`

export const SocialListText = styled.p`
	color: ${props => props.theme.colors.fonts} !important;
	text-transform: capitalize;
`

export const SocialListIcon = styled.img`
	width: 32px !important;
	height: 32px;
	border-radius: 100%;
	overflow: hidden;
	margin: 0 20px 0 0 !important;
`
