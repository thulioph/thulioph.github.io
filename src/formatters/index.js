export const formatWritings = (array) => {
	return array.map(({ node }) => ({
		id: node.id,
		link: node.frontmatter.path,
		title: node.frontmatter.title,
		pubDate: node.frontmatter.date
	}))
}

export const formatDate = (date) => {
	const lang = 'en-US'
	const config = {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	}

	return new Intl.DateTimeFormat(lang, config).format(new Date(date))
}

export const reorderRepos = (repos) => {
	return repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
};

export const filterRepos = (repos) => {
	return repos.filter(({ fork }) => fork === false)
}