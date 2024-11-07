import { fn } from '@storybook/test'
import Button from '@/components/parts/Button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Parts/Button',
  component: Button,
  argTypes: {
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
    // backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    border: false,
    // size: 'large',
    label: 'ボタン',
  },
}

export const Border = {
  args: {
    border: true,
    // size: 'large',
    label: 'ボタン',
  },
}
