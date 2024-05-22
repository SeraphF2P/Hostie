import { Link } from "react-router-dom"
import { Btn } from "../components/ui"
import { z } from "zod"
import { ZOD } from "../lib/ZOD"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "../lib/myToast"
import { motion } from "framer-motion"

type SignupFormType = z.infer<typeof ZOD.signup>
export const Signup = () => {
  const { register,handleSubmit,formState} = useForm<SignupFormType>({
    resolver:zodResolver(ZOD.signup)
  })
  const submitHandle = async (values:SignupFormType) => {
    //backend call
    console.log(values)
  }
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" h-screen flex  justify-center">
      <section className=" w-full max-w-screen-sm sm:mb-10 flex flex-col justify-center items-center gap-8 p-8 bg-gray-50">
       <img src="/svgs/Hostie-1.svg"/>
        <h1 className=" text-4xl font-semibold">إنشاء حساب</h1>
        <form onSubmit={handleSubmit(submitHandle, () => {
          toast({type: 'error', message: formState.errors.agreeToUseCondition?.message ?? "Please fill all field"})
        })} className=" flex flex-col gap-4">
          <input {...register("fullName")} placeholder="الاسم الكامل" className=" form-input transition-colors text-right w-[300px] h-12 rounded-sm border-gray-300" type="text" />
          <input {...register("email")} placeholder="بريدك الالكتروني" className=" form-input transition-colors text-right w-[300px] h-12 rounded-sm border-gray-300" type="email" />
          <input {...register("password")} placeholder="كلمة المرور" className=" form-input transition-colors text-right w-[300px] h-12 rounded-sm border-gray-300" type="text" />
          <input {...register("password_confirmation")} placeholder="اعادة ادخال كلمة المرور" className=" form-input transition-colors text-right w-[300px] h-12 rounded-sm border-gray-300" type="text" />
          <div className=" flex gap-1 justify-center">
            <input className=" accent-primary" {...register("agreeToUseCondition")} type="checkbox" />
            <a href="">شروط الاستخدام</a>
            <p>لقد قرأت وقبلت جميع</p>
          </div>
          <Btn type="submit">انشاء حساب</Btn>
          <div className="flex justify-center">
            <Link to={"/signin"}>تسجيل الدخول</Link>
            <p>هل لديك حساب بالفعل؟</p>
          </div>
        </form>
      </section>
    </motion.main>
  )
}
