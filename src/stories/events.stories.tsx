import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Events from '../components/organisms/events';
import { isPropertySignature } from 'typescript';
import { ProgressPlugin } from 'webpack';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/organisms/Events',
  component: Events,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    day: {control :'text'},
    article: {control: 'text'}
  }
} as ComponentMeta<typeof Events>;

const Template: ComponentStory<typeof Events> = (args) => <Events {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    day: '2022.4.20' ,
    article: 'article'
}