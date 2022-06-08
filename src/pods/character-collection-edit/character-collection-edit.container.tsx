import React from "react";
import { CharacterCollectionEditComponent } from "pods/character-collection-edit/character-collection-edit.component";
import { getCharacters } from "./api/api";
import { mapApiAnswerToVM } from "./character-collection-edit.mapper";
import { CharacterCollectionEditContext } from "core/context/character-collection-edit/character-collection-edit.context";
import { css } from "emotion";
import { linkRoutes } from "core/router";
import { useHistory } from "react-router-dom";


export const CharacterCollectionEditContainer: React.FC = () => {
    const { apiAnswer, setApiAnswer } = React.useContext(CharacterCollectionEditContext);
    const history = useHistory();


    React.useEffect(() => {
        getCharacters()
            .then(mapApiAnswerToVM)
            .then(setApiAnswer)
    }, [])

    const onViewHandler = (id: string) => {
        history.push(linkRoutes.characterEdit(id));
    }

    const containerClass = css`
        display: flex;
        justify-content: center;
        align-content:center;
        flex-wrap: wrap;
        row-gap: 10px;
    `;

    return (
        <>
            {apiAnswer &&
                <div className={containerClass}>
                    <CharacterCollectionEditComponent onViewHandler={onViewHandler} list={apiAnswer.characters} />
                </div>
            }
        </>
    )
}
