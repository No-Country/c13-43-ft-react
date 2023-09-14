import Image from "next/image";
import React from "react";

export const ModalVoteFail = () => {
    return (
        <main className="p-6">
            <div className="flex items-center justify-center">
                <Image
                    src="/Images/exclamation.svg"
                    width={50}
                    height={50}
                    alt="cerrar"
                    className="mb-6"
                />
            </div>
            <h1 className="text-red-600 font-dmsans font-bold text-3xl mb-4 text-center">
                {" "}
                No puedes volver a votar{" "}
            </h1>
        </main>
    );
};
