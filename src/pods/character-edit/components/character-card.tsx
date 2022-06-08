import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/cardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Character } from 'pods/character-edit/character-edit.vm';
import { css } from 'emotion';

interface Props {
    character: Character;
    addCharacterSentenceHandler: (sentence: string) => void;
}

export const CharacterCardComponent: React.FC<Props> = (props) => {
    const { character, children, addCharacterSentenceHandler } = props;
    const [bestSentence, setBestSentence] = React.useState<string>('');

    const linkBack = css`
        display: flex;
        justify-content: flex-end;
    `;

    return (
        <Card>
            <CardMedia
                component="img"
                height="194"
                image={character.image}
                alt={character.name}
            />
            <CardContent>
                <Typography variant="h5" color='primary'>
                    {character.name ? character.name : '-'}
                </Typography>
                <Typography variant="h6" color="primary">Gender</Typography>
                <Typography variant='body1'>
                    {character.gender ? character.gender : '-'}
                </Typography>
                <Typography variant="h6" color="primary">Location</Typography>
                <Typography variant='body1'>
                    {character.location ? character.location : '-'}
                </Typography>
                <Typography variant="h6" color="primary">Species</Typography>
                <Typography variant='body1'>
                    {character.species ? character.species : '-'}
                </Typography>
                <Typography variant="h6" color="primary">Status</Typography>
                <Typography variant='body1'>
                    {character.status ? character.status : '-'}
                </Typography>
                <Typography variant="h6" color="primary">Type</Typography>
                <Typography variant='body1'>
                    {character.type ? character.type : '-'}
                </Typography>
                <Typography variant="h6" color="primary">Origin</Typography>
                <Typography variant='body1'>
                    {character.origin ? character.origin : '-'}
                </Typography>
                <Typography variant="h6" color="primary">Best sentences</Typography>
                {character.bestSentences ?
                  character.bestSentences.map(text => <Typography key={text} variant='body1'>
                    {text}
                    </Typography>)
                  : <Typography variant='body1'>-</Typography>
                  }

                <TextField id="standard-basic" label="New best sentence" variant="standard" value={bestSentence} onChange={(e) => setBestSentence(e.target.value)} />
                <Button variant="outlined" onClick={() => { addCharacterSentenceHandler(bestSentence); setBestSentence('')}}>Add</Button>
                <div className={linkBack}>
                    {children}
                </div>
            </CardContent>
        </Card>
    );
}
