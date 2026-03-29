import Card from './index.jsx'

/** @type { import('@storybook/react').Meta } */
const meta = {
	title: 'Components/Card',
	component: Card,
	tags: ['autodocs'],
	argTypes: {
		imageSrc: { control: 'text' },
		imageAlt: { control: 'text' },
		link: { control: 'text' },
		title: { control: 'text' },
		description: { control: 'text' },
		index: { control: 'number' },
		basic: { control: 'boolean' },
		extLink: { control: 'boolean' },
	},
}

export default meta

/** @type { import('@storybook/react').StoryObj<typeof meta> } */
export const Default = {
	args: {
		title: 'Card Title',
		description: 'A short description of this card.',
		link: '#',
		imageSrc: '/placeholder.jpg',
		imageAlt: 'Placeholder image',
		index: 0,
		basic: false,
		extLink: false,
	},
}

export const WithExternalLink = {
	args: {
		...Default.args,
		extLink: true,
	},
}

export const Basic = {
	args: {
		...Default.args,
		basic: true,
	},
}

export const NoImage = {
	args: {
		title: 'Card Without Image',
		description: 'This card has no image.',
		link: '#',
		index: 0,
		basic: false,
		extLink: false,
	},
}
