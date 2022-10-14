import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { InputElement, InputIcon, InputRoot } from './components/Input';
import { Text } from './components/Text';
import { Logo } from './Logo';
import './styles/global.css';

export function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex items-center justify-center flex-col'>
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size='lg' className='mt-4'>Design System</Heading>
        <Text size='lg' className='mt-1 text-gray-400'>Faça login e comece a usar!</Text>
      </header>
      <form className='flex flex-col items-stretch w-full max-w-sm mt-10'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>E-mail</Text>
          <InputRoot>
            <InputIcon>
              <Envelope />
            </InputIcon>
            <InputElement id="email" placeholder="exemple@exemple.com" />
          </InputRoot>
        </label>
        <label htmlFor="email" className='flex flex-col gap-3 mt-4'>
          <Text className='font-semibold'>Senha</Text>
          <InputRoot>
            <InputIcon>
              <Lock />
            </InputIcon>
            <InputElement id="password" placeholder="exemple@exemple.com" />
          </InputRoot>
        </label>
        <label htmlFor='remember' className="flex items-center gap-2 mt-4">
          <Checkbox id="remember" />
          <Text size="sm">
            Lembrar senha
          </Text>
        </label>
        <Button type="submit" className='mt-4'>
          ENTRAR
        </Button>
      </form>
      <footer className='flex flex-col items-center gap-2 mt-8'>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-cyan-300'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-cyan-300'>Não possui cadastro? Crie agora!</a>
        </Text>
      </footer>
    </div>
  )
}