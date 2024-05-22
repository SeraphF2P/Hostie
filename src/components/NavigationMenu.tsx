import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { Icon } from './ui';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { cn } from '../lib/cva';

const NavigationMenu = () => {
  const [animate, setanimate] = useState(false);
  const { scrollY} = useScroll()
   useMotionValueEvent(scrollY,"change", (val) => {
    if (val >= 120) {
      setanimate(true)
    } else {
      setanimate(false)
    }
  })
  return (
    <RadixNavigationMenu.Root className="relative z-[1] flex  items-center w-full justify-center mx-auto " >
      <RadixNavigationMenu.List className="  m-0 flex list-none rounded-[6px] p-1 ">
        {siteConfig.mainNav.toReversed().map(item => {
          if (["hosting", "pages"].includes(item.name)) {
          return <RadixNavigationMenu.Item key={item.name}>
            <RadixNavigationMenu.Trigger className={cn("group relative text-primary-text hover:bg-primary-hover/30 capitalize focus:ring-[1px] group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:ring-white", {
            "text-neutral-revert":animate
          })}>
            <Icon.chevron
                className={cn("text-primary-text  relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180", {
                "hidden":animate
              })}
              aria-hidden
              />
              {item.name}
              <span className='h-0.5 w-full group-hover:scale-x-100 transition-transform rounded-sm bg-white left-0 -bottom-1 origin-left duration-500 scale-x-0 absolute'/>
          </RadixNavigationMenu.Trigger>
          <RadixNavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0  w-auto">
            <ul className="  grid grid-cols-4  gap-2 p-6   w-[768px] ">
                {item.subnav.map(subItem => {
        return <li  key={subItem.name} className={"  rounded hover:ring-[1px]  hover:ring-gray-200  h-20  capitalize"}>
    <RadixNavigationMenu.Link asChild>
      <Link
                to={subItem.href}
        className={'focus:shadow-[0_0_0_2px]   block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors'}
        
       
      >
        <div className=" mb-[5px] font-medium leading-[1.2]">{subItem.name}</div>
        <p className=" leading-[1.4]">{"subtitle" in subItem ? subItem.subtitle :""}</p>
      </Link>
    </RadixNavigationMenu.Link>
  </li>
      })}

           
            </ul>
          </RadixNavigationMenu.Content>
        </RadixNavigationMenu.Item>
          }
            return <RadixNavigationMenu.Item key={item.name}>
              <RadixNavigationMenu.Trigger className={cn("group relative text-primary-text hover:bg-primary-hover/30 capitalize focus:ring-[1px] group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:ring-white", {
            " text-neutral-revert":animate
          })}>
            <Icon.chevron
                 className={cn("text-primary-text  relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180", {
            " hidden":animate
                
              })}
              aria-hidden
              />
              {item.name}
              <span className='h-0.5 w-full group-hover:scale-x-100 transition-transform rounded-sm bg-white left-0 -bottom-1 origin-left duration-500 scale-x-0 absolute'/>
          </RadixNavigationMenu.Trigger>
          <RadixNavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0   w-auto">
            <ul className="  flex flex-col items-end gap-2 p-6   w-[540px]   ">
                {item.subnav.map(subItem => {
        return <li  key={subItem.name} className={"  h-20  capitalize"}>
    <RadixNavigationMenu.Link asChild>
      <Link
        to={subItem.href}
        className={' flex relative items-center group  select-none  p-3 text-[15px] leading-none no-underline outline-none transition-colors'}
        
       
      >
              {subItem.name}
              <span  className='h-0.5 bg-black w-0 group-hover:w-4 mx-2 transition-[width]  '/>
      </Link>
    </RadixNavigationMenu.Link>
  </li>
      })}

           
            </ul>
          </RadixNavigationMenu.Content>
        </RadixNavigationMenu.Item>
        })}



        <RadixNavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </RadixNavigationMenu.Indicator>
      </RadixNavigationMenu.List>

      <div className="perspective-[2000px]  absolute top-full left-0 flex w-full justify-center">
        <RadixNavigationMenu.Viewport className="  data-[state=open]:animate-scaleIn text-neutral-revert data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)]  origin-[top_center] overflow-hidden rounded-[6px] bg-neutral shadow transition-[width,_height] duration-300 w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </RadixNavigationMenu.Root>
  );
};



export default NavigationMenu;