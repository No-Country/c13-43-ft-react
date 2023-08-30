"use client";
import ImagePrincipal from "@/components/ImagePrincipal";
import Password from "@/components/Password";
import React from "react";
//import { GoogleButton } from "@/components/GoogleButton";
//import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const login = () => {
  // const { data: session } = useSession();
  const router = useRouter();
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const signInResponse = await signIn("credentials", {
      email: data.get("email"),
      password: data.get("password"),
      redirect: false,
    });

    if (signInResponse && !signInResponse.error) {
      router.push("/login/1234");
    } else {
      console.log("Error: ", signInResponse);
      setError("Tu email o contraseña es incorrecto");
    }
  };

  return (
    <div className="flex gap-40 pt-8 pl-32">
      <main className="flex-colum justify-center w-1/2 ">
        <h1 className="text-secondaryBlack text-5xl font-bold font-dmsans flex justify-center">
          {" "}
          Iniciar sesión{" "}
        </h1>
        <div className="relative">
          <form onSubmit={handleSubmit}>
            <div className="my-4 pt-4">
              <label
                className="text-secondaryBlack font-dmsans font-medium"
                htmlFor="email"
              >
                {" "}
                EMAIL{" "}
              </label>
              <input
                className="w-full border-b border-secondaryBlack bg-slate-50 outline-none "
                type="email"
                name="email"
                id="email"
              />
            </div>
            <Password nameLabel="CONTRASEÑA" name="password" />
            <div className="flex justify-start items-center gap-8 pt-1">
              <button className="bg-primaryPurple text-secondaryWhite w-5/12 font-dmsans font-medium py-2 rounded-full">
                {" "}
                INGRESAR{" "}
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center gap-8 pt-4 absolute bottom-0 right-0 w-5/12">
            <button className="text-primaryPurple font-dmsans font-medium border-primaryPurple border rounded-full w-full gap-2 py-1 flex items-center justify-center">
              <picture>
                <img
                  src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                  alt="logoGoogle"
                  className="w-8 h-8 justify-center"
                />
              </picture>
              Entrar con google
            </button>
          </div>
        </div>

        <div className="flex gap-4 my-6">
          <hr className="flex-grow border-secondaryBlack mt-3" />
          <span className="text-secondaryBlack font-dmsans font-medium">
            OR
          </span>
          <hr className="flex-grow border-secondaryBlack mt-3" />
        </div>

        <button className="text-primaryPurple font-dmsans font-medium border-primaryPurple border rounded-full w-full py-2">
          {" "}
          REGISTRATE{" "}
        </button>
      </main>
      {/* {error && <p>{error}</p>} */}
      <ImagePrincipal />
    </div>
  );
};

export default login;
