import { fn } from '@storybook/test'
import Header from '@/components/templates/Header.vue'

export default {
  title: 'Templates/Header',
  component: Header,
  args: { onClick: fn() },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['admin', 'user', 'editor'],
    },
  },
}

export const Admin = {
  args: {
    type: 'admin',
  },
}
export const user = {
  args: {
    type: 'user',
  },
}
export const editor = {
  args: {
    type: 'editor',
  },
}
