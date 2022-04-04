import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PlanEven from '../components/molecules/plan_even';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Molecules/PlanEven',
  component: PlanEven,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: 'text' },
    mark: { control: 'text' },
    price: { control: 'text' },
    unit: { control: 'text' },
    list1: { control: 'text' },
    list2: { control: 'text' },
    list3: { control: 'text' },
    list4: { control: 'text' }
  }
} as ComponentMeta<typeof PlanEven>;

const Template: ComponentStory<typeof PlanEven> = (args) => <PlanEven {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  title: 'title',
  mark: 'mark',
  price: 'price',
  unit: 'unit',
  list1: 'list1',
  list2: 'list2',
  list3: 'list3',
  list4: 'list4'
}