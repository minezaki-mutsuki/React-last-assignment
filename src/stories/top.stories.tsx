import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Top from '../components/organisms/top';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Organisms/Top',
  component: Top,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  }
} as ComponentMeta<typeof Top>;

const Template: ComponentStory<typeof Top> = (args) => <Top/>;

export const Primary = Template.bind({});
Primary.args = {
  
}