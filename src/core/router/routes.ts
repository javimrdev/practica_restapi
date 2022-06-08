import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  hotelCollection: string;
  createHotel: string;
  editHotel: string;
  characters: string;
  character: string;
  charactersEdit: string;
  characterEdit: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  hotelCollection: '/hotels',
  createHotel: '/hotels/create',
  editHotel: '/hotels/:id',
  characters: '/characters',
  character: '/character/:id',
  characterEdit: '/character-edit/:id',
  charactersEdit: '/characters-edit'
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editHotel' | 'character' | 'characterEdit'> {
  editHotel: NavigationFunction;
  character: NavigationFunction;
  characterEdit: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editHotel: (id) => generatePath(switchRoutes.editHotel, { id }),
  character: (id) => generatePath(switchRoutes.character, { id }),
  characterEdit: (id) => generatePath(switchRoutes.characterEdit, { id })
};
