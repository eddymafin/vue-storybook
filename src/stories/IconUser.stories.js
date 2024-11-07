import IconUser from '@/components/icons/IconUser.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Icons/User',
  component: IconUser,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Default = {}
