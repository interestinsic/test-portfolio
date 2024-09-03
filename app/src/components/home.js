import profilepic from '../assets/img/sinitta.jpg'
import Typewriter from 'typewriter-effect'
import React from 'react'
import { HiAcademicCap } from "react-icons/hi";
import { useTranslation } from "react-i18next";

function Home(){
    const [t, i18n] = useTranslation("global")

    return(
    <div className="min-h-[80vh] mx-auto ">
        <div className="h-[50vh] text-black bg-[url('./assets/img/kunj.jpg')] bg-fixed">
            <div className="p-10 md:w-5/6 w-full h-ful mx-auto flex flex-wrap overflow-hidden">
                
                <img className="mx-auto md:mx-5 m-5 border-l-2 p-3 border-b-2 md:h-[40vh] md:w-auto w-3/5 h-auto" alt="Profile Picture" src={profilepic}></img>
                <div className="md:block hidden m-5 mt-12 p-3 items-stretch font-prata"><Typewriter onInit={(typewriter) => {
                    typewriter.typeString(t("header.hello-world")).start(); }}
                /></div>

            </div>
        </div>
        <div className="mt-5 md:w-4/5 2xl:w-3/5 mx-auto">
          
            <button class="text-sm mx-2 inline-block font-lato p-3 border border-amber-700 hover:text-white hover:bg-amber-700  active:bg-amber-700  focus:outline-none focus:ring" onClick={() => i18n.changeLanguage("es")}>Español</button>
            <button class="text-sm mx-2 inline-block font-lato p-3 border border-amber-700 hover:text-white hover:bg-amber-700  active:bg-amber-700  focus:outline-none focus:ring" onClick={() => i18n.changeLanguage("en")}>English</button>


            <section>
                <div class="px-4 py-16 sm:px-6 lg:px-8">
                    <div class="max-w-xl">
                    <h2 class="font-prata text-3xl sm:text-4xl">{t("home.skills-h1")}</h2>

                    <p class="font-lato mt-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.</p>
                    </div>

                    <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-5 lg:grid-cols-2">
                    <div class="flex items-start p-3 transition ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:bg-slate-50">
                        <span class="flex-shrink-0 border border-b-gray-800 bg-gray-200 p-4">
                        <HiAcademicCap />
                        </span>

                        <div class="ml-4">
                        <h2 class="font-prata text-lg">Lorem, ipsum dolor.</h2>

                        <p class="font-lato mt-1 text-justify text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?</p>
                        </div>
                    </div>

                    <div class="flex items-start p-3 transition ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:bg-slate-50">
                        <span class="flex-shrink-0 border border-b-gray-800 bg-gray-200 p-4">
                        <HiAcademicCap />
                        </span>

                        <div class="ml-4">
                        <h2 class="font-prata text-lg">Lorem, ipsum dolor.</h2>

                        <p class="font-lato mt-1 text-justify text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?</p>
                        </div>
                    </div>

                    <div class="flex items-start p-3 transition ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:bg-slate-50">
                        <span class="flex-shrink-0 border border-b-gray-800 bg-gray-200 p-4">
                        <HiAcademicCap />
                        </span>

                        <div class="ml-4">
                        <h2 class="font-prata text-lg">Lorem, ipsum dolor.</h2>

                        <p class="font-lato mt-1 text-justify text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?</p>
                        </div>
                    </div>

                    <div class="flex items-start p-3 transition ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:bg-slate-50">
                        <span class="flex-shrink-0 border border-b-gray-800 bg-gray-200 p-4">
                        <HiAcademicCap />
                        </span>

                        <div class="ml-4">
                        <h2 class="font-prata text-lg">Lorem, ipsum dolor.</h2>

                        <p class="font-lato mt-1 text-justify text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?</p>
                        </div>
                    </div>

                    <div class="flex items-start p-3 transition ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:bg-slate-50">
                        <span class="flex-shrink-0 border border-b-gray-800 bg-gray-200 p-4">
                        <HiAcademicCap />
                        </span>

                        <div class="ml-4">
                        <h2 class="font-prata text-lg">Lorem, ipsum dolor.</h2>

                        <p class="font-lato mt-1 text-justify text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?</p>
                        </div>
                    </div>

                    <div class="flex items-start p-3 transition ease-in-out hover:-translate-y-1 hover:-translate-x-1 hover:bg-slate-50">
                        <span class="flex-shrink-0 border border-b-gray-800 bg-gray-200 p-4">
                        <HiAcademicCap />
                        </span>

                        <div class="ml-4">
                        <h2 class="font-prata text-lg">Lorem, ipsum dolor.</h2>

                        <p class="font-lato mt-1 text-justify text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <div class="overflow-x-auto px-4 py-16 sm:px-6 lg:px-8 ">
                <h2 class="mb-5 font-prata text-3xl sm:text-4xl">{t("home.langskills-h1")}</h2>
                <table class="min-w-full text-sm divide-y-2 divide-gray-200">
                    <thead>
                    <tr>
                        <th
                        class="px-4 py-2 font-lato text-left text-gray-900 whitespace-nowrap"
                        >
                        Language
                        </th>
                        <th
                        class="px-4 py-2 font-lato text-left text-gray-900 whitespace-nowrap"
                        >
                        Aquired
                        </th>
                        <th
                        class="px-4 py-2 font-lato text-left text-gray-900 whitespace-nowrap"
                        >
                        Level
                        </th>
                    </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200">
                    <tr>
                        <td class="px-4 py-2 font-lato text-gray-900 whitespace-nowrap">English</td>
                        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">School</td>
                        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">C++</td>
                        
                    </tr>

                    <tr>
                        <td class="px-4 py-2 font-lato whitespace-nowrap">Spanish</td>
                        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">School & Social Intereaction</td>
                        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">Esta bien, sabes</td>
                        
                    </tr>

                    <tr>
                        <td class="px-4 py-2 font-lato whitespace-nowrap">Romanian</td>
                        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">MotherTongue</td>
                        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">Foarte bună</td>
                      
                    </tr>

                    <tr>
                        <td class="px-4 py-2 font-lato whitespace-nowrap">German</td>
                        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">6 Years experience woow</td>
                        <td class="px-4 py-2 text-gray-700 whitespace-nowrap">Sehr gut</td>
                      
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="px-4 py-16 sm:px-6 lg:px-8">
                <h2 class="mb-5 font-prata text-3xl sm:text-4xl">{t("home.faq-h1")}</h2>
                <div class="space-y-4">
                <details class="group">
                    <summary class="flex cursor-pointer items-center justify-between bg-gray-50 hover:bg-slate-100 p-4">
                        <h5 class="font-medium text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing?</h5>

                        <svg class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>

                    <p class="mt-4 px-4 leading-relaxed text-gray-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!</p>
                    </details>
                </div>
            </div>



        </div>
        
    </div>
        
        )
}

export default Home;