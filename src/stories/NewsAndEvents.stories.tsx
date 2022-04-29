import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NewsAndEvents from '../components/templates/NewsAndEvents';
import { isPropertySignature } from 'typescript';
import { ProgressPlugin } from 'webpack';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/templates/NewsAndEvents',
  component: NewsAndEvents,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    day: {control :'text'},
    article: {control: 'text'}
  }
} as ComponentMeta<typeof NewsAndEvents>;

const Template: ComponentStory<typeof NewsAndEvents> = (args) => <NewsAndEvents/>;

export const Primary = Template.bind({});
Primary.args = {}