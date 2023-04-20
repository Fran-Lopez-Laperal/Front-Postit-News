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

  return json.data;
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

  console.log("index", json.categories);
  return json.categories;
};

export const getOldNewsService = async () => {
  const response = await fetch("http://localhost:4000/news/old", {
    method: "GET",
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data.news;
};

export const getVoteNews = async (token, id, vote) => {
  const response = await fetch(
    `http://localhost:4000/news/${id}/vote/${vote}`,
    {
      method: "GET",
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();
  return json;
};

export const filterNewsByCategoryService = async (idCategory) => {
  const response = await fetch(
    `http://localhost:4000/news/filter/${idCategory}`,
    {
      method: "GET",
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.newsWithFilter;
};
