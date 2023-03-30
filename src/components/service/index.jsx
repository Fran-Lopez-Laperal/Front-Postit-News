const registerUserService = async ({ name, email, pass1, bio }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/users/register`,
    {
      method: "POST",
      body: JSON.stringify({ name, email, pass1, bio }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export default { registerUserService };
