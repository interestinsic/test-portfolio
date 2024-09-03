import { AiFillGithub } from "react-icons/ai";

function Footer() {

    return(
        <footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <span class="ml-3 text-xl font-prata">Alice</span>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Personal Portfolio Site —
      <a href="https://github.com/real-XAM" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">by @interestinsic</a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a class="text-gray-500" href="https://github.com/interestinsic" target="_blank">
        <AiFillGithub size={30}/>
      </a>
    </span>
  </div>
</footer>
    )
}
export default Footer;
