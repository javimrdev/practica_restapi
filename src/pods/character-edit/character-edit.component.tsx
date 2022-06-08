import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "core/router";
import { CharacterCardComponent } from "./components/character-card";
import { Character } from "./character-edit.vm";

interface Props {
    character: Character;
    addCharacterSentence: (sentence: string) => void;
}

export const CharacterEditComponent: React.FC<Props> = (props) => {
    const { character, addCharacterSentence } = props;

    return (
        <>
            {character &&
                <>
                    <CharacterCardComponent
                      character={character}
                      addCharacterSentenceHandler={addCharacterSentence}>
                        <Link to={switchRoutes.characters}>Back to list page</Link>
                    </CharacterCardComponent>
                </>
            }
        </>
    )
}
