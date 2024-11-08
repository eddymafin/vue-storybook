// import { fn } from '@storybook/test'
import Select from '@/components/parts/Select.vue'

export default {
  title: 'Parts/Select',
  component: Select,
  argTypes: {
    options: { control: 'object' },
    style: { control: 'color' },
  },
  // args: { onClick: fn() },
  tags: ['autodocs'],
}

export const Default = {
  args: {},
}
