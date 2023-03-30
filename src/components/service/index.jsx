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
