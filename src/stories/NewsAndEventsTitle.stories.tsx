import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NewsAndEventsTitle from '../components/molecules/NewsAndEventsTitle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Molecules/NewsAndEventsTitle',
  component: NewsAndEventsTitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: 'text' },
    contents: { control: 'text' }
  }
} as ComponentMeta<typeof NewsAndEventsTitle>;

const Template: ComponentStory<typeof NewsAndEventsTitle> = (args) => <NewsAndEventsTitle {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  title: 'title',
  contents: 'contents'
}