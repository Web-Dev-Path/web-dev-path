import { whoWeAre } from './about';

export const getUserData = devtoId => {
  const userData = whoWeAre.find(member => member.devtoId === devtoId);
  return userData;
};
