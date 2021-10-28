import styled from "styled-components";

export const ListItem = styled.li`
	list-style-type: none;
	padding: 15px 0;
	margin-bottom: 15px;
`

export const ListLink = styled.a`
	color: ${props => props.theme.colors.fonts};
	font-size: 20px;
	font-weight: 700;
	text-transform: uppercase;

	display: flex;
	justify-content: space-between;
	align-items: baseline;
	flex-flow: column;

	@media (min-width: 768px) {
		flex-flow: row;
		font-size: 26px;
	}
`

export const ListText = styled.p`
	display: inline;
	text-align: left;
`

export const ListPeriod = styled.span`
	font-size: 18px;
	font-weight: 300;
	text-align: right;
`

export const ListField = styled.span`
	background-color: #EAEAEA;
	color: ${props => props.theme.colors.fonts};
	padding: 5px;
	font-size: 12px;
	display: inline-block;
	margin-left: 20px;
	vertical-align: middle;
	visibility: hidden;
	font-weight: 400;

	@media (min-width: 768px) {
		visibility: visible;
	}
`