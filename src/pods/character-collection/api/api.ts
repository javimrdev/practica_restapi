import { ApiAnswer } from "./api.model";
import { Filter } from "pods/character-collection/character-collection.vm";

export const getCharacters = async (filter: Filter): Promise<ApiAnswer> => {
    let parameters = createParametersUrl(filter);
        return fetch(`https://rickandmortyapi.com/api/character/${parameters}`)
        .then(r => r.json());
}

const createParametersUrl = (filter: Filter): string => {
    let isFirstFilter = true;
    let url = '?';

    if(filter.name){
        url += `name=${filter.name}`;
        isFirstFilter = false;
    }
    if(filter.page > 0) {
        if(!isFirstFilter) url +="&";

        url += `page=${filter.page}`;
    }

    return url;
}
