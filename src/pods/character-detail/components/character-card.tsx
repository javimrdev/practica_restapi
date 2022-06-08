import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/cardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Character } from 'pods/character-collection/character-collection.vm';
import { css } from 'emotion';

interface Props {
    character: Character;
}

export const CharacterCardComponent: React.FC<Props> = (props) => {
    const { character, children } = props;

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
                <div className={linkBack}>
                    {children}
                </div>
            </CardContent>
        </Card>
    );
}
