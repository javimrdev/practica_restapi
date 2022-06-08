import Axios, { AxiosResponse } from "axios";
import { Character } from "./api.model";

export const getCharacterById = async (id: string): Promise<Character> => {
    return await fetch(`http://localhost:3000/characters/${id}`)
        .then(r => r.json());
}

export const updateBestSentences = async (id: number, sentences: string[]): Promise<boolean> => {
  if(id)
    await Axios.patch(`http://localhost:3000/characters/${id}`, {
      "bestSentences": sentences
    });

  return true;
}
