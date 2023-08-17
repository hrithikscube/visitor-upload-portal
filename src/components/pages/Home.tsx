import React, { Fragment, useRef, useState } from 'react'
import person from '../../assets/images/person.svg'

const Home = () => {
    // file to be sent 
    const [image, setImage] = useState() as any

    const [previewImage, setPreviewImage] = useState() as any

    // when file is uploaded
    const [isUpload, setIsUpload] = useState(false)

    // completion flag
    const [done, setDone] = useState(false)

    const inputRef = useRef() as any

    const onFilechange = (e: any) => {
        /*Selected files data can be collected here.*/
        // console.log(e.target.files[0]);
        console.log(e)
        console.log(e.target.files[0])
        setIsUpload(true)
        setImage(e.target.files[0])
        setPreviewImage(URL.createObjectURL(e.target.files[0]))

    }
    const onBtnClick = () => {
        /*Collecting node-element and performing click*/
        inputRef.current.click();
    }

    return (
        <Fragment>
            {
                !done ?
                    <div className='h-screen flex flex-col justify-center items-center bg-white mx-5'>
                        <h1 className='lg:text-[22px] text-lg font-nunitoBold text-black text-center'>Hi, Upload your Face image here.</h1>

                        <div className='containerBg lg:w-[620px] lg:h-[560px] lg:p-10 p-5 lg:mt-[50px] mt-2 flex flex-col lg:justify-between lg:gap-0 gap-3'>

                            <div className='flex flex-col justify-center items-center'>
                                {
                                    isUpload ?
                                        <img src={previewImage ?? person} alt={person} className='w-[150px] h-[150px] rounded-full object-cover' /> : <img src={person} alt={person} />
                                }
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <input ref={inputRef} onChange={onFilechange} type="file" className='hidden' id='inputAvatar' />
                                <button onClick={onBtnClick} className='text-white text-sm font-nunitoMedium bg-[#FF8059] rounded-lg h-[40px] px-10'>{isUpload ? 'Upload Again' : 'Choose Image'}</button>
                            </div>

                            <div className='border-b-2 border-[#E1E3E7]' />

                            <div className='flex flex-col gap-2'>
                                <h2 className='underline text-sm font-nunitoBold'>Image Guidelines:</h2>
                                <p className='text-sm font-nunitoMedium'>1. Format: <span className='text-[#FF8059]'>JPEG or PNG.</span></p>
                                <p className='text-sm font-nunitoMedium'>2. File Size: <span className='text-[#FF8059]'>Up to 1MB.</span></p>
                                <p className='text-sm font-nunitoMedium'>3. The image should be a clear, recent, and full-face photograph.</p>
                                <p className='text-sm font-nunitoMedium'>4. Avoid wearing sunglasses, hats, or any other accessories <br /> that may obstruct facial features.</p>
                                <p className='text-sm font-nunitoMedium'>5. The image should be well-lit and in focus.</p>
                            </div>

                            {
                                isUpload && (
                                    <Fragment>
                                        <div className='border-b-2 border-[#E1E3E7]' />
                                        <div className='flex flex-col justify-center items-center'>
                                            <button onClick={() => setDone(true)} className='text-black border border-black text-sm font-nunitoMedium bg-none rounded-lg h-[40px] px-5'>Done</button>
                                        </div>
                                    </Fragment>
                                )
                            }

                        </div>
                    </div> :
                    <div className='h-screen flex flex-col justify-center items-center bg-white'>
                        <h1 className='text-[22px] font-nunitoBold text-black'>Thank you!</h1>

                        <div className='containerBg lg:w-[752px] lg:p-10 p-5 lg:mt-[50px] mt-2 flex flex-col justify-between mx-5'>

                            <div className='flex flex-col gap-2 lg:w-[632px]'>
                                <h2 className='underline text-sm font-nunitoBold'>What’s Next:</h2>
                                <p className='text-sm font-nunitoMedium'>Rest assured that your uploaded image will be used solely for identification purposes during your visit. It will be securely stored and accessible only to authorized personnel responsible for managing office access.</p>
                                <p className='text-sm font-nunitoMedium'>If you have any questions or concerns regarding your upcoming visit or the uploaded image, please feel free to contact our support team at support@scube.me..</p>
                                <p className='text-sm font-nunitoMedium'>We look forward to welcoming you to our premises and hope you have a pleasant experience.</p>
                            </div>

                        </div>
                    </div>
            }

        </Fragment>
    )
}

export default Home