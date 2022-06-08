import React from "react";
import { useParams } from "react-router-dom";
import { updateBestSentences, getCharacterById } from "./api/api";
import { CharacterEditComponent } from "./character-edit.component";
import { mapCharacterToVM } from "./character-edit.mapper";
import { Character } from "./character-edit.vm";

export const CharacterEditContainer: React.FC = () => {
    const { id } = useParams();

    const [character, setCharacter] = React.useState<Character>(null);


    React.useEffect(() => {
        getCharacterById(id)
            .then(mapCharacterToVM)
            .then(setCharacter)
    },[])

    const addCharacterSentence = (sentence: string) => {
      updateBestSentences(character.id, [...character.bestSentences, sentence])
      .then(r => {
        if(r) {
          const newCharacter: Character = {...character};
          newCharacter.bestSentences.push(sentence);
          setCharacter(newCharacter);
        }
        else console.error('error en la llamada a la api')
      })
    }

    return <CharacterEditComponent
            character={character}
            addCharacterSentence={addCharacterSentence}
            />
}
