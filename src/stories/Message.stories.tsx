import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Message from '../components/molecules/message';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Molecules/Messeage',
  component: Message,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: 'text' },
    contents: { control: 'text' }
  }
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => <Message {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  title: 'title',
  contents: 'contents'
}