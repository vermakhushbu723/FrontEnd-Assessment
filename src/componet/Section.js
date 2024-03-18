
import React, { useState, useEffect } from 'react';
function Section() {
    const words = ['Photography', 'Videography', 'Graphics'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dynamicWord, setDynamicWord] = useState('');
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const word = words[currentIndex];
            setDynamicWord(word);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
            setCurrentCharIndex(0); // Reset character index when changing words
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentIndex, words]);

    useEffect(() => {
        const charIntervalId = setInterval(() => {
            const word = words[currentIndex];
            if (currentCharIndex < word.length) {
                setDynamicWord((prevWord) => prevWord + word[currentCharIndex]);
                setCurrentCharIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(charIntervalId);
                setTimeout(() => {
                    let reversedWord = dynamicWord.split('').reverse().join('');
                    const removeIntervalId = setInterval(() => {
                        if (reversedWord.length > 0) {
                            reversedWord = reversedWord.slice(1);
                            setDynamicWord(reversedWord.split('').reverse().join(''));
                        } else {
                            clearInterval(removeIntervalId);
                            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
                            setCurrentCharIndex(0); // Reset character index when changing words
                        }
                    }, 50);
                }, 500);
            }
        }, 200); // Adjust the interval duration as needed
        return () => clearInterval(charIntervalId);
    }, [currentIndex, currentCharIndex, dynamicWord]);

    return (
        <>
            <div className="relative">
                <img className="w-full h-[480px] md:h-[660px]" src="https://fliqaindia.com/assets/banner-05d3bfd6.jpg" alt="banner-img" />
                <div className="my-container">
                    <div className="absolute top-1/4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
                            Looking For<br />
                            <span className="font-bold bg-gradient-to-r from-gray-700 via-gray-900 to-gray-950 bg-clip-text animate-gradient tracking-wider">{dynamicWord}</span>
                            <span className="blink">|</span>
                        </h1>
                        <p className="mt-6 text-sm md:text-lg tracking-wider max-w-xl mr-36 font-semibold">Capturing Moments, Creating Memories – Explore the Art of Photography with FliqaIndia Unveil the Beauty of Every Frame, Creative Services Tailored for You. Discover the Magic Through FliqaIndia's Lens.</p>
                        <div className="mt-4">
                            <a href="tel:+919641817485" className="btn bg-secondary text-white border-0 hover:bg-sky-950 font-bold tracking-wider">Call us</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ................................. */}
            <div class="my-container mx-auto my-10">
                <section>
                    <div
                        class="text-center text-[26px] md:text-3xl lg:text-4xl xl:text-3xl font-semibold tracking-wider">
                        Why FliqaIndia?</div>
                    <div class="grid md:grid-cols-3 gap-4 md:gap-8 mt-8">
                        <div class="bg-gray-200 rounded-lg shadow-lg px-3 py-4">
                            <div class="flex justify-center mb-3"><img class="w-20 h-20"
                                src="data:image/png;base64,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"
                                alt="Why Choose Us Image" /></div>
                            <div class="text-center">
                                <h1 class="text-base font-bold tracking-wide mb-1">24*7 Services</h1>
                                <p class="text-sm font-medium">Our superstar team is always ready to help you
                                    anytime, anywhere. </p>
                            </div>
                        </div>
                        <div class="bg-gray-200 rounded-lg shadow-lg px-3 py-4">
                            <div class="flex justify-center mb-3"><img class="w-20 h-20"
                                src="data:image/webp;base64,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" alt="Why Choose Us Image" /></div>
                            <div class="text-center">
                                <h1 class="text-base font-bold tracking-wide mb-1">Best Price</h1>
                                <p class="text-sm font-medium">We can ensure the best price in the market. Our
                                    affordable packages ensure you get exceptional service.</p>
                            </div>
                        </div>
                        <div class="bg-gray-200 rounded-lg shadow-lg px-3 py-4">
                            <div class="flex justify-center mb-3"><img class="w-20 h-20"
                                src="https://fliqaindia.com/assets/image%20198-e5766714.png" alt="Why Choose Us Image" /></div>
                            <div class="text-center">
                                <h1 class="text-base font-bold tracking-wide mb-1">Proven Expertise</h1>
                                <p class="text-sm font-medium">With a track record of excellence, We have a large no
                                    of verified Fliqa partners who can ensure your project.</p>
                            </div>
                        </div>
                        <div class="bg-gray-200 rounded-lg shadow-lg px-3 py-4">
                            <div class="flex justify-center mb-3"><img class="w-20 h-20"
                                src="https://fliqaindia.com/assets/image%20200-3eb15f75.png" alt="Why Choose Us Image" /></div>
                            <div class="text-center">
                                <h1 class="text-base font-bold tracking-wide mb-1">Award Winning Teams</h1>
                                <p class="text-sm font-medium">We have an internal verification process that can
                                    help you ensure the best work.</p>
                            </div>
                        </div>
                        <div class="bg-gray-200 rounded-lg shadow-lg px-3 py-4">
                            <div class="flex justify-center mb-3"><img class="w-20 h-20"
                                src="https://fliqaindia.com/assets/img5-470f6648.png" alt="Why Choose Us Image" /></div>
                            <div class="text-center">
                                <h1 class="text-base font-bold tracking-wide mb-1">All In One Creative Platform</h1>
                                <p class="text-sm font-medium">All creative services &amp; learnings in a single
                                    platform.</p>
                            </div>
                        </div>
                        <div class="bg-gray-200 rounded-lg shadow-lg px-3 py-4">
                            <div class="flex justify-center mb-3"><img class="w-20 h-20"
                                src="https://fliqaindia.com/assets/img6-730d6a5b.png" alt="Why Choose Us Image" /></div>
                            <div class="text-center">
                                <h1 class="text-base font-bold tracking-wide mb-1">Customized Packages</h1>
                                <p class="text-sm font-medium">Customized packages with specific requirements ensure
                                    you get the perfect Creative Project.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>



            {/* ...................... */}

            <div class="my-container my-16">
                <div
                    class="text-center text-[26px] md:text-3xl lg:text-4xl xl:text-3xl font-semibold tracking-wider">
                    What We Offer</div>
                <p class="text-[#094358] tracking-wide font-bold text-xl p-2 text-center">We offer a wide range of
                    services to your preferences...</p>
                <div class="mt-6 grid md:grid-cols-2 gap-4 ">
                    <div
                        class="w-full h-[272px] md:h-56 bg-gray-100 grid grid-cols-2 gap-4 justify-center items-center rounded-xl">
                        <img class="w-full h-[272px] md:h-56 rounded-l-xl" src="https://fliqaindia.com/assets/portfolio-1-6d1acd84.jpg"
                            alt="weeding" />
                        <div class="mr-4">
                            <h1 class="text-2xl md:text-2xl font-bold tracking-wider text-secondary">Portfolio Shoot
                            </h1>
                            <p class="text-sm font-medium tracking-wide my-2">Capture your essence and showcase your
                                best self with our professional portfolio shoots that bring out your unique style
                                and personality.</p><button
                                    class="py-2 px-4 text-sm bg-[#2f6e7a] text-white rounded-lg tracking-wide text-secondary font-bold hover:bg-[#D6EDF1] hover:text-black  hover:border-0 transition duration-500 ease-in-out transform hover:scale-95">Know
                                more</button>
                        </div>
                    </div>
                    <div
                        class="w-full h-[272px] md:h-56 bg-gray-200 grid grid-cols-2 justify-center gap-4 items-center rounded-xl">
                        <img class="w-full h-[272px] md:h-56 rounded-l-xl" src="https://fliqaindia.com/assets/promotion-77c5b872.jpg"
                            alt="weeding" />
                        <div class="mr-4">
                            <h1 class="text-2xl font-bold tracking-wider text-secondary">Promotional Shoot</h1>
                            <p class="text-sm font-medium tracking-wide my-2">Elevate your brand and captivate your
                                audience with our expertly crafted promotional shoots that bring your vision to
                                life.</p><button
                                    class="py-2 px-4 text-sm bg-[#2f6e7a] text-white rounded-lg tracking-wide text-secondary font-bold hover:bg-[#D6EDF1] hover:text-black  hover:border-0 transition duration-500 ease-in-out transform hover:scale-95">Know
                                more</button>
                        </div>
                    </div>
                </div>
                <div class="mt-2 md:mt-6 grid md:grid-cols-2 gap-4">
                    <div
                        class="w-full h-[272px] md:h-56 bg-gray-100 grid grid-cols-2 justify-center gap-4 items-center rounded-xl">
                        <img class="w-full h-[272px] md:h-56  rounded-l-xl" src="https://fliqaindia.com/assets/weeding-d70605a3.jpg"
                            alt="weeding" />
                        <div class="mr-4">
                            <h1 class="text-2xl font-bold tracking-wider text-secondary">Wedding Packages</h1>
                            <p class="text-sm font-medium tracking-wide my-2">Preserve the magic of your special day
                                with our timeless wedding photography, capturing every moment with artistry and
                                care.</p><button
                                    class="py-2 px-4 text-sm bg-[#2f6e7a] text-white rounded-lg tracking-wide text-secondary font-bold hover:bg-[#D6EDF1] hover:text-black  hover:border-0 transition duration-500 ease-in-out transform hover:scale-95">Know
                                more</button>
                        </div>
                    </div>
                    <div
                        class="w-full h-[272px] md:h-56 bg-gray-200 grid grid-cols-2 justify-center gap-4 items-center rounded-xl">
                        <img class="w-full h-[272px] md:h-56 rounded-l-xl" src="https://fliqaindia.com/assets/pre-weeding-5b543db7.jpg"
                            alt="weeding" />
                        <div class="mr-4">
                            <h1 class="text-2xl font-bold tracking-wider text-secondary">Pre-Weeding</h1>
                            <p class="text-sm font-medium tracking-wide my-2">Capture the joy and anticipation of
                                your journey together with our pre-wedding photography that tells the story of your
                                love.</p><button
                                    class="py-2 px-4 text-sm bg-[#2f6e7a] text-white rounded-lg tracking-wide text-secondary font-bold hover:bg-[#D6EDF1] hover:text-black  hover:border-0 transition duration-500 ease-in-out transform hover:scale-95">Know
                                more</button>
                        </div>
                    </div>
                </div>
                <div class="mt-2 md:mt-6 grid md:grid-cols-2 gap-2 md:gap-4">
                    <div
                        class="w-full h-[272px] md:h-56 bg-gray-200 grid grid-cols-2 justify-center gap-4 items-center rounded-xl">
                        <img class="w-full h-[272px] md:h-56 rounded-l-xl" src="https://fliqaindia.com/assets/product-274521be.jpg"
                            alt="weeding" />
                        <div class="mr-4">
                            <h1 class="text-2xl font-bold tracking-wider text-secondary">Product Shoot</h1>
                            <p class="text-sm font-medium tracking-wide my-2"> Bring your products to life and stand
                                out in the market with our compelling and professional product photography services.
                            </p><button
                                class="py-2 px-4 text-sm bg-[#2f6e7a] text-white rounded-lg tracking-wide text-secondary font-bold hover:bg-[#D6EDF1] hover:text-black  hover:border-0 transition duration-500 ease-in-out transform hover:scale-95">Know
                                more</button>
                        </div>
                    </div>
                    <div
                        class="w-full h-[272px] md:h-56 bg-gray-200 grid grid-cols-2 justify-center gap-4 items-center rounded-xl">
                        <img class="w-full h-[272px] md:h-56 rounded-l-xl" src="https://fliqaindia.com/assets/ui-ux-9e08a855.jpg"
                            alt="weeding" />
                        <div class="mr-4">
                            <h1 class="text-2xl font-bold tracking-wider text-secondary">UI/UX Design</h1>
                            <p class="text-sm font-medium tracking-wide my-2">Transform user experiences and
                                interface design with our innovative UI/UX solutions that blend creativity with
                                functionality.</p><button
                                    class="py-2 px-4 text-sm bg-[#2f6e7a] text-white rounded-lg tracking-wide text-secondary font-bold hover:bg-[#D6EDF1] hover:text-black  hover:border-0 transition duration-500 ease-in-out transform hover:scale-95">Know
                                more</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* ............................. */}

            <div className="my-container">
                <div className="text-center text-[26px] md:text-3xl lg:text-4xl xl:text-3xl font-semibold tracking-wider">
                    Real Wedding
                </div>
                <section className="grid lg:grid-cols-4 gap-4 justify-items-center py-4 lg:pt-6">
                    <a className="bg-[#e6ebec] pb-2 rounded-lg mb-2 w-full" href="/event/wedding">
                        <div className="w-full">
                            <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{
                                    color: 'transparent',
                                    display: 'inline-block',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <img alt="Real Wedding Image" className="h-[240px] w-full rounded-t-xl object-cover object-top"
                                    src="https://fliqaindia.com/assets/image3-dc456cfd.jpg"
                                    width="100%" height="100%" />
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                            <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{
                                    color: 'transparent',
                                    display: 'inline-block',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <img alt="Real Wedding Image" className="h-[80px] w-full object-cover object-top"
                                    src="https://fliqaindia.com/assets/image2-135a50a2.jpg" width="100%" height="100%" />
                            </span>
                            <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{
                                    color: 'transparent',
                                    display: 'inline-block',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <img alt="Real Wedding Image" className="h-[80px] w-full object-cover object-top"
                                    src="https://fliqaindia.com/assets/image3-dc456cfd.jpg" width="100%" height="100%" />
                            </span>
                            <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{
                                    color: 'transparent',
                                    display: 'inline-block',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <img alt="Real Wedding Image" className="h-[80px] w-full object-cover object-top"
                                    src="https://fliqaindia.com/assets/image4-aefb19a4.jpg" width="100%" height="100%" />
                            </span>
                        </div>
                        <h1 className="pt-2 text-center text-[#1B627C] font-semibold tracking-wider text-md uppercase my-auto">
                            Sayantani &amp; Suman
                        </h1>
                    </a>
                    {/* Repeat the structure for other sections */}
                    <a className="bg-[#e6ebec] pb-2 rounded-lg mb-2 w-full" href="/event/wedding">
                        <div className="w-full">
                            <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{
                                    color: 'transparent',
                                    display: 'inline-block',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <img alt="Real Wedding Image" className="h-[240px] w-full rounded-t-xl object-cover object-top"
                                    src="https://fliqaindia.com/assets/image2-135a50a2.jpg"
                                    width="100%" height="100%" />
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                            <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{
                                    color: 'transparent',
                                    display: 'inline-block',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <img alt="Real Wedding Image" className="h-[80px] w-full object-cover object-top"
                                    src="https://fliqaindia.com/assets/image5-ee1546fd.jpg" width="100%" height="100%" />
                            </span>
                            <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{
                                    color: 'transparent',
                                    display: 'inline-block',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <img alt="Real Wedding Image" className="h-[80px] w-full object-cover object-top"
                                    src="https://fliqaindia.com/assets/image7-2489de04.jpg" width="100%" height="100%" />
                            </span>
                            <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{
                                    color: 'transparent',
                                    display: 'inline-block',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <img alt="Real Wedding Image" className="h-[80px] w-full object-cover object-top"
                                    src="https://fliqaindia.com/assets/image6-55f94ca4.jpg" width="100%" height="100%" />
                            </span>
                        </div>
                        <h1 className="pt-2 text-center text-[#1B627C] font-semibold tracking-wider text-md uppercase my-auto">
                            Rani &amp; Raja
                        </h1>
                    </a>
                    <a className="bg-[#e6ebec] pb-2 rounded-lg mb-2 w-full" href="/event/wedding">
                        <div className="w-full">
                            <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{
                                    color: 'transparent',
                                    display: 'inline-block',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <img alt="Real Wedding Image" className="h-[240px] w-full rounded-t-xl object-cover object-top"
                                    src="https://fliqaindia.com/assets/image10-4ed8c424.jpg"
                                    width="100%" height="100%" />
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                            <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{
                                    color: 'transparent',
                                    display: 'inline-block',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <img alt="Real Wedding Image" className="h-[80px] w-full object-cover object-top"
                                    src="https://fliqaindia.com/assets/image12-ed3a26a9.jpg" width="100%" height="100%" />
                            </span>
                            <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{
                                    color: 'transparent',
                                    display: 'inline-block',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <img alt="Real Wedding Image" className="h-[80px] w-full object-cover object-top"
                                    src="https://fliqaindia.com/assets/image9-3ea8ebd0.jpg" width="100%" height="100%" />
                            </span>
                            <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{
                                    color: 'transparent',
                                    display: 'inline-block',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <img alt="Real Wedding Image" className="h-[80px] w-full object-cover object-top"
                                    src="https://fliqaindia.com/assets/image11-9bc2c1c4.jpg" width="100%" height="100%" />
                            </span>
                        </div>
                        <h1 className="pt-2 text-center text-[#1B627C] font-semibold tracking-wider text-md uppercase my-auto">
                            Sonam &amp; Rohit
                        </h1>
                    </a>
                    <a className="bg-[#e6ebec] pb-2 rounded-lg mb-2 w-full" href="/event/wedding">
                        <div className="w-full">
                            <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{
                                    color: 'transparent',
                                    display: 'inline-block',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <img alt="Real Wedding Image" className="h-[240px] w-full rounded-t-xl object-cover object-top"
                                    src="https://fliqaindia.com/assets/image13-5262ac0e.jpg"
                                    width="100%" height="100%" />
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                            <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{
                                    color: 'transparent',
                                    display: 'inline-block',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <img alt="Real Wedding Image" className="h-[80px] w-full object-cover object-top"
                                    src="https://fliqaindia.com/assets/image14-3e5f5665.jpg" width="100%" height="100%" />
                            </span>
                            <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{
                                    color: 'transparent',
                                    display: 'inline-block',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <img alt="Real Wedding Image" className="h-[80px] w-full object-cover object-top"
                                    src="https://fliqaindia.com/assets/image15-74dd2936.jpg" width="100%" height="100%" />
                            </span>
                            <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{
                                    color: 'transparent',
                                    display: 'inline-block',
                                    height: '100%',
                                    width: '100%'
                                }}>
                                <img alt="Real Wedding Image" className="h-[80px] w-full object-cover object-top"
                                    src="https://fliqaindia.com/assets/image16-c68cc4da.jpg" width="100%" height="100%" />
                            </span>
                        </div>
                        <h1 className="pt-2 text-center text-[#1B627C] font-semibold tracking-wider text-md uppercase my-auto">
                            Pooja &amp; Dinesh
                        </h1>
                    </a>
                </section>
            </div>

            {/* ................................... */}

            <div className="my-container">
                <div className="text-center text-[26px] md:text-3xl lg:text-4xl xl:text-3xl font-semibold tracking-wider">
                    Courses
                </div>
                <section className="grid lg:grid-cols-5 gap-6 justify-items-center py-4">
                    <a className="bg-[#D6EDF1] pb-2 rounded-lg mb-2 w-full" href="/learning">
                        <div className="rounded-xl" style={{ overflow: 'hidden', display: 'flex', gap: '20px' }}>
                            <div className="w-full duration-500 transition-all ease-linear hover:scale-110 object-cover object-top block">
                                <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                    style={{ color: 'transparent', display: 'inline-block', height: '100%', width: '100%' }}>
                                    <img alt="Course image" className="h-[280px] md:h-[240px] w-full rounded-xl"
                                        src="https://fliqaindia.com/assets/image9-3ea8ebd0.jpg"
                                        width="100%" height="100%" />
                                </span>
                            </div>
                        </div>
                        <h1 className="pt-2 uppercase text-center text-[#1B627C] font-semibold tracking-wider text-md my-auto">
                            PHOTOGRAPHY
                        </h1>
                    </a>
                    {/* Repeat the structure for other courses */}
                    <a className="bg-[#D6EDF1] pb-2 rounded-lg mb-2 w-full" href="/learning">
                        <div className="rounded-xl" style={{ overflow: 'hidden', display: 'flex', gap: '20px' }}>
                            <div className="w-full duration-500 transition-all ease-linear hover:scale-110 object-cover object-top block">
                                <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                    style={{ color: 'transparent', display: 'inline-block', height: '100%', width: '100%' }}>
                                    <img alt="Course image" className="h-[280px] md:h-[240px] w-full rounded-xl"
                                        src="https://fliqaindia.com/assets/image5-ee1546fd.jpg"
                                        width="100%" height="100%" />
                                </span>
                            </div>
                        </div>
                        <h1 className="pt-2 uppercase text-center text-[#1B627C] font-semibold tracking-wider text-md my-auto">
                            PHOTOGRAPHY
                        </h1>
                    </a>
                    <a className="bg-[#D6EDF1] pb-2 rounded-lg mb-2 w-full" href="/learning">
                        <div className="rounded-xl" style={{ overflow: 'hidden', display: 'flex', gap: '20px' }}>
                            <div className="w-full duration-500 transition-all ease-linear hover:scale-110 object-cover object-top block">
                                <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                    style={{ color: 'transparent', display: 'inline-block', height: '100%', width: '100%' }}>
                                    <img alt="Course image" className="h-[280px] md:h-[240px] w-full rounded-xl"
                                        src="https://fliqaindia.com/assets/image12-ed3a26a9.jpg"
                                        width="100%" height="100%" />
                                </span>
                            </div>
                        </div>
                        <h1 className="pt-2 uppercase text-center text-[#1B627C] font-semibold tracking-wider text-md my-auto">
                            Videography
                        </h1>
                    </a>
                    <a className="bg-[#D6EDF1] pb-2 rounded-lg mb-2 w-full" href="/learning">
                        <div className="rounded-xl" style={{ overflow: 'hidden', display: 'flex', gap: '20px' }}>
                            <div className="w-full duration-500 transition-all ease-linear hover:scale-110 object-cover object-top block">
                                <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                    style={{ color: 'transparent', display: 'inline-block', height: '100%', width: '100%' }}>
                                    <img alt="Course image" className="h-[280px] md:h-[240px] w-full rounded-xl"
                                        src="https://fliqaindia.com/assets/image8-1ebab030.jpg"
                                        width="100%" height="100%" />
                                </span>
                            </div>
                        </div>
                        <h1 className="pt-2 uppercase text-center text-[#1B627C] font-semibold tracking-wider text-md my-auto">
                            Cinematography
                        </h1>
                    </a>
                    <a className="bg-[#D6EDF1] pb-2 rounded-lg mb-2 w-full" href="/learning">
                        <div className="rounded-xl" style={{ overflow: 'hidden', display: 'flex', gap: '20px' }}>
                            <div className="w-full duration-500 transition-all ease-linear hover:scale-110 object-cover object-top block">
                                <span className="lazy-load-image-background blur lazy-load-image-loaded"
                                    style={{ color: 'transparent', display: 'inline-block', height: '100%', width: '100%' }}>
                                    <img alt="Course image" className="h-[280px] md:h-[240px] w-full rounded-xl"
                                        src="https://fliqaindia.com/assets/image2-135a50a2.jpg"
                                        width="100%" height="100%" />
                                </span>
                            </div>
                        </div>
                        <h1 className="pt-2 uppercase text-center text-[#1B627C] font-semibold tracking-wider text-md my-auto">
                            ANIMATION
                        </h1>
                    </a>
                </section>
                <div className="flex justify-center">
                    <a className="sign-up bg-secondary font-[Inter] text-white rounded-full p-2 sm:inline-block hidden text-xl tracking-wider hover:bg-[#1c3b47] hover:border-0 transition duration-500 ease-in-out transform hover:scale-95 "
                        href="/learning">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z" />
                        </svg>
                    </a>
                </div>
            </div>


            {/* ........................ */}
            <div data-aos="" data-aos-easing="ease-in-back" data-aos-offset="0" class="my-container aos-init">
                <div class="text-center text-[26px] md:text-3xl lg:text-4xl xl:text-3xl font-semibold tracking-wider">Blogs</div>
                <div>
                    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-10 mb-4">
                        <div>
                            <div class="w-full object-cover object-top block">
                                <img alt="Capturing Photos in different styles" effect="blur" class="rounded-xl h-48"
                                    src="https://i.ibb.co/xXsRHRc/photography-2.jpg" width="100%" height="100%" />
                            </div>
                            <h1 class="text-xl font-semibold lg:tracking-wide lg:mt-3 my-1 line-clamp-2">Capturing Photos in different styles</h1>
                            <p class="lg:mt-4 font-medium tracking-normal text-gray-500 line-clamp-3">The word photography means 'drawing with light,' which derives from the Greek photo, meaning light, and graph, meaning to draw. Photography is the process of recording an image – a photograph – on light-sensitive film or, in the case of digital Photography, via a digital electronic or magnetic memory.</p>
                        </div>
                        <div>
                            <div class="w-full object-cover object-top block">
                                <img alt=" Basic Post-Processing Tips to Instantly Improve Your Photos" effect="blur"
                                    class="rounded-xl h-48" src="https://i.ibb.co/FzYPcx8/photography-1.jpg" width="100%"
                                    height="100%" />
                            </div>
                            <h1 class="text-xl font-semibold lg:tracking-wide lg:mt-3 my-1 line-clamp-2"> Basic Post-Processing Tips to Instantly Improve Your Photos</h1>
                            <p class="lg:mt-4 font-medium tracking-normal text-gray-500 line-clamp-3">Photography post-processing opens up the enormous potential for transforming an image, whether to make it just as vivid as you remember or something that even defies the laws of gravity. Digging up tutorials on specific photo edits is excellent, but understanding photography post-processing techniques allow even rookies to learn concepts that can apply to any image.</p>
                        </div>
                        <div>
                            <div class="w-full object-cover object-top block">
                                <img alt="Basic Post-Processing Tips to Instantly Improve Your Photos" effect="blur"
                                    class="rounded-xl h-48" src="https://i.ibb.co/NLkT2QB/photography-3.jpg" width="100%"
                                    height="100%" />
                            </div>
                            <h1 class="text-xl font-semibold lg:tracking-wide lg:mt-3 my-1 line-clamp-2">Basic Post-Processing Tips to Instantly Improve Your Photos</h1>
                            <p class="lg:mt-4 font-medium tracking-normal text-gray-500 line-clamp-3">Light plays a vital role in photography. Photography is an image created by light falling on a photo-sensitive surface, usually photographic film or an electronic image sensor. Photography is the skill of clicking photos creatively.</p>
                        </div>
                        <div>
                            <div class="w-full object-cover object-top block">
                                <img alt="Composition and Perspective of the Photography" effect="blur"
                                    class="rounded-xl h-48" src="https://i.ibb.co/7jbrTrm/photography-4.jpg" width="100%"
                                    height="100%" />
                            </div>
                            <h1 class="text-xl font-semibold lg:tracking-wide lg:mt-3 my-1 line-clamp-2">Composition and Perspective of the Photography</h1>
                            <p class="lg:mt-4 font-medium tracking-normal text-gray-500 line-clamp-3">Composition in photography is defined as positioning the objects in the frame so that the viewer's eye is automatically drawn to the most exciting or significant area of the capture.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* ................... */}
            <div>
                <div class="my-container relative pb-8">
                    <div class="">
                        <div>
                            <h2 class="text-3xl text-center md:text-3xl font-semibold tracking-wider pt-7 md:pt-8">
                                Client Testimonial
                            </h2>
                        </div>
                    </div>
                    <div class="py-6 grid lg:grid-cols-5 gap-6">
                        <div class="w-full h-[340px] md:h-[282px] relative">
                            <div class="object-cover object-top block w-full h-full">
                                <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block', height: '100%', width: '100%' }}>
                                    <img alt="review-client-img" class="object-cover h-[340px] md:h-[300px] object-top block rounded-xl w-full " src="https://fliqaindia.com/assets/weeding-d70605a3.jpg" width="100%" height="100%" />
                                </span>
                            </div>
                            <div class="absolute top-3/4 left-2.5">
                                <h1 class="text-lg font-semibold tracking-widest text-white">Aditya</h1>
                            </div>
                            <p class="badge p-4 left-2 absolute top-[85%] uppercase text-md font-bold text-[#1B627C] bg-[#D6EDF1]">wedding</p>
                            <label for="my_modal_6" type="button" class="btn btn-circle btn-outline absolute top-[80%] right-3 bg-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </label>
                        </div>

                        <div class="w-full h-[340px] md:h-[282px] relative">
                            <div class="object-cover object-top block w-full h-full">
                                <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block', height: '100%', width: '100%' }}>
                                    <img alt="review-client-img" class="object-cover h-[340px] md:h-[300px] object-top block rounded-xl w-full " src="https://fliqaindia.com/assets/pre-weeding-5b543db7.jpg" width="100%" height="100%" />
                                </span>
                            </div>
                            <div class="absolute top-3/4 left-2.5">
                                <h1 class="text-lg font-semibold tracking-widest text-white">Aditya</h1>
                            </div>
                            <p class="badge p-4 left-2 absolute top-[85%] uppercase text-md font-bold text-[#1B627C] bg-[#D6EDF1]">wedding</p>
                            <label for="my_modal_6" type="button" class="btn btn-circle btn-outline absolute top-[80%] right-3 bg-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </label>
                        </div>
                        <div class="w-full h-[340px] md:h-[282px] relative">
                            <div class="object-cover object-top block w-full h-full">
                                <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block', height: '100%', width: '100%' }}>
                                    <img alt="review-client-img" class="object-cover h-[340px] md:h-[300px] object-top block rounded-xl w-full " src="https://fliqaindia.com/assets/image3-dc456cfd.jpg" width="100%" height="100%" />
                                </span>
                            </div>
                            <div class="absolute top-3/4 left-2.5">
                                <h1 class="text-lg font-semibold tracking-widest text-white">Aditya</h1>
                            </div>
                            <p class="badge p-4 left-2 absolute top-[85%] uppercase text-md font-bold text-[#1B627C] bg-[#D6EDF1]">wedding</p>
                            <label for="my_modal_6" type="button" class="btn btn-circle btn-outline absolute top-[80%] right-3 bg-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </label>
                        </div>
                        <div class="w-full h-[340px] md:h-[282px] relative">
                            <div class="object-cover object-top block w-full h-full">
                                <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block', height: '100%', width: '100%' }}>
                                    <img alt="review-client-img" class="object-cover h-[340px] md:h-[300px] object-top block rounded-xl w-full " src="https://fliqaindia.com/assets/image7-2489de04.jpg" width="100%" height="100%" />
                                </span>
                            </div>
                            <div class="absolute top-3/4 left-2.5">
                                <h1 class="text-lg font-semibold tracking-widest text-white">Aditya</h1>
                            </div>
                            <p class="badge p-4 left-2 absolute top-[85%] uppercase text-md font-bold text-[#1B627C] bg-[#D6EDF1]">wedding</p>
                            <label for="my_modal_6" type="button" class="btn btn-circle btn-outline absolute top-[80%] right-3 bg-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </label>
                        </div>
                        <div class="w-full h-[340px] md:h-[282px] relative">
                            <div class="object-cover object-top block w-full h-full">
                                <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block', height: '100%', width: '100%' }}>
                                    <img alt="review-client-img" class="object-cover h-[340px] md:h-[300px] object-top block rounded-xl w-full " src="https://fliqaindia.com/assets/image7-2489de04.jpg" width="100%" height="100%" />
                                </span>
                            </div>
                            <div class="absolute top-3/4 left-2.5">
                                <h1 class="text-lg font-semibold tracking-widest text-white">Aditya</h1>
                            </div>
                            <p class="badge p-4 left-2 absolute top-[85%] uppercase text-md font-bold text-[#1B627C] bg-[#D6EDF1]">wedding</p>
                            <label for="my_modal_6" type="button" class="btn btn-circle btn-outline absolute top-[80%] right-3 bg-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </label>
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" id="my_modal_6" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box w-11/12 max-w-2xl h-96 p-10">
                                <div style={{ width: '100%', height: '100%' }}></div>
                                <label for="my_modal_6" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* .............................. */}

            <div class="my-container lg:py-6">
                <div
                    class="text-center text-[26px] md:text-3xl lg:text-4xl xl:text-3xl font-semibold tracking-wider">
                    More Creative Services</div>
                <section class="mt-6">
                    <div><span class="text-2xl font-bold">By Categories</span></div>
                    <div
                        class="space-y-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 justify-center items-center mt-4">
                        <a class="text-base font-semibold tracking-wider hover:text-secondary"
                            href="/event/wedding">Wedding</a><a
                                class="text-base font-semibold tracking-wider hover:text-secondary"
                                href="/event/wedding">Pre-Wedding</a><a
                                    class="text-base font-semibold tracking-wider hover:text-secondary"
                                    href="/event/ProductShoot">Product</a><a
                                        class="text-base font-semibold tracking-wider hover:text-secondary"
                                        href="/event/BirthdayShoot">Birthday</a><a
                                            class="text-base font-semibold tracking-wider hover:text-secondary"
                                            href="/event/PortfolioShoot">Portfolio</a><a
                                                class="text-base font-semibold tracking-wider hover:text-secondary"
                                                href="/">Anniversery</a><a
                                                    class="text-base font-semibold tracking-wider hover:text-secondary"
                                                    href="/event/PreWedding">Couple</a><a
                                                        class="text-base font-semibold tracking-wider hover:text-secondary"
                                                        href="/event/FashionShoot">Fashion</a><a
                                                            class="text-base font-semibold tracking-wider hover:text-secondary"
                                                            href="/event">Event</a><a
                                                                class="text-base font-semibold tracking-wider hover:text-secondary"
                                                                href="/photography24x7/corporate-shoot">Corporate</a><a
                                                                    class="text-base font-semibold tracking-wider hover:text-secondary"
                                                                    href="/photography24x7/drone-videos">Drone</a><a
                                                                        class="text-base font-semibold tracking-wider hover:text-secondary"
                                                                        href="/photography24x7/model-shoot">Maternity</a><a
                                                                            class="text-base font-semibold tracking-wider hover:text-secondary"
                                                                            href="/event/TravelShoot">Animated Video</a><a
                                                                                class="text-base font-semibold tracking-wider hover:text-secondary"
                                                                                href="/photography24x7/full-day-services">Logo Design</a><a
                                                                                    class="text-base font-semibold tracking-wider hover:text-secondary"
                                                                                    href="/photography24x7/half-day-services">Poster &amp; Banner</a><a
                                                                                        class="text-base font-semibold tracking-wider hover:text-secondary"
                                                                                        href="/photography24x7/under-water-shoot">Website Design</a></div>
                </section>
            </div>
            <div class="my-container mb-4">
                <div><span class="text-2xl font-bold">Travel &amp; Tourism</span></div>
                <section>
                    <div
                        class="space-y-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-1 justify-center items-center mt-4">
                        <p><a class="text-base font-semibold tracking-wider" href="/photographer/Mumbai">Mumbai</a>
                        </p>
                        <p><a class="text-base font-semibold tracking-wider"
                            href="/photographer/Kolkata">Kolkata</a></p>
                        <p><a class="text-base font-semibold tracking-wider" href="/photographer/Delhi">Delhi</a>
                        </p>
                        <p><a class="text-base font-semibold tracking-wider"
                            href="/photographer/Chennai">Chennai</a></p>
                        <p><a class="text-base font-semibold tracking-wider"
                            href="/photographer/Bangalore">Bangalore</a></p>
                        <p><a class="text-base font-semibold tracking-wider"
                            href="/photographer/Hyderabad">Hyderabad</a></p>
                        <p><a class="text-base font-semibold tracking-wider"
                            href="/photographer/Ahmedabad">Ahmedabad</a></p>
                        <p><a class="text-base font-semibold tracking-wider" href="/photographer/Pune">Pune</a></p>
                        <p><a class="text-base font-semibold tracking-wider" href="/photographer/Agra">Agra</a></p>
                        <p><a class="text-base font-semibold tracking-wider" href="/photographer/Jaipur">Jaipur</a>
                        </p>
                        <p><a class="text-base font-semibold tracking-wider" href="/photographer/Goa">Goa</a></p>
                        <p><a class="text-base font-semibold tracking-wider"
                            href="/photographer/Darjeeling">Darjeeling</a></p>
                        <p><a class="text-base font-semibold tracking-wider" href="/photographer/Manali">Manali</a>
                        </p>
                        <p><a class="text-base font-semibold tracking-wider"
                            href="/photographer/Varanasi">Varanasi</a></p>
                        <p><a class="text-base font-semibold tracking-wider" href="/photographer/Munnar">Munnar</a>
                        </p>
                    </div>
                    <div class="flex justify-center items-center mt-8"><button
                        class="py-2 px-6 text-sm bg-[#D6EDF1] rounded-lg tracking-wide text-secondary font-bold hover:bg-[#2f6e7a] hover:text-white hover:border-0 transition duration-500 ease-in-out transform hover:scale-95">Show
                        More</button></div>
                </section>
            </div><input type="checkbox" id="close-modal" class="modal-toggle"></input>
            {/* ....................................... */}

            <div class="pt-10">
                <div class="divider">
                    <div class="border-2 border-gray-700 rounded-full p-2">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="35" width="35" xmlns="http://www.w3.org/2000/svg">
                            <polygon fill="#FF9800" points="24,37 19,31 19,25 29,25 29,31"></polygon>
                            <g fill="#FFA726">
                                <circle cx="33" cy="19" r="2"></circle>
                                <circle cx="15" cy="19" r="2"></circle>
                            </g>
                            <path fill="#FFB74D" d="M33,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C33,18.9,33,14.1,33,13z"></path>
                            <path fill="#424242" d="M24,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H24z"></path>
                            <g fill="#784719">
                                <circle cx="28" cy="19" r="1"></circle>
                                <circle cx="20" cy="19" r="1"></circle>
                            </g>
                            <polygon fill="#fff" points="24,43 19,31 24,32 29,31"></polygon>
                            <polygon fill="#D32F2F" points="23,35 22.3,39.5 24,43.5 25.7,39.5 25,35 26,34 24,32 22,34"></polygon>
                            <path fill="#546E7A" d="M29,31L29,31l-5,12l-5-12c0,0-11,2-11,13h32C40,33,29,31,29,31z"></path>
                        </svg>
                    </div>
                </div>
                <div class="text-center my-10">
                    <a class="text-lg font-semibold mb-2 tracking-wider" href="/contact-">Contact a Creative Expert for Free <br /> <span class="font-medium">We'd love to assist you!</span></a>
                    <a href="tel:+919641817485" class="text-secondary font-semibold text-lg tracking-wider flex gap-2 items-center justify-center mt-4">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                        </svg>
                        Call +91 96418 17485
                    </a>
                </div>
            </div>
        </>
    );
}

export default Section;
