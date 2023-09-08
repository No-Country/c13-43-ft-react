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
export const APIDeleteUser = async (userEmail) => {
  try {
    const fetching = await fetch(callURL + `deleteUser/${userEmail}`, {
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

//ENDPOINT EN CONSTRUCCION
export const APISendNotification = async (email, message, subject, name) => {
  try {
    const fetching = await fetch("https://send2.vercel.app/api/send", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message, subject, name }),
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
    const fetching = await fetch(callURL + `deleteRoom/${roomId}`, {
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

export const APIGetResults = async (roomId) => {
  try {
    const fetching = await fetch(callURL + `getResults?roomId=${roomId}`, {
      method: "GET",
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
  s;
};

export const APIVote = async (roomId, optionId, email) => {
  try {
    const fetching = await fetch(
      callURL +
        `vote?roomId=${roomId}&optionId=${optionId}&voterEmail=${email}`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await fetching.json();
    return response;
  } catch (error) {
    console.error(error);
  }
  s;
};
