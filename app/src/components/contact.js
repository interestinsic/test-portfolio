import mailbox from '../assets/img/mailbox.png'
import React from 'react'

import { GrLinkedinOption, GrFacebookOption, GrReddit, GrTwitter, GrInstagram } from "react-icons/gr";
import { RiWhatsappFill } from "react-icons/ri";



function Contact(){
const rickroll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"


    return(
    <div>
        <div className="bg-[url('./assets/img/anatoliy.jpg')] bg-fixed">
            <div className="my-10 align-middle p-10 md:w-5/6 w-full h-[40vh] mx-auto flex flex-wrap overflow-hidden ">
                
                    <img class="my-auto mx-auto md:mr-12 md:ml-5 md:w-44 w-[40vw]" src={mailbox}></img>
                    <div className="my-auto mx-auto mb-25 md:ml-40 font-prata"><h1 class="font-prata text-2xl">Keeping in touch</h1></div>
                
                
              
                
            </div>
        </div>
    <div className="mt-5 md:w-4/5 2xl:w-3/5 mx-auto min-h-[33vh]">
        <div class="mb-10 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mx-auto">
           
            <div class="m-4">
                <a class="relative inline-block group focus:outline-none focus:ring" href={rickroll}>
                    <span class=" absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-slate-200 group-hover:bg-slate-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span class=" relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">
                        <GrLinkedinOption size={20}/>
                    </span>
                </a>   
            </div>  

            <div class="m-4">
                <a class="relative inline-block group focus:outline-none focus:ring" href={rickroll}>
                    <span class=" absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-slate-200 group-hover:bg-slate-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span class=" relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">
                        <GrFacebookOption size={20}/>
                    </span>
                </a>   
            </div>  

            <div class="m-4">
                <a class="relative inline-block group focus:outline-none focus:ring" href={rickroll}>
                    <span class=" absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-slate-200 group-hover:bg-slate-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span class=" relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">
                        <GrReddit size={20}/>
                    </span>
                </a>   
            </div>  

            <div class="m-4">
                <a class="relative inline-block group focus:outline-none focus:ring" href={rickroll}>
                    <span class=" absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-slate-200 group-hover:bg-slate-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span class=" relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">
                        <GrTwitter size={20}/>
                    </span>
                </a>   
            </div>  

            <div class="m-4">
                <a class="relative inline-block group focus:outline-none focus:ring" href={rickroll}>
                    <span class=" absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-slate-200 group-hover:bg-slate-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span class=" relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">
                        <GrInstagram size={20}/>
                    </span>
                </a>   
            </div>  

            <div class="m-4">
                <a class="relative inline-block group focus:outline-none focus:ring" href="https://wa.me/+344422591242">
                    <span class=" absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-slate-200 group-hover:bg-slate-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span class=" relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">
                        <RiWhatsappFill size={20}/>
                    </span>
                </a>   
            </div>  
            
        </div>
    
        <div class="mx-auto my-3 text-center">
            <h1 class="text-xl mx-2 inline-block text-center font-prata align-middle">My Mail: </h1>
            <a class="text-sm font-lato inline-block text-center align-middle hover:bg-slate-300 p-1" href="mailto:hi@google.com">alice@mail.com</a>
        </div>

        <div class="mx-auto my-3 text-center">
            <h1 class="text-xl mx-2 inline-block text-center font-prata align-middle">My Number: </h1>
            <a class="text-sm font-lato inline-block text-center align-middle hover:bg-slate-300 p-1" href="tel:+31422541233">+31 630 53 12 33</a>
        </div>
    </div> 

    </div>
        
        )
}
export default Contact;
