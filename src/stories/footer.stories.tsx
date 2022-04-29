import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from '../components/organisms/footer';
import { isPropertySignature } from 'typescript';
import { ProgressPlugin } from 'webpack';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/organisms/Footer',
  component: Footer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    day: {control :'text'},
    article: {control: 'text'}
  }
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer/>;

export const Primary = Template.bind({});
Primary.args = {}