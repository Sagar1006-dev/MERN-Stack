import React from "react";

const Header = ({username}) => {
    console.log("Props", username);
  return (
    <div>
      {/* Link to Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Navbar */}
      <header className="absolute inset-x-0 top-0 z-50 py-6">
      <div class="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <nav class="w-full flex justify-between gap-6 relative">
           
            <div class="min-w-max inline-flex relative">
                <a href="/" class="relative flex items-center gap-3">
                    <div class="relative w-full h-7 overflow-hidden flex rounded-xl">
                        <span class="absolute w-4 h-4 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span>
                        <span class="absolute w-4 h-4 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span>
                        <span class="absolute w-4 h-4 -bottom-1 -left-1 bg-blue-600 rounded-md rotate-45"></span>
                        <span
                            class="absolute w-2 h-2 rounded-full bg-gray-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                    </div>
                    <div class="inline-flex text-lg font-semibold text-gray-900">
                        AgenceX
                    </div>
                </a>
            </div>

            <div data-nav-overlay aria-hidden="true"
                class="fixed hidden inset-0 lg:!hidden bg-gray-800/60 bg-opacity-50 backdrop-filter backdrop-blur-xl">
            </div>
            <div data-navbar
                class="flex invisible opacity-0  translate-y-10 overflow-hidden lg:visible lg:opacity-100  lg:-translate-y-0 lg:scale-y-100 duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-white lg:!bg-transparent border-x border-x-gray-100 lg:border-x-0">
                <ul
                    class="border-t border-gray-100  lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-4 text-lg text-gray-700 w-full lg:justify-center lg:items-center">
                    <li>
                        <a href="#" class="duration-300 font-medium ease-linear hover:text-blue-600 py-3">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" class="duration-300 font-medium ease-linear hover:text-blue-600 py-3">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#" class="duration-300 font-medium ease-linear hover:text-blue-600 py-3">
                            About us
                        </a>
                    </li>
                    <li>
                        <a href="#" class="duration-300 font-medium ease-linear hover:text-blue-600 py-3">
                            Features
                        </a>
                    </li>
                </ul>

                <div
                    class="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-gray-100   lg:border-0 px-6 lg:px-0">
                    <a href="#"
                        class="flex justify-center items-center w-full sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]">
                        <span class="relative z-10 text-white">
                             {username}
                        </span>
                    </a>
                </div>
            </div>


            <div class="min-w-max flex items-center gap-x-3">

                <button data-toggle-navbar data-is-open="false"
                    class="lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative">
                    <span id="line-1"
                        class="w-6 h-0.5 rounded-full bg-gray-700 transition-all duration-300 ease-linear"></span>
                    <span id="line-2"
                        class="w-6 origin-center  mt-1 h-0.5 rounded-ful bg-gray-700 transition-all duration-300 ease-linear"></span>
                    <span id="line-3"
                        class="w-6 mt-1 h-0.5 rounded-ful bg-gray-700 transition-all duration-300 ease-linear"></span>
                    <span class="sr-only">togglenav</span>
                </button>
            </div>
        </nav>
    </div>
      </header>

      {/* Hero section */}
      <section className="relative py-32 lg:py-36 bg-white">
      <div
        class="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div class="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span
                class="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
            <span class="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
        </div>
        <span
            class="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
        <div class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">

            <h1 class="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900">
                Social Media <span
                    class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">Marketing</span>
                is the Best Ever.
            </h1>
            <p class="mt-8 text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur
                quis voluptatum porro incidunt,
                libero sequi quos eos velit
            </p>
            <div class="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                <div class="flex sm:flex-row flex-col gap-5 w-full">
                    <form action="#"
                        class="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 shadow-lg shadow-gray-200/20
                            border border-gray-200 bg-gray-100 rounded-full ease-linear focus-within:bg-white  focus-within:border-blue-600">
                        <span class="min-w-max pr-2 border-r border-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                            </svg>
                        </span>
                        <input type="email" name="" id="" placeholder="johndoe@gmail.com"
                            class="w-full py-3 outline-none bg-transparent"/>
                        <button class="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                                after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]">
                            <span class="hidden sm:flex relative z-[5]">
                                Get Started
                            </span>
                            <span class="flex sm:hidden relative z-[5]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <img src="https://agencex-astro.vercel.app/images/image1.webp" alt="Hero image" width="2350" height="2359"
                class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"/>
        </div>
    </div>
      </section>

      {/* Inline Styles */}
      <style>
        {`
          body {
            font-family: "Raleway", sans-serif;
          }

          button[data-toggle-navbar][data-is-open="true"] #line-1 {
            transform: translateY(0.375rem) rotate(40deg);
          }

          button[data-toggle-navbar][data-is-open="true"] #line-2 {
            transform: scaleX(0);
            opacity: 0;
          }

          button[data-toggle-navbar][data-is-open="true"] #line-3 {
            transform: translateY(-0.375rem) rotate(-40deg);
          }
        `}
      </style>

      {/* JavaScript for mobile navigation */}
      <script>
        {`
          const btnHumb = document.querySelector("[data-toggle-navbar]")
          const navbar = document.querySelector("[data-navbar]")
          const overlay = document.querySelector("[data-nav-overlay]")
          if (btnHumb && navbar) {
              const toggleBtnAttr = () => {
                  const isOpen = btnHumb.getAttribute("data-is-open")
                  btnHumb.setAttribute("data-is-open", isOpen === "true" ? "false" : "true")
                  if (isOpen === "false") {
                      overlay.classList.toggle("hidden")
                  } else {
                      overlay.classList.add("hidden")
                  }
              }
              btnHumb.addEventListener("click", () => {
                  navbar.classList.toggle("invisible")
                  navbar.classList.toggle("opacity-0")
                  navbar.classList.toggle("translate-y-10")
                  toggleBtnAttr()
              })

              overlay.addEventListener("click", () => {
                  navbar.classList.add("invisible")
                  navbar.classList.add("opacity-0")
                  navbar.classList.add("translate-y-10")
                  toggleBtnAttr()
              })
          }
        `}
      </script>
    </div>
  );
};

export default Header;
