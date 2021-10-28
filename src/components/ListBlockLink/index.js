import React from 'react'

import { ListItem, ListLink, ListText, ListPeriod, ListField } from './styles'

const ListBlockLink = ({ title, link = '#', period, field = null }) => {
  return (
    <React.Fragment>
      <ListItem>
				<ListLink href={link} title={title} rel="noopener noreferrer" target="_blank">
					<ListText>
						{title}
						{field && <ListField>{field}</ListField>}
					</ListText>

					<ListPeriod>{period}</ListPeriod>
				</ListLink>
			</ListItem>
    </React.Fragment>
  )
}

export default ListBlockLink
