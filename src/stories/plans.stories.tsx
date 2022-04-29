import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Plans from '../components/organisms/plans';
import { isPropertySignature } from 'typescript';
import { ProgressPlugin } from 'webpack';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/organisms/Plans',
  component: Plans,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    day: {control :'text'},
    article: {control: 'text'}
  }
} as ComponentMeta<typeof Plans>;

const Template: ComponentStory<typeof Plans> = (args) => <Plans/>;

export const Primary = Template.bind({});
Primary.args = {}