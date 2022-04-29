import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Cards from '../components/organisms/cards';
import { isPropertySignature } from 'typescript';
import { ProgressPlugin } from 'webpack';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/organisms/Cards',
  component: Cards,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    day: {control :'text'},
    article: {control: 'text'}
  }
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => <Cards/>;

export const Primary = Template.bind({});
Primary.args = {}