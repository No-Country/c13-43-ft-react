import React from 'react' 
import Image from 'next/image'

const ContactUs = () => {
    return (
        <section className='flex justify-center items-center mt-20 font-dmsans'>
            <div className="flex flex-col md:flex-row gap-20 mx-4 w-full">
                <div className="flex justify-center md:w-1/2 mx-4">
                    <form className=" bg-secondaryGray flex flex-col gap-4 w-full md:w-3/4 md:ml-auto p-8 rounded-2xl shadow-xl">
                        <input className="py-2 px-4 rounded-3xl text-tertiaryGray placeholder-tertiaryGray" type="text"  placeholder="Nombre y Apellido" />
                        <input className="py-2 px-4 rounded-3xl text-tertiaryGray placeholder-tertiaryGray" type="text"  placeholder="Example@mail.com" />
                        <input className="py-2 px-4 rounded-3xl text-tertiaryGray placeholder-tertiaryGray" type="text"  placeholder="(123) 456 7890" />
                        <textarea className="py-2 px-4 rounded-xl text-tertiaryGray placeholder-tertiaryGray" name="" id="" cols="35" rows="3" placeholder="Ingresa tu mensaje aquí"></textarea>
                        <button className="rounded-3xl w-full p-3 mt-4  bg-primaryPurple font-bold text-secondaryWhite uppercase"> Enviar </button>
                    </form>
                </div>
                <div className="flex flex-col items-center mb-8 md:items-start md:w-1/2 gap-3">
                    <h2 className="font-bold text-secondaryBlack"> CONTACTO </h2>
                    <h1 className="font-bold text-primaryOrange text-4xl">Hablemos hoy</h1>
                    <div className="flex flex-col items-center md:items-start gap-5">
                        <span className="text-center md:text-start mb-4 text-lg w-4/6"> Lorem ipsum dolor sit consectetur adipiscing elit nulla adipiscing tincidung interdum tellus </span>
                        <div className='flex flex-col gap-5'>
                            <div className="flex gap-2 items-center">
                                <Image className='h-fit' src="/Images/contact/Email.png" width={20} height={20} alt="Mail.png" />
                                <span className="text-lg"> contact@votechoice.com </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image className='h-fit' src="/Images/contact/Phone.png" width={20} height={20} alt="Phone.png" />
                                <span className="text-lg"> (123) 456 7890 </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image className='h-fit' src="/Images/contact/Mark.png" width={20} height={20}  alt="Mark.png" />
                                <span className="text-lg"> 794 Lorem Ipsum St, 94102 </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs