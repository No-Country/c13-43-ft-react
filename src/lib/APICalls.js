// Descripción: Son funciones que se utilizan para facilitar los llamados a las APIs asociadas a los endpoints que
// garantizan el funcionamiento correcto de la aplicación, se utilizan desde el front para hacer peticiones via APIs


const callURL = "/api/";

//APICalls de User
export const APICreateUser = async (name, email, password) => {
    try {
        const fetching = await fetch(callURL + "signup", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
                name,
            }),
        });
        const response = await fetching.json();
        return response;
    } catch (error) {
        console.error(error);
    }
};
export const APIDeleteUser = async (email) => {
    try {
        const fetching = await fetch(callURL + `deleteUser?email=${email}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const response = await fetching.json();
        return response;
    } catch (error) {
        console.error(error);
    }
};
//APICalls de Room
export const APICreateRoom = async (email, problem, options, expires) => {
    try {
        const fetching = await fetch(`${callURL}createRoom`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                problem,
                options,
                expires,
            }),
        });
        const response = await fetching.json();
        return response;
    } catch (error) {
        console.error(error);
    }
};
export const APIDeleteRoom = async (roomId) => {
    try {
        const fetching = await fetch(callURL + `deleteRoom?roomId=${roomId}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const response = await fetching.json();
        return response;
    } catch (error) {
        console.error(error);
    }
};
export const APIGetInRoom = async (roomId) => {
    try {
        const fetching = await fetch(callURL + `getInRoom?roomId=${roomId}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const response = await fetching.json();
        return response;
    } catch (error) {
        console.error("hola: " + error);
    }
};
export const APIGetResultsLastRoom = async (email) => {
    try {
        const fetching = await fetch(callURL + `getLastRoomResults`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userEmail: email }),
        });
        const response = await fetching.json();
        return response;
    } catch (error) {
        console.error(error);
    }
};
export const APIVote = async (roomId, optionId, email) => {
    try {
        const fetching = await fetch(callURL + `vote`, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                roomId,
                optionId,
                email,
            }),
        });
        const response = await fetching.json();
        return response;
    } catch (error) {
        console.error(error);
    }
};
//Checkea si la sala ha expirado (usar en modal enter room )
export const APICheckRoomStatus = async (roomId) => {
    try {
        const fetching = await fetch(callURL + `expiredRoom`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ roomId }),
        });
        const response = await fetching.json();
        return response;
    } catch (error) {
        console.error(error);
    }
};
export const APIGetRoomOptions = async (roomId) => {
    try {
        const fetching = await fetch(callURL + `getResults`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ roomId }),
        });
        const response = await fetching.json();
        return response;
    } catch (error) {
        console.error(error);
    }
};
export const APIGetMyRooms = async (email) => {
    try {
        const fetching = await fetch(callURL + `myRooms`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userEmail: email }),
        });
        const response = await fetching.json();
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const APIGetMe = async (email) => {
    try {
        const fetching = await fetch(callURL + `me`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userEmail: email,
            }),
        });
        const response = await fetching.json();
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const APIUpdateMe = async (email, data) => {
    try {
        const fetching = await fetch(callURL + `updateMe`, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userEmail: email,
                updatedUserData: data,
            }),
        });
        const response = await fetching.json();
        return response;
    } catch (error) {
        console.error(error);
    }
};

export const APIContactUs = async (
    contactEmail,
    contactMessage,
    contactPhone,
    contactName
) => {
    try {
        const fetching = await fetch(callURL + `contactUs`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contactEmail,
                contactMessage,
                contactPhone,
                contactName,
            }),
        });
        const response = await fetching.json();
        return response;
    } catch (error) {
        console.error(error);
    }
};
