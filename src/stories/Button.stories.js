// import { fn } from '@storybook/test'
import Button from '@/components/parts/Button.vue'

export default {
  title: 'Parts/Button',
  component: Button,
  // args: { onClick: fn() },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    border: false,
    label: 'ボタン',
  },
}

export const Border = {
  args: {
    border: true,
    label: 'ボタン',
  },
}
