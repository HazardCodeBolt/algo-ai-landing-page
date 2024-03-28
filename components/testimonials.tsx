import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">High-Accuracy Sentiment Analysis for Omani Dialect</h2>
            </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            {/* <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-green-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— As the Social Media Manager at a government ministry, I needed to gauge public sentiment towards our policies accurately. Using this tool, I delved into Twitter data, analyzing reactions and sentiments towards recent announcements. It helped me identify concerns among citizens, allowing me to adjust our communication strategy effectively. Thanks to this, we saw an improvement in public perception and engagement.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Sarah Hamdan</cite> - <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Social Media Manager</a>
              </div>
            </div> */}

            {/* 2nd testimonial */}
            {/* <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-green-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— As the Marketing Director of a prominent Omani brand, I needed to ensure our advertising campaigns resonated with our audience. With this tool, I delved into user interaction and engagement data, gaining insights into audience response. These insights guided me in refining our marketing strategies for better impact. The result? Increased brand awareness and higher customer engagement.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Ahmed Al Hosni</cite> - <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Marketing Director</a>
              </div>
            </div> */}

            {/* 3rd testimonial */}
            {/* <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-green-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— As a Research Analyst at a market research firm, I was tasked with uncovering emerging trends in consumer behavior within Oman. Using this tool's trend discovery and geographical analysis features, I identified regional variations in consumer preferences. These insights enabled me to pinpoint lucrative market segments for our clients, empowering them to make informed decisions about market expansion.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Samuel</cite> - <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Research Analyst</a>
              </div>
            </div> */}

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <p style={{fontSize: '48px'}}> 😃 Positive</p>
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-green-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <div dir='rtl'>
                <blockquote className="text-lg text-gray-400 grow p-3  m-2 bg-gray-900 rounded">هذا توجه طيب ويخلق منافسة ويمكن من خلاله قياس عمل المطورين الآخرين  </blockquote>
                <blockquote className="text-lg text-gray-400 grow p-3 m-2 bg-gray-900 rounded"> فكرة رائعة بتخصيص قطع الاراضي في   لمستحقي الاراضي من الشباب وهذه الفكرة ستشجعهم على  الاستعجال في بناء المنازل والاستقرار لما لهذه المدينة من مميزات </blockquote>
                <blockquote className="text-lg text-gray-400 grow p-3 m-2 bg-gray-900 rounded">السلطنة ولله الحمد ماضية لتحقيق أحد أهم ركائزها في رؤية  ٢٠٤٠م وهو إنشاء بنية أساسية حديثة ونظام عمراني متكامل</blockquote>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Positive Examples</cite> - <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">By Algo Ai</a>
              </div>
            </div>

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <p style={{fontSize: '48px'}}> 🙁 Negative</p>
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-green-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <div dir='rtl'>
                <blockquote className="text-lg text-gray-400 grow p-3  m-2 bg-gray-900 rounded"> عرض صامت نفس حسابكم أو فيه أحد نقدر نستفسر معه؟ </blockquote>
                <blockquote className="text-lg text-gray-400 grow p-3 m-2 bg-gray-900 rounded"> كلها مقسه اشوف 😕 </blockquote>
                <blockquote className="text-lg text-gray-400 grow p-3 m-2 bg-gray-900 rounded">يوم يشيب الغراب </blockquote>
                <blockquote className="text-lg text-gray-400 grow p-3 m-2 bg-gray-900 rounded">  حشا  وهذي عب ما وحده سكنيه صارت ، هذا قصر </blockquote>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Negative Examples</cite> - <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">By Algo Ai</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
