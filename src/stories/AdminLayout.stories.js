import AdminLayout from '@/components/views/AdminLayout.vue'

export default {
  title: 'Views/AdminLayout',
  component: AdminLayout,
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
