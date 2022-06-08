import { Character } from "./api.model";

export const getCharacterById = (id: string): Promise<Character> => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(r => r.json());
}