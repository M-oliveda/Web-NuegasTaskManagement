export async function getUser() {
  const userAPI = "https://randomuser.me/api/";

  try {
    const user = await (await fetch(userAPI)).json();
    return {
      firstname: user.results[0].name.first,
      lastname: user.results[0].name.last,
      avatar: user.results[0].picture.thumbnail,
      class: "MABC2",
      studentNumber: 4,
    };
  } catch (error) {
    console.log("There was an error when trying to get a user,", error);
  }
}
