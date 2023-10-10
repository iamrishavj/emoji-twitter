export const filterUserProps = (user: any): UserInfo => {
  const { firstName, lastName, imageUrl, username: userName } = user;
  return { firstName, lastName, imageUrl, userName /*, other fields*/ };
};
