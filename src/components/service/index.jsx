export const registerUserService = async ({ formData }) => {
  console.log(formData);
  const response = await fetch(`http://localhost:4000/users/register`, {
    method: "POST",
    body: formData,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const loginUserService = async ({ email, password }) => {
  const response = await fetch(`http://localhost:4000/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data; //es el token
};

export const getMyUserDataService = async ({ token }) => {
  const response = await fetch(`http://localhost:4000/users`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

// export const getImagesService = async ({ nameImg }) => {
//   const response = await fetch(`http://localhost:4000/images/${nameImg}`, {
//     method: "GET",
//   });
//   const json = await response.json();
//   console.log(json.data);
//   if (!response.ok) {
//     throw new Error(json.message);
//   }
//   return json.data;
// };

export const getNewsDataService = async () => {
  const response = await fetch(`http://localhost:4000/news`, {
    method: "GET",
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};
getNewsDataService();

export const editUserService = async ({ name, email, bio, token }) => {
  console.log(name, email, bio);
  const response = await fetch(`http://localhost:4000/users`, {
    method: "PUT",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, bio }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const createNewService = async ({ formDataNew, token }) => {
  const response = await fetch(`http://localhost:4000/news`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: formDataNew,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getNewDetailDataService = async (idNew) => {
  const response = await fetch(`http://localhost:4000/news/${idNew}`, {
    method: "GET",
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data.ownNew;
};

export const deleteUserService = async ({ token }) => {
  const response = await fetch(`http://localhost:4000/users`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const editAvatarUserService = async ({ token, formData }) => {
  const response = await fetch(`http://localhost:4000/users/avatar`, {
    method: "PUT",
    headers: {
      Authorization: token,
    },
    body: formData,
  });
};

export const getCategoriesService = async () => {
  const response = await fetch(`http://localhost:4000/news/categories`, {
    method: "GET",
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.categories;
};
//comprobar que esté bien con Inés



export const getVoteNews = async (token,idNew, vote) => {
  const response = await fetch(`http://localhost:4000/news/${idNew}/vote/${vote}`, {
    method: "GET",
    headers: {
      Authorization: token,
    }
  })

  const json = await response.json()
  console.log(json)
}

getVoteNews( 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjgxMTE2ODM3LCJleHAiOjE2ODE3MjE2Mzd9.iv_RB0DIaHfFQcoZaGvcuStgqpM4b5mo53wfaHzJ_jw', 4, 'like')