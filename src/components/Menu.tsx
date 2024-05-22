import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";
import { Icon, Modale ,Collapsible, BtnProps} from "~/ui";
import { useViewportSize } from "@mantine/hooks";
import NavigationMenu from "./NavigationMenu";

const Menu = (props:BtnProps) => {
const viewPort = useViewportSize()
  return (
    <>
   {viewPort.width < 1024 && <Modale  >
      <Modale.Btn variant="outline" {...props} >
           <Icon.menu className="size-6"/>
      </Modale.Btn>
      <Modale.Portal>
        <Modale.overlayer/>

          <Modale.Content className=" h-full overflow-y-scroll flex flex-col px-4  text-lg  fixed inset-0 left-10   bg-neutral data-[state=closed]:animate-slideOut data-[state=open]:animate-slideIn">
            <Modale.Close className=" ml-auto rounded-sm mr-4 !size-14 " variant="fill">
              <Icon.X className="size-10"/>
          </Modale.Close>
          <div className=" divide-y-2 divide-gray-200  flex flex-col w-full   ">
             {siteConfig.mainNav.map(head => {
               return <Collapsible key={head.name}  className=" flex flex-col   justify-end items-end ">
                 <Collapsible.Btn  className="capitalize hover:text-primary  h-16  ">
                   {head.name}
                 </Collapsible.Btn>
                 <Collapsible.content className="divide-y-2  divide-gray-200 flex flex-col  w-full ">
              {head.subnav.map(link => <Link className=" flex w-full h-16  items-center capitalize justify-end" key={link.name} to={link.href}>{ link.name}</Link>)}
                 </Collapsible.content>
            </Collapsible>
          })}
          </div>
          <div className=" flex justify-end items-center p-4 gap-2">
            <Link to={siteConfig.usefulLink.facebook}><Icon.facebook className=" size-4 transition-colors hover:fill-primary"/></Link>
            <Link to={siteConfig.usefulLink.youtube}><Icon.youtube className=" size-4 transition-colors hover:fill-primary"/></Link>
            <Link to={siteConfig.usefulLink.twitter}><Icon.twitter className=" size-4 transition-colors hover:fill-primary"/></Link>
            <Link to={siteConfig.usefulLink.linkedin}><Icon.linkedin className=" size-4 transition-colors hover:fill-primary"/></Link>
          </div>
          </Modale.Content>
      </Modale.Portal>
    </Modale>}
    {viewPort.width >= 1024 && <NavigationMenu />}
    </>
  )
}

export default Menu