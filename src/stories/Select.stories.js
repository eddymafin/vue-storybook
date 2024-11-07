import { fn } from '@storybook/test'
import Select from '@/components/parts/Select.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Parts/Select',
  component: Select,
  argTypes: {
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
    options: { control: 'object' },
    style: { control: 'color' },
  },
  // args: { onClick: fn() },
  tags: ['autodocs'],
}

export const Default = {
  args: {},
}
