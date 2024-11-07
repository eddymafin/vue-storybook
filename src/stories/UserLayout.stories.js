import editorLayout from '@/components/views/editorLayout.vue'

export default {
  title: 'Views/editorLayout',
  component: editorLayout,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['admin', 'user', 'editor'],
    },
  },
}

export const editor = {
  args: {
    type: 'user',
  },
}
