// import { fn } from '@storybook/test'
import Input from '@/components/parts/Input.vue'

export default {
  title: 'Parts/Input',
  component: Input,
  argTypes: {
    style: { control: 'color' },
  },
  // args: { onClick: fn() },
  tags: ['autodocs'],
}

export const Default = {
  args: {},
}
