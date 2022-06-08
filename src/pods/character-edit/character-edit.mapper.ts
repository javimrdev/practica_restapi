import * as am from 'pods/character-edit/api/api.model';
import * as vm from 'pods/character-edit/character-edit.vm';

export const mapCharacterToVM = (data: am.Character): vm.Character => ({
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
