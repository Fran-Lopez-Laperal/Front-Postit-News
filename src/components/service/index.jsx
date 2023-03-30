export const registerUserService = async ({ name, email, password, bio }) => {
  const response = await fetch(`http://localhost:4000/users/register`, {
    method: "POST",
    body: JSON.stringify({ name, email, password, bio }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  console.log(json);

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const loginUserService = async ({email, password}) => {
  const response = await fetch(`http://localhost:4000/users/login`, {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
    },
  body: JSON.stringify({email, password})

  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data; //es el token

};

/* export const getMyUserDataService = async ({token}) => {
  const response= await fetch(`http://localhost:4000/users`, {
    headers: {
      Authorization: token
    },
  });

  const json = await response.json();
console.log(json);
  if(!response.ok){
    throw new Error(json.message);
  }

  return json.data;
}; */