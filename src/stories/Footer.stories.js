import Footer from '@/components/templates/Footer.vue'

export default {
  title: 'Templates/Footer',
  component: Footer,
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
