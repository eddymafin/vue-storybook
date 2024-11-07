import userLayout from '@/components/views/userLayout.vue'

export default {
  title: 'Views/userLayout',
  component: userLayout,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['admin', 'user', 'editor'],
    },
  },
}

export const user = {
  args: {
    type: 'editor',
  },
}
