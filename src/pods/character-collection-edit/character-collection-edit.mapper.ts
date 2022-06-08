import * as am from 'pods/character-collection-edit/api/api.model';
import * as vm from './character-collection-edit.vm';

export const mapApiAnswerToVM = (data: am.CharacterApiEntity[]): vm.ApiAnswer => {
    const obj:vm.ApiAnswer = {
        characters: data.map(mapCharacterToVM)
    }

    return obj;
}

const mapCharacterToVM = (data: am.CharacterApiEntity): vm.Character => ({
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
        created: data.created,
        bestSentences: data.bestSentences
});
