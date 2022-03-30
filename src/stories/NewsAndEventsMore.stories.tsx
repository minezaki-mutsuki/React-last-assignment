import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NewsAndEventsMore from '../components/molecules/NewsAndEventsMore';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Molecules/NewsAndEventsMore',
  component: NewsAndEventsMore,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    info: { control: 'info' }
  }
} as ComponentMeta<typeof NewsAndEventsMore>;

const Template: ComponentStory<typeof NewsAndEventsMore> = (args) => <NewsAndEventsMore {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  info: 'info'
}