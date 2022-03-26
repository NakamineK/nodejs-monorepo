import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Card as Component } from ".";

export default { component: Component } as ComponentMeta<typeof Component>;
export const Default: ComponentStoryObj<typeof Component> = {};
