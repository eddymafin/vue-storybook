import LoginLayout from '@/components/templates/LoginLayout.vue'

export default {
  title: 'Templates/LoginLayout',
  component: LoginLayout,
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
