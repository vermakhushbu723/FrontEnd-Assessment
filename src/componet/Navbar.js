import React from 'react';

function Navbar() {
  return (
    <div>
      <nav id="navbar" className="text-lg bg-[#ffffff] pt-2 pb-3 mx-auto w-full shadow-xl">
        <div>
          <div className="relative flex items-center justify-between my-container mx-auto">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-3xl font-semibold"><a href="/">FliqaIndia</a></div>
              <ul className="items-center text-black text-ellipsis hidden space-x-4 lg:flex">
                <li><a className="default" href="/services">wedding</a></li>
                <li><a className="default" href="/portfolio">Photography</a></li>
                <li><a className="default" href="/portfolio">Flim</a></li>
                <li><a className="default" href="/graphic-design">Graphics</a></li>
                <li><a className="default" href="/portfolio">Portfolio</a></li>
                <li><a className="default" href="/learning">Course</a></li>
              </ul>
            </div>
            <section>
              <ul className="flex gap-6 justify-center items-center">
                <li><a className="default" href="/contact-us">contact</a></li>
                {/* <div><a className="font-[Inter] text-secondary rounded-xl text-sm uppercase tracking-wider font-semibold" href="/registration">Register</a></div> */}
              </ul>
            </section>
            <div className="lg:hidden">
              <button aria-label="Open Menu" title="Open Menu" className="text-secondary focus:outline-none">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-8" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
