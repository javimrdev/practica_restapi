import * as am from 'pods/character-collection/api/api.model';
import * as vm from './character-collection.vm';

export const mapApiAnswerToVM = (data: am.ApiAnswer): vm.ApiAnswer => {
    const obj:vm.ApiAnswer = {
        info: data.info,
        characters: data.results.map(mapCharacterToVM)
    }

    return obj;
}

const mapCharacterToVM = (data: am.Result): vm.Character => ({
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        type: data.type,
        gender: data.gender,
        origin: data.origin.name,
        location: data.location.name,
        image: data.image,
        episode: data.episode,
        url: data.url,
        created: data.created
});
