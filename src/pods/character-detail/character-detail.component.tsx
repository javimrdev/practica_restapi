import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "core/router";
import { CharacterCardComponent } from "./components/character-card";
import { Character } from "./character-detail.vm";

interface Props {
    character: Character;
}

export const CharacterDetailComponent: React.FC<Props> = (props) => {
    const { character } = props;

    return (
        <>
            {character &&
                <>
                    <CharacterCardComponent character={character}>
                        <Link to={switchRoutes.characters}>Back to list page</Link>
                    </CharacterCardComponent>
                </>
            }
        </>
    )
}
