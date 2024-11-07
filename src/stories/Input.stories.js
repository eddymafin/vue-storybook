import { fn } from '@storybook/test'
import Input from '@/components/parts/Input.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Parts/Input',
  component: Input,
  argTypes: {
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
    style: { control: 'color' },
  },
  // args: { onClick: fn() },
  tags: ['autodocs'],
}

export const Default = {
  args: {},
}
