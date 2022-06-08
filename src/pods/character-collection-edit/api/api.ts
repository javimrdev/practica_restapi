import { CharacterApiEntity } from "./api.model";

export const getCharacters = async (): Promise<CharacterApiEntity[]> => {
        return fetch(`http://localhost:3000/characters/`)
        .then(r => r.json());
}
