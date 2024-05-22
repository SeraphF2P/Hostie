import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { ZOD } from "../lib/ZOD";
import { z } from "zod";
import { Btn } from "./ui";

const options = [
  {
  name: "بنغلادش",
  value:"بنغلادش"
  },
  {
  name: "الهند",
  value:"الهند"
  },
  {
  name: "باكستان",
  value:"باكستان"
  },
  {
  name: "نيبال",
  value:"نيبال"
  },
  {
  name: "المالديف",
  value:"المالديف"
  },
]
type SendAMessageFormType = z.infer<typeof ZOD.sendAMessage>
export const SendAMessage = () => {
  const { register,handleSubmit,formState:{errors}} = useForm<SendAMessageFormType>({
    resolver: zodResolver(ZOD.sendAMessage),
    values: {
      name: "Yasir Carroll",
      email: "Virefe@Mailinator.Com",
      phone: "+1 (648) 385-3415",
      city: "",
      sideNote: "Enim aute quae modi ",
      contactPermission:false
    }
  })
  const submitHandler = async (values:SendAMessageFormType) => {
    //call to backend
    console.log(values)
  }
  console.log(errors)
  return (
    <div className=" text-right  ">
      <h2 className=" text-2xl font-semibold my-8">أرسل رسالة</h2>
      <form onSubmit={handleSubmit(submitHandler)} className=" ring-[2px] lg:w-[500px] flex flex-col gap-8 px-10 py-8 rounded ring-gray-200">
        <div className=" flex flex-col lg:flex-row lg:gap-2 "> 
        <Input placeholder="ما اسمك؟" {...register("name")} />
        <Input placeholder="عنوان البريد الالكتروني" {...register("email")} />
        </div>
        <div className=" flex flex-col lg:flex-row lg:gap-2 "> 
        <Input placeholder="رقم الهاتف" {...register("phone")} />
        <select value='' className=" form-select flex-1 font-thin  text-right bg-[left] border-0 border-b-[2px] border-b-gray-200 focus:ring-0 focus:border-b-primary "  {...register("city")}  >
          <option  disabled  className="font-thin" value="">اختر الولاية</option>
          
          {options.map(opt => {
            return <option key={opt.name} value={opt.value} className="font-thin">{ opt.name}</option>
          })}
        </select>

        </div>
        <textarea placeholder="وصف حول استشارتك" className=" form-textarea placeholder:font-thin border-0 resize-none text-right !border-b-[2px] border-b-gray-200 focus:ring-0 focus:border-b-primary" {...register("sideNote")} />
        <div className="flex">
          <input className=" accent-primary" type="checkbox" {...register("contactPermission")} />
<p>بتقديم معلوماتك، أنت تقدم موافقتك الكتابية لـ hostie وعائلتها من العلامات التجارية للاتصال بك.</p>
        </div>
        <Btn type="submit" >ارسل الان</Btn>
      </form>
    </div>
  )
}
const Input = forwardRef<ElementRef<"input">, ComponentPropsWithoutRef<"input">>(
	({ type = "text", ...props }, forwardedRef) => {

		return (
        <input type={type} className=" form-input flex-1 placeholder:font-thin text-right border-0 border-b-[2px] border-b-gray-200 focus:ring-0 focus:border-b-primary   " ref={forwardedRef} {...props} />
		
		);
	}
);
