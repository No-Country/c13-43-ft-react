import Image from "next/image";
import React from "react";

export const ModalVoteFail = () => {
    return (
        <main className="p-6">
            <div className="flex items-center justify-center">
                <Image
                    src="/Images/closeIcon.png"
                    width={25}
                    height={25}
                    alt="cerrar"
                />
            </div>
            <h1 className="text-red-600 text-3xl text-center font-bold font-dmsans flex justify-center my-6">
                {" "}
                No puedes volver a votar{" "}
            </h1>
        </main>
    );
};
