const callURL = "/api/";

export const APICreateUser = async ( name, email, password ) => {
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