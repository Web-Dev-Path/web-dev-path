import { whoWeAre } from './about';
export const getUserBio = (username, devtoId) => {
  const person = whoWeAre.find(member => member.devtoId === devtoId);
  return person
    ? person.about
    : `${username} is a dedicated Web Dev Path member and software developer. `;
};
