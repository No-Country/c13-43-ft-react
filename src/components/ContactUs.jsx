import React from "react";
import Image from "next/image";

const ContactUs = () => {
<<<<<<< HEAD
  return (
    <div className="contact-us flex justify-between w-3/5 mx-auto mt-28 gap-40">
      <div className="left-contact p-8 bg-secondaryGray rounded-2xl border border-black">
        <form action="" className="contact-form flex flex-col gap-4">
          <input
            className="py-2 px-4 rounded-3xl border border-black"
            type="text"
            placeholder="Nombre y Apellido"
          />
          <input
            className="py-2 px-4 rounded-3xl border border-black"
            type="text"
            placeholder="Example@mail.com"
          />
          <input
            className="py-2 px-4 rounded-3xl border border-black"
            type="text"
            placeholder="(123) 456 7890"
          />
          <textarea
            className="py-2 px-4 rounded-xl border border-black"
            name=""
            id=""
            cols="35"
            rows="3"
            placeholder="Ingresa tu mensaje aquí"
          ></textarea>
          <button className="rounded-3xl w-full h-8 mb-2 bg-primaryPurple font-bold text-secondaryWhite">
            {" "}
            Enviar{" "}
          </button>
        </form>
      </div>
      <div className="right-contact">
        <h2 className="font-bold text-secondaryBlack"> CONTACTO </h2>
        <h1 className="font-bold text-primaryOrange text-3xl mb-4">
          Hablemos hoy
        </h1>
        <div className="flex flex-col gap-3">
          <span className="mb-4">
            {" "}
            Lorem ipsum dolor sit consectetur adipiscing elit nulla adipiscing
            tincidung interdum tellus{" "}
          </span>
          <section className="flex gap-2">
            <Image
              src="/Images/contact/Email.png"
              width={20}
              height={20}
              alt="Mail.png"
            />
            <span className="text-sm"> contact@votechoice.com </span>
          </section>
          <section className="flex gap-2">
            <Image
              src="/Images/contact/Phone.png"
              width={20}
              height={20}
              alt="Phone.png"
            />
            <span className="text-sm"> (123) 456 7890 </span>
          </section>
          <section className="flex gap-2">
            <Image
              src="/Images/contact/Mark.png"
              width={20}
              height={20}
              alt="Mark.png"
            />
            <span className="text-sm"> 794 Lorem Ipsum St, 94102 </span>
          </section>
        </div>
      </div>
    </div>
  );
};
=======
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
>>>>>>> ca4471cab4079011ecc41e973beb90d4247973cf

export default ContactUs;
