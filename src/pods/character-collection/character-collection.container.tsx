import React from "react";
import { CharacterCollectionComponent } from "pods/character-collection/character-collection.component";
import { getCharacters } from "./api/api";
import { mapApiAnswerToVM } from "./character-collection.mapper";
import { CharacterCollectionContext } from "core/context/character-collection/character-collection.context";
import { css } from "emotion";
import { SearcherComponent } from "pods/character-collection/components/searcher.component";
import { useDebouncedCallback } from "use-debounce";
import { linkRoutes } from "core/router";
import { useHistory } from "react-router-dom";


export const CharacterCollectionContainer: React.FC = () => {
    const { apiAnswer, setApiAnswer, filter, setFilter } = React.useContext(CharacterCollectionContext);
    const history = useHistory();

    const debouncedFilter = useDebouncedCallback((value: string) => {
        setFilter({
            page: 1,
            name: value
        })
    }, 1000);

    React.useEffect(() => {
        getCharacters(filter)
            .then(mapApiAnswerToVM)
            .then(setApiAnswer)
    }, [filter, apiAnswer])

    const onViewHandler = (id: string) => {
        history.push(linkRoutes.character(id));
    }

    const onPageChangeHandler = (event: React.ChangeEvent<unknown>, page: number) => {
        event.preventDefault();
        setFilter({
            ...filter,
            page: page
        });
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
                    <SearcherComponent onDebounce={debouncedFilter} defaultValue={filter.name} />
                    <CharacterCollectionComponent onViewHandler={onViewHandler} list={apiAnswer.characters} />
                </div>
            }
        </>
    )
}
