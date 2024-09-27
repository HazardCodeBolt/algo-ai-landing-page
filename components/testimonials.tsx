'use client';
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { unstable_noStore as noStore } from 'next/cache'
import { Button } from "@mui/material";
import { useState } from "react";

const ibmSans = IBM_Plex_Sans_Arabic({ weight: '400', style: 'normal', subsets: ['latin'] });

export default function Testimonials() {
  noStore()
  let [sentiment, setSentiment] = useState("Waiting ...")  
  let [text, setText] = useState("")
  let [color, setColor] = useState("#17a349")

  const classify_sentiment = async () => {
    try {
      const response = await fetch('/api/classify-sentiment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      if (data.sentiment === "negative") {
        setSentiment("Negative");
        setColor("#a31731");
      } else if (data.sentiment === "positive") {
        setSentiment("Positive");
        setColor("#17a349");
      } else {
        setSentiment("Neutral");
        setColor("#cccccc");
      }
    } catch (error) {
      setSentiment("Error");
      setColor("#ff0000");
    }
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">


          <div className="w-full h-4/5 mb-40 s flex flex-col justify-start items-center">

            <div className="max-w-3xl mx-auto text-center ">
              <h2 className="h2">High-Accuracy Sentiment Analysis for Omani Dialect</h2>
            </div>
            <h3 className="h2 my-10" style={{color : color}}>{sentiment}</h3>
            <textarea dir="rtl" value={text} onChange={(event)=> setText(event.target.value)} className={`w-6/12 h-32 p-4 bg-gray-800  rounded-lg focus:border-lime-900 focus:ring-green-900 focus:ring-4 mb-10  ${ibmSans.className}`} placeholder="قم بإدخال النص هنا..." maxLength={200}>
            </textarea>
            <Button variant="contained" style={{ backgroundColor: "#17a349" }}
              size="large" className={`w-6/12 ${ibmSans.className}`} onClick={classify_sentiment}>تحليل النص</Button>
            {/* <div className="flex-1"></div> */}
          </div>
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none">


            <div className="flex flex-col h-full p-6" data-aos="fade-up" data-aos-delay="40</div>0">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <p style={{ fontSize: '48px' }}> 😃 Positive</p>
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-green-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <div className={ibmSans.className} dir='rtl'>
                <blockquote className="text-lg text-gray-400 grow p-3  m-2 bg-gray-800 rounded-lg mr-5">هذا توجه طيب ويخلق منافسة ويمكن من خلاله قياس عمل المطورين الآخرين  </blockquote>
                <blockquote className="text-lg text-gray-400 grow p-3 m-2 bg-gray-800 rounded-lg ml-5"> فكرة رائعة بتخصيص قطع الاراضي في   لمستحقي الاراضي من الشباب وهذه الفكرة ستشجعهم على  الاستعجال في بناء المنازل والاستقرار لما لهذه المدينة من مميزات </blockquote>
                <blockquote className="text-lg text-gray-400 grow p-3 m-2 bg-gray-800 rounded-lg mr-5">السلطنة ولله الحمد ماضية لتحقيق أحد أهم ركائزها في رؤية  ٢٠٤٠م وهو إنشاء بنية أساسية حديثة ونظام عمراني متكامل</blockquote>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className=" text-gray-200 not-italic">Positive Examples</cite> - <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">By Algo AI</a>
              </div>
            </div>

            <div className="flex flex-col h-full p-6" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <p style={{ fontSize: '48px' }}> 🙁 Negative</p>
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-green-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <div className={ibmSans.className} dir='rtl'>
                <blockquote className="text-lg text-gray-400 grow p-3 m-2 bg-gray-800 rounded-lg mr-5"> عرض صامت نفس حسابكم أو فيه أحد نقدر نستفسر معه؟ </blockquote>
                <blockquote className="text-lg text-gray-400 grow p-3 m-2 bg-gray-800 rounded-lg ml-5"> كلها مقسه اشوف 😕 </blockquote>
                <blockquote className="text-lg text-gray-400 grow p-3 m-2 bg-gray-800 rounded-lg ml-5">  حشا  وهذي عب ما وحده سكنيه صارت ، هذا قصر </blockquote>
              </div>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Negative Examples</cite> - <a className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">By Algo AI</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
