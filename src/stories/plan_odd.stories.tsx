import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PlanOdd from '../components/molecules/plan_odd';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Molecules/PlanOdd',
  component: PlanOdd,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: 'text' },
    price: { control: 'number' },
    unit: { control: 'text' },
    list1: { control: 'text' },
    list2: { control: 'text' },
    list3: { control: 'text' },
    list4: { control: 'text' }
  }
} as ComponentMeta<typeof PlanOdd>;

const Template: ComponentStory<typeof PlanOdd> = (args) => <PlanOdd {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  title: 'title',
  price: 123456,
  unit: 'unit',
  list1: 'list斎藤',
  list2: 'list太田',
  list3: 'list小竹',
  list4: 'list4'
}