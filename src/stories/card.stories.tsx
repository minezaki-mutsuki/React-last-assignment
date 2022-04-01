import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from '../components/molecules/card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Molecules/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: 'text' },
    contents: { control: 'text' }
  }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  title: 'title',
  contents: 'contents'
}