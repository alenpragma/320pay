export const getTizaraAdminToken = () => {
  const token = localStorage.getItem('tizaraAdminToken');

  return token;
};

export const setTizaraAdminToken = (token: string) => {
  localStorage.setItem('tizaraAdminToken', token);
};

export const removeTizaraAdminToken = () => {
  localStorage.removeItem('tizaraAdminToken');
};
