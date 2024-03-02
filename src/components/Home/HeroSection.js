import Image from 'next/image'
import React from 'react'

export const HeroSection = () => {
    return (
        <div className=''>
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6">
                    <div className="">
                        <img src='/assets/images/6dec8d75-bfc5-45a1-8ed2-79be8f2427ab.webp' className='w-full' alt='' />
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 bg-[#000]">
                    <div className="flex flex-col gap-4 pt-[72px] ">
                        <div className='bg-black text-white relative z-2 flex items-start w-full md:w-[calc(100% + 125px)] md:left-[-125px]'>
                            <div className="md:px-[60px] px-[20px] md:py-[40px] w-full">
                                <h1 className='text-[40px] my-[20px] poppins-semi-bold md:text-[64px] text-[#dee4ec] font-semibold'>
                                    Xaia
                                </h1>
                                <h1 className='text-[40px] my-[20px] poppins-semi-bold md:text-[63px] text-[#dee4ec] font-semibold'>
                                    Custom Peptides
                                </h1>
                                <h1 className='text-[24px] my-[20px] poppins-semi-bold  md:text-[36px] text-[#dee4ec] font-semibold'>
                                    WE SYNTHESIZE PEPTIDES
                                </h1>
                                <h1 className='text-[24px] my-[20px] poppins-semi-bold md:text-[36px] text-[#dee4ec] font-semibold'>
                                    FOR ALL YOUR NEEDS
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="md:px-[120px] px-[20px] md:py-[60px]">
                        <p className='text-[18px] roboto-medium'>
                            XCP produces custom made peptides. The service is especially suitable for researchers who are dealing with multiple samples in projects. The end product is <br /> freeze-dried and will be delivered with a HPLC and mass data sheet by door to door service. The price is determined by the number of L-amino acids in sequence, amount, purification and <br /> modification.
                        </p>
                        <div className='pt-[40px] cursor-pointer'>
                        <Image src='/assets/images/down.png' height={7} width={14} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#dee4ec]">
            <div className="container py-[60px] ">
                <div className="text-center">
                    <h1 className='text-[36px] text-[#323335] font-bold poppins-bold'>
                    Customer Support 
                    </h1>
                    <p className='py-3 text-[18px] text-[#323335] poppins-light  leading-[1.6]'>
                    To serve our customers we provide advice about synthesis strategies, difficult and complex <br /> peptides, peptides up to 100 AA, several disulfide bridges and fluorescent markers in <br /> peptides.
                    </p>
                    <p className='py-3 text-[18px] text-[#323335] poppins-light  leading-[1.6]'>
                    Please feel free to ask for a quote or mail an inquiry to <span className='underline'>info@xaia.nu</span> 
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}
