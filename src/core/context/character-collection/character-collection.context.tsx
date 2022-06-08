import { ApiAnswer, Filter } from 'pods/character-collection/character-collection.vm';
import React from 'react';

interface CharacterList {
    apiAnswer: ApiAnswer;
    setApiAnswer: (data: ApiAnswer) => void;
    filter: Filter;
    setFilter: (str: Filter) => void;
    page: number;
    setPage: (page: number) => void;
}

export const CharacterCollectionContext = React.createContext<CharacterList>({
    apiAnswer: null,
    setApiAnswer: (data: ApiAnswer) => console.log('RickMorty context todo {setApiAnswer}'),
    filter: null,
    setFilter: (str: Filter) => console.log('RickMorty context todo {setFilter}'),
    page: null,
    setPage: (page: number) => console.log('RickMorty context todo {setPage}')
})

export const CharacterCollectionProvider: React.FC = (props) => {
    const { children } = props;
    const [apiAnswer, setApiAnswer] = React.useState<ApiAnswer>(null);
    const [filter, setFilter] = React.useState<Filter>({
        name: null,
        page: null
    });
    const [page, setPage] = React.useState<number>(1);

    return (
        <CharacterCollectionContext.Provider value={{ apiAnswer, setApiAnswer, filter, setFilter, page, setPage }}>
            {children}
        </CharacterCollectionContext.Provider>
    )
}
