const { localStorage } = window;

export const setpret = (pret) => {
  if (localStorage.getItem('pret')) {
    localStorage.removeItem('pret');
  }
  localStorage.setItem('pret', JSON.stringify(pret));
};

export const getpret = () => {
  if (localStorage.getItem('pret')) {
    return JSON.parse(localStorage.getItem('pret'));
  } return {
    nomPret:'0',
    montantAcquisition:'0'
  };
};