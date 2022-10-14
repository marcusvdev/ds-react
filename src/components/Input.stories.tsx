import { Meta, StoryObj } from '@storybook/react';
import { ContentInput, InputElement, InputRootProps } from "./Input";
import { Envelope } from 'phosphor-react';

export default {
    title: 'Components/Input',
    component: ContentInput.Root,
    args: {
        children: ([
            <ContentInput.Icon>
                <Envelope />
            </ContentInput.Icon>,
            <ContentInput.Input placeholder='Write here' />
        ])
    },
    argTypes: { 
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<InputRootProps>

export const WithIcon: StoryObj<InputRootProps> = {}

export const WithoutIcon: StoryObj<InputRootProps> = {
    args: {
        children: <ContentInput.Input placeholder='Write here' />
    }
}