export const formatWritings = (array) => {
	return array.map(({ node }) => ({
		id: node.id,
		link: node.frontmatter.path,
		title: node.frontmatter.title,
		pubDate: node.frontmatter.date
	}))
}
