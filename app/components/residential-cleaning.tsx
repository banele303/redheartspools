"use client";
import React from "react";


import bathroomremodelar from "../../public/bathroom/bathroomi6.jpg"
import shower from "../../public/red-hearts-pools/maintanance2.jpeg"
import bathtub from "../../public/red-hearts-pools/maintanance2.jpeg"
import bathtoShower from "../../public/red-hearts-pools/maintanance2.jpeg"
import aging from "../../public/red-hearts-pools/maintanance2.jpeg"
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import Button from "./ui/button";

export function ResidentialandCommecial() {
    return (
        <div className="">



            <section className="bg-blue-600 py-[2rem]">
                <h3 className="text-white text-[22px]  text-center">White Wash will change the look and feel of your old bathroom with a beautiful custom bath or shower design </h3>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[2rem] px-[2rem]">

                <div className="">
                    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <h3 className="text-[23px] leading-6 text-neutral-600 dark:text-neutral-400 ">
                            Residential Pool Cleaning Service
                        </h3>
                        <p className="text-md leading-7 text-neutral-600 dark:text-neutral-400 py-5">

                        </p>Get ready for the ultimate residential pool service experience in Miami with FloPool. We clean with great care and ensure that every dirt is removed by skimming, vacuuming, and scrubbing the pool surface. We aim to keep your pool free of algae and sparkling. We also maintain the appropriate chemical balance in the water to ensure it remains safe and suitable for swimming. We inspect your equipment so that we can detect any issues in advance and save you from costly repairs in the future.
                        <Button />
                    </BackgroundGradient>
                </div>

                <div className="rounded-[22px] w-full p-4 sm:p-10 ">
                    <Image
                        src={shower}
                        alt="jordans"
                        height="500"
                        width="500"
                        className="object-contain rounded-md"
                    />


                </div>


            </section>




            {/* Secnd Bath*/}

            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[2rem] px-[2rem]">

                <div className="">
                    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <h3 className="text-[23px] leading-6 text-neutral-600 dark:text-neutral-400 ">
                            Partnering With Top Equipment Brands For Your Pool's Best Performance
                        </h3>
                        <p className="text-md leading-7 text-neutral-600 dark:text-neutral-400 py-5">
                            Our Miami Pool Service Company uses equipment from the top-rated brands to ensure your pool functions properly. These brands include Hayward, Pentair, and Jandy. Our range includes pumps, filters, and heaters of the highest quality, such as Pentair UltraTemp High-Performance Heat Pump. These products are made to last and perform perfectly, providing the best performance for your pool. Our professionals know the steps required for equipment selection and installation.
                        </p>
                        <Button />
                    </BackgroundGradient>
                </div>

                <div className="rounded-[22px] w-full p-4 sm:p-10 ">
                    <Image
                        src={bathtoShower}
                        alt="jordans"
                        height="500"
                        width="500"
                        className="object-contain rounded-md"
                    />


                </div>


            </section>
            {/* Thrid Bath*/}

            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[2rem] px-[2rem]">

                <div className="">
                    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <h3 className="text-[23px] leading-6 text-neutral-600 dark:text-neutral-400 ">
                            Bathtub Replacement
                        </h3>
                        <p className="text-md leading-7 text-neutral-600 dark:text-neutral-400 py-5">
                            Spend less time cleaning and more time relaxing with a fresh new bathtub upgrade. Long Bath&apos;s bathtub products are non-porous, antimicrobial and engineered to be mold, mildew, soap scum, rust and stain-resistant.  Our team of experts ensures a seamless installation, transforming your bathing space into a clean and low-maintenance haven that is beautiful, durable and easy to clean.
                        </p>
                        <Button />
                    </BackgroundGradient>
                </div>

                <div className="rounded-[22px] w-full p-4 sm:p-10 ">
                    <Image
                        src={bathtub}
                        alt="jordans"
                        height="500"
                        width="500"
                        className="object-contain rounded-md"
                    />


                </div>


            </section>
            {/* Thrid Bath*/}

            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[2rem] px-[2rem]">

                <div className="">
                    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                        <h3 className="text-[23px] leading-6 text-neutral-600 dark:text-neutral-400 ">
                            Aging in Place
                        </h3>
                        <p className="text-md leading-7 text-neutral-600 dark:text-neutral-400 py-5">
                            Complex drawn out aging in place bathroom remodeling is a thing of the past. With just a few small upgrades, you can make your bathroom more accessible and senior-safe. Long Baths strives to meet each customers unique needs with stylish, durable bath and shower products, designed with safety in mind. Accessibility options such as low threshhold walk-in showers, jetted tubs, grab bars, bench seats, slip-resistant shower bases and walk-in tubs ensure that all customers can bathe safely and comfortably at home.
                        </p>
                        <Button />
                    </BackgroundGradient>
                </div>

                <div className="rounded-[22px] w-full p-4 sm:p-10 ">
                    <Image
                        src={aging}
                        alt="jordans"
                        height="500"
                        width="500"
                        className="object-contain rounded-md"
                    />


                </div>


            </section>




            <section className="bg-blue-600 py-[2rem] flex flex-col justify-center mx-auto md:px-[3rem] px-[1rem] items-center">
                <h3 className="text-white text-[22px] py-4 text-center">So what are you waiting for? CALL NOW or click the button below to get started on your bath or shower remodel today!</h3>
                <Button />
            </section>

        </div>

    );
}