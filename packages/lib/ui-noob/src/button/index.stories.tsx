import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button as Component } from ".";

export default { component: Component } as ComponentMeta<typeof Component>;
export const Default: ComponentStoryObj<typeof Component> = {
  args: {
    label: "Push me",
  },
};
