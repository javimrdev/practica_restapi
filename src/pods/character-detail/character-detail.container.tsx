import React from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "./api/api";
import { CharacterDetailComponent } from "./character-detail.component";
import { mapCharacterToVM } from "./character-detail.mapper";
import { Character } from "./character-detail.vm";

export const CharacterDetailContainer: React.FC = () => {
    const { id } = useParams();

    const [character, setCharacter] = React.useState<Character>(null);


    React.useEffect(() => {
        getCharacterById(id)
            .then(mapCharacterToVM)
            .then(setCharacter)
    })

    return <CharacterDetailComponent character={character} />
}
