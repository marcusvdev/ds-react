import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputRootProps {
    children: ReactNode;
}
export function InputRoot(props: InputRootProps){
    return(
        <div className={clsx('h-12 flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 outline-none')}>
            {props.children}
        </div>
    )
}

export interface InputIconProps{
    children: ReactNode;
}
export function InputIcon(props: InputIconProps){
    return(
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export function InputElement(props: InputProps){
    return (
        <input
            className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
            {...props}
        />
    )
}

export const ContentInput = {
    Root: InputRoot,
    Input: InputElement,
    Icon: InputIcon,
}