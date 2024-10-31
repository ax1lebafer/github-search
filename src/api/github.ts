import axios from "axios";

const HOST = "https://api.github.com/search/users?q=";

export async function fetchUsers(name: string) {
  const data = await axios.get(HOST + name, {
    headers: {
      accept: "application/vnd.github+json",
    },
  });

  return data.data;
}
