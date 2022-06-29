import { Layout } from './Layout'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  component: Layout,
  argTypes: {
    bgc: { control: 'color' },
  },
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />

export const backgroundColor = Template.bind({})
backgroundColor.args = {
  bgc: 'black',
}
