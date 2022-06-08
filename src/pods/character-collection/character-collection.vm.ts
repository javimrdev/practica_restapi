 export interface Info {
        count: number;
        pages: number;
        next: string;
        prev?: any;
    }

    export interface Character {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: string;
        location: string;
        image: string;
        episode: string[];
        url: string;
        created: Date;
    }

    export interface ApiAnswer {
        info: Info;
        characters: Character[];
    }

    export interface Filter {
        name: string;
        page: number;
    }
