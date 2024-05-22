import { Link } from "react-router-dom"
import { Header } from "../components/Header"
import { SendAMessage } from "../components/SendAMessage"
import { Btn, Icon } from "../components/ui"
import SimpleMap from "./_components/GoogleMap"
import { siteConfig } from "../config/site"
import { motion } from "framer-motion"

export const Contact = () => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Header/>
        <section className="from-primary     text-primary-text  bg-gradient-to-b to-primary-hover  relative overflow-hidden">
           <img src="/svgs/svgexport-24.svg" className=" absolute inset-0 mx-auto top-20   scale-[2.5]  -rotate-90"/>
          <div className=" flex items-center justify-between  w-full h-[70vh] container">
            <div className=" relative w-[340px] h-[267px] left-24   hidden lg:inline">
                        <img className=" w-[161px] h-[306px] absolute -left-20 bottom-0" src="/public/svgs/contact/svgexport-7.svg" alt=""/>
                        <img className="absolute w-[153px] h-[166px] -top-20 right-[168px]" src="/public/svgs/contact/svgexport-8.svg" alt=""/>
                        <img className="absolute -bottom-4 -left-8" src="/public/svgs/contact/svgexport-6.svg" alt=""/>
                        <img className=" animate-slideInOut size-[117px] absolute -top-28 right-4" src="/public/svgs/contact/svgexport-10.svg" alt=""/>
                        <img className=" animate-shake origin-bottom-right w-[73px] h-[65px] absolute -top-20 -left-20" src="/public/svgs/contact/svgexport-9.svg" alt=""/>
            </div>
          <aside className=" relative  ml-auto lg:ml-0 text-right flex flex-col gap-4 p-4 justify-center items-end max-w-[500px]">
            <span className=" bg-white/20 rounded p-1">
      مدونة ومقال
          </span>
          <h2 className=" text-3xl font-semibold" >اتصل بنا</h2>
          <p>يمكنك أيضًا القيام بذلك عن طريق تسجيل الدخول إلى الخادم مباشرةً، ولكن العملية تتطلب بعض المعرفة التقنية لأن خطأً واحدًا قد يفسد موقعك بأكملهززز</p>
        <Btn variant="fill.secondery" className="px-8 gap-2"> <Icon.arrowleft/>عرض التفاصيل</Btn>
          </aside>
          </div>
        </section>
        {/* section 2 */}
        <section className=" grid sm:grid-cols-2 lg:grid-cols-4 py-16 gap-8  container">
          <div className=" rounded font-semibold text-xl  bg-gray-100 hover:text-primary-text hover:from-primary-hover hover:bg-gradient-to-t hover:to-primary transition-colors flex flex-col p-8 items-end justify-centerp-4  w-full">
            <Icon.X className=" size-12" />
            <p> شارع الرئيسي  AV 10013</p>
            <p>123 نيويورك</p>
          </div>
          <div className=" rounded font-semibold text-xl  bg-gray-100 hover:text-primary-text hover:from-primary-hover hover:bg-gradient-to-t hover:to-primary transition-colors flex flex-col p-8 items-end justify-centerp-4  w-full">
            <Icon.X className=" size-12" />
         <a href="mailto:info@hostie.com" >info@hostie.com</a>
            <a href="mailto:support@hostie.com" >support@hostie.com</a>
          </div>
          <div className=" rounded font-semibold text-xl  bg-gray-100 hover:text-primary-text hover:from-primary-hover hover:bg-gradient-to-t hover:to-primary transition-colors flex flex-col p-8 items-end justify-centerp-4  w-full">
            <Icon.X className=" size-12" />
          <a href="callto:11112542174">(555) 123-4567</a>
            <a href="callto:11112542174" >(111) 125- 42174</a>
          </div>
          <div className=" rounded font-semibold text-xl  bg-gray-100 hover:text-primary-text hover:from-primary-hover hover:bg-gradient-to-t hover:to-primary transition-colors flex flex-col p-8 items-end justify-centerp-4  w-full">
            <Icon.X className=" size-12" />
         <p>الاثنين - الجمعة: 9 صباحًا - 6 مساءً</p>
         <p>السبت: 9 صباحًا - 4 مساءً</p>
          </div>
        </section>
        {/* section 3 */}

      <section className=" sm:px-24 py-16 flex flex-col justify-between container lg:flex-row-reverse">
        <div className=" relative lg:w-1/2  flex flex-col justify-evenly items-center">
          <motion.img  initial={{y:80,opacity:0}}  whileInView={{y:0,opacity:1}} transition={{duration:0.4,delay:0.3}} className=" will-change-[transform_opacity] w-60 aspect-[522/376] " src="https://4cards.store/html/hostie-rtl/assets/images/contact/contact-form.png" alt="" />
          <img className=" hidden lg:block absolute left-0" src="/public/svgs/contact/svgexport-13.svg" alt="" />
          <div className=" space-y-4 text-end">
            <h2 className=" text-3xl lg:text-8xl font-semibold">اطرح سؤالاً</h2>
            <p className=" text-xl">قم بجدولة مكالمة اليوم واحصل على مساعدة من أحد خبرائنا لمساعدتك في تحديد الخدمة المثلى لنشاطك التجاري وميزانيتك.</p>
          </div>
        </div>
       <SendAMessage/>
      </section>
      <SimpleMap />
      <footer className=" grid grid-cols-2 lg:grid-cols-4  pt-16   px-4">
        <div className=" lg:col-start-4 col-start-2 col-span-1 flex flex-col text-right px-4   gap-2  " >
          <div className="border-0 border-b-2 py-4 flex flex-col items-end gap-2">
            <img className="my-8 lg:m-2" src="/svgs/svgexport-27.svg" />
          <p className="text-base">1811 Silverside Rd, Wilmington</p>
          <p className="text-base ">DE 19810, USA</p>
          </div>
          <div className=" flex flex-col items-end gap-4  p-4">
            <a href="tell:121" className=" text-nowrap flex gap-2">
              +806 (000) 88 99<Icon.telephone className=" bg-primary fill-primary-text p-1 size-8 rounded"/></a>
            <a href="mailto:contact@reactheme.com" className="text-nowrap flex gap-2">
              info@hostie.com <Icon.envelope className=" bg-primary fill-primary-text p-1 size-8 rounded"/></a>
          </div>
        </div>
        
       
        <div className="lg:col-start-3 md:row-start-1 mn:col-start-1 col-start-2 col-span-1 flex flex-col gap-8 items-end " >
          <h2 className=" text-xl font-semibold my-4 ">الشركة</h2>
          <Link className=" hover:text-primary " to="#">من نحن</Link>
          <Link className=" hover:text-primary " to="#">أخبارنا</Link>
          <Link className=" hover:text-primary " to="#">اتصل</Link>
          <Link className=" hover:text-primary " to="#">برنامج الشركة</Link>
          <Link className=" hover:text-primary " to="#">تقنياتنا</Link>
        </div>

        <div className="lg:row-start-1 col-start-2 col-span-1 flex flex-col gap-8 items-end " >
          <h2 className=" text-xl font-semibold my-4 ">الاستضافة</h2>
          <Link className=" hover:text-primary " to="#">فحص النطاق</Link>
          <Link className=" hover:text-primary " to="#">نقل النطاق</Link>
          <Link className=" hover:text-primary " to="#">تسجيل النطاق</Link>
          <Link className=" hover:text-primary " to="#">مركز البيانات</Link>
          <Link className=" hover:text-primary " to="#">whois</Link>
        </div>

        <div className="lg:row-start-1  md:row-start-2 md:col-span-1 col-start-1 col-span-2 flex flex-col gap-8 items-end  w-full" >
          <h2 className=" text-xl font-semibold my-4 ">اشترك بالقناة الاخبارية</h2>
          <p className=" text-base">سنرسل لك الاخبار و العروض</p>
          <div className=" flex items-center justify-between shadow shadow-black/30 rounded-full p-1 w-full">
            <Btn className=" rounded-full aspect-square"><Icon.arrowleft className="size-6" /></Btn>
            <input placeholder="ادخل البريد الالكتروني" className="form-input border-0 flex-1 text-right " type="email" />
            <Icon.envelope className="size-6 mr-2 "/>
          </div>
          <h2 className=" text-xl font-semibold my-4 ">وسائل التواصل الاجتماعي</h2>
           <div className=" flex justify-end items-center p-4 gap-2">
            <Link to={siteConfig.usefulLink.facebook}><Icon.facebook className=" size-8 rounded ring-1 ring-gray-300 hover:text-primary-text text-gray-600 p-2 transition-colors hover:bg-primary"/></Link>
            <Link to={siteConfig.usefulLink.youtube}><Icon.youtube className=" size-8 rounded ring-1 ring-gray-300 hover:text-primary-text text-gray-600 p-2 transition-colors hover:bg-primary"/></Link>
            <Link to={siteConfig.usefulLink.twitter}><Icon.twitter className=" size-8 rounded ring-1 ring-gray-300 hover:text-primary-text text-gray-600 p-2 transition-colors hover:bg-primary"/></Link>
            <Link to={siteConfig.usefulLink.linkedin}><Icon.linkedin className=" size-8 rounded ring-1 ring-gray-300 hover:text-primary-text text-gray-600 p-2 transition-colors hover:bg-primary"/></Link>
            <Link to={siteConfig.usefulLink.linkedin}><Icon.instagram className=" size-8 rounded ring-1 ring-gray-300 hover:text-primary-text text-gray-600 p-2 transition-colors hover:bg-primary"/></Link>
        </div>
        </div>
        

        <div className="col-start-1 col-span-full w-full lg:flex lg:justify-between lg:flex-row-reverse text-center border-t-2 p-4">
          <p className=" text-nowrap">© حقوق الطبع والنشر 2024. جميع الحقوق محفوظة.</p>
          <div className="flex p-4 justify-center items-center gap-4">
            <img className=" rounded" src="/svgs/svgexport-28.svg" alt="" />
            <img className=" rounded" src="/svgs/svgexport-29.svg" alt="" />
            <img className=" rounded" src="/svgs/svgexport-30.svg" alt="" />
            <img className=" rounded" src="/svgs/svgexport-31.svg" alt="" />
            <img className=" rounded" src="/svgs/svgexport-32.svg" alt="" />
          </div>
        </div>
      </footer>
      </motion.main>
    </>
  )
}

