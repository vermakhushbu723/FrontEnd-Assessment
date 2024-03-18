import React from 'react';

const Footer = () => {
    return (
        <>
            <footer class="p-10 mx-auto text-[#FFFFFF] bg-[#1C1C1C] text-xl">
                <div class="pt-3 md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  justify-items-center">
                    <div class="mb-4"><span class="text-white font-bold text-2xl md:text-3xl">Information</span>
                        <div class="grid grid-cols-1 md:grid-cols-2 pt-3">
                            <div>
                                <div><a class="link link-hover" href="/contact-us">Contact Us</a></div>
                                <div><a class="link link-hover" href="/design">Brand Ambassador</a></div>
                                <div><a class="link link-hover" href="/terms-&amp;-conditions">Terms &amp; Condition</a>
                                </div>
                                <div><a class="link link-hover" href="/advertisement">Privacy Policy</a></div>
                                <div><a class="link link-hover" href="/advertisement">Partner Login</a></div>
                                <div><a class="link link-hover"
                                    href="https://billing.fliqaindia.com/portal/fliqaindiapay/">Billing Portal</a>
                                </div>
                                <div><a class="link link-hover"
                                    href="https://projects.zoho.com/portal/fliqaindia/">Project Status</a></div>
                            </div>
                            <div>
                                <div><a class="link link-hover" href="/about-us">About-Us</a></div>
                                <div><a class="link link-hover" href="/about-us">View My Album</a></div>
                                <div><a class="link link-hover" href="/contact-us">Editorial Team &amp;
                                    Collaboration</a></div>
                                <div><a class="link link-hover" href="/jobs">Careers</a></div>
                                <div><a class="link link-hover" href="/press">Apply Fliqa-Partner</a></div>
                                <div><a class="link link-hover"
                                    href="https://desk.zoho.com/support/fliqaindia/">Help-Desk</a></div>
                                <div><a class="link link-hover" href="/press"></a></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="">
                            <p class="text-white font-bold text-2xl md:text-3xl md:text-center">Get the FliqaIndia app
                            </p>
                            <div class="flex justify-center mt-5"><img
                                src="data:image/png;base64,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"
                                class="h-[35px]" alt=""/><img
                                    src="data:image/png;base64,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"
                                    class="h-[35px] ml-10" alt=""/></div>
                            </div>
                        </div>
                        <div>
                            <div class="form-control">
                                <p class="pt-5">Address - New Market Complex, Ramnagar,<br/> East Medinipur, West Bengal
                                    721441, India</p>
                            </div>
                        </div>
                    </div>
                    <hr class="my-4"></hr>
                    
                        <div class="flex flex-col-reverse md:flex-row md:items-center justify-between mb-4 md:px-8">
                            <div class="mb-4 mt-3 md:mb-0">
                                <h2 class="text-2xl">FliqaIndia</h2>
                                <p class="pt-3">© 2023 FliqaIndia Corporation Inc. All rights reserved.</p>
                            </div>
                            <div>
                                <p class="text-white font-bold text-2xl py-4 text-center">Follow us on</p>
                                <div
                                    class="flex flex-wrap  space-x-4 md:space-x-6 mb-4 md:mb-0 justify-items-center justify-center items-center">
                                    <a class="link link-hover" href="https://www.facebook.com/fliqaindia.official"
                                        target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 512 512"
                                            class="text-3xl hover:text-[#0866FF] transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"
                                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                                            </path>
                                        </svg></a><a class="link link-hover "
                                            href="https://www.instagram.com/fliqaindia.official " target="_blank"><svg
                                                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512"
                                                class="text-3xl hover:text-[#B028AB]  transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                            </path>
                                        </svg></a><a class="link link-hover" href="https://www.twitter.com/fliqaindia"
                                            target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512"
                                                class="text-3xl hover:text-[#199DF0]  transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                            </path>
                                        </svg></a><a class="link link-hover" href="https://www.youtube.com/@fliqaindia"
                                            target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 576 512"
                                                class="text-3xl hover:text-[#F70101]  transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                            </path>
                                        </svg></a><a class="link link-hover" href="https://www.pinterest.com/fliqaindia"
                                            target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 496 512"
                                                class="text-3xl hover:text-[#B7081B]  transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z">
                                            </path>
                                        </svg></a><a class="link link-hover" href="https://www.linkedin.com/company/fliqaindia"
                                            target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 448 512"
                                                class="text-3xl hover:text-[#0B63BD]  transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
                                            </path>
                                        </svg></a><a class="link link-hover" href="https://wa.me/c/919641817485"
                                            target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 448 512"
                                                class="text-3xl hover:text-[#29AD17]  transition duration-500 ease-in-out transform hover:scale-110 focus:scale-95"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
                                            </path>
                                        </svg></a>
                                </div>
                            </div>
                        </div>
                    {/* </hr> */}
            </footer>
        </>
    );
}

export default Footer;
