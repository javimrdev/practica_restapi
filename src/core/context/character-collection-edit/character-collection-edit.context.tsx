import { ApiAnswer } from 'pods/character-collection-edit/character-collection-edit.vm';
import React from 'react';

interface CharacterList {
    apiAnswer: ApiAnswer;
    setApiAnswer: (data: ApiAnswer) => void;
    page: number;
    setPage: (page: number) => void;
}

export const CharacterCollectionEditContext = React.createContext<CharacterList>({
    apiAnswer: null,
    setApiAnswer: (data: ApiAnswer) => console.log('RickMorty context todo {setApiAnswer}'),
    page: null,
    setPage: (page: number) => console.log('RickMorty context todo {setPage}')
})

export const CharacterCollectionEditProvider: React.FC = (props) => {
    const { children } = props;
    const [apiAnswer, setApiAnswer] = React.useState<ApiAnswer>(null);
    const [page, setPage] = React.useState<number>(1);

    return (
        <CharacterCollectionEditContext.Provider value={{ apiAnswer, setApiAnswer, page, setPage }}>
            {children}
        </CharacterCollectionEditContext.Provider>
    )
}
