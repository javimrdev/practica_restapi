import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterDetailScene, CharacterCollectionEditScene, CharacterCollectionScene, CharacterEditScene } from 'scenes';
import { CharacterCollectionProvider } from 'core/context/character-collection/character-collection.context';
import { CharacterCollectionEditProvider } from 'core/context/character-collection-edit/character-collection-edit.context';

export const RouterComponent: React.FunctionComponent = () => {
  return (

    <CharacterCollectionProvider>
      <CharacterCollectionEditProvider>
      <HashRouter>
        <Switch>
        <Route
            exact={true}
            path={switchRoutes.root}
            component={CharacterCollectionScene}
          />
          <Route
            exact={true}
            path={switchRoutes.characters}
            component={CharacterCollectionScene}
          />
          <Route
            exact={true}
            path={switchRoutes.character}
            component={CharacterDetailScene}
          />
          <Route
            exact={true}
            path={switchRoutes.charactersEdit}
            component={CharacterCollectionEditScene}
          />
          <Route
            exact={true}
            path={switchRoutes.characterEdit}
            component={CharacterEditScene}
          />
        </Switch>
      </HashRouter>
      </CharacterCollectionEditProvider>
    </CharacterCollectionProvider>
  );
};
