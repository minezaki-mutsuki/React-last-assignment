import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import About from '../components/organisms/about';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Organisms/About',
  component: About,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  }
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => <About {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  
}