
import { zodResolver } from '@hookform/resolvers/zod';
import * as RadixPopover from '@radix-ui/react-hover-card';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { ZOD } from '../../lib/ZOD';
import { Btn } from './Btn';
import Input from './Input';

export const LoginBtn = () => {
  const { register,handleSubmit} = useForm<z.infer<typeof ZOD.login>>({
    resolver:zodResolver(ZOD.login)
  })
  const submitHandler = async () => {
    //? call backend
  }
  return <RadixPopover.Root >
    <RadixPopover.Trigger asChild>
      <button
        className=" flex gap-1 items-center capitalize"
      >
        login
        <img src="/svgs/svgexport-4.svg" />
      </button>
    </RadixPopover.Trigger>
    <RadixPopover.Portal>
      <RadixPopover.Content
        className="rounded p-5 w-[260px] bg-white will-change-[transform,opacity] data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade"
        sideOffset={5}
      >
  
        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col' >
          <Input label='your email' {...register("email")} />
          <Input label='password' {...register("password")} />
          <Btn variant="outline" className='w-full rounded-sm'>log in</Btn>
          <Link to="#" className=' hover:text-primary text-center  pt-2 '>forgot your password ?</Link>
       </form>
      </RadixPopover.Content>
    </RadixPopover.Portal>
  </RadixPopover.Root>
}
