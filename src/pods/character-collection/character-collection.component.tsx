import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import VisibilityIcon from '@material-ui/icons/Visibility';
import React from "react";
import { Character } from "./character-collection.vm";

interface Props {
    list: Character[];
    onViewHandler: (id: string) => void;
}

export const CharacterCollectionComponent: React.FC<Props> = (props) => {
    const { list, onViewHandler } = props;

    return (
        <>
            {list !== null &&
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Species</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Origin</TableCell>
                                <TableCell>Location</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {list.map((e) => (
                                <TableRow key={e.id}>
                                    <TableCell>{e.name}</TableCell>
                                    <TableCell>{e.status}</TableCell>
                                    <TableCell>{e.species}</TableCell>
                                    <TableCell>{e.gender}</TableCell>
                                    <TableCell>{e.origin}</TableCell>
                                    <TableCell>{e.location}</TableCell>
                                    <TableCell>
                                        <Avatar alt={e.name} src={e.image} />
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => onViewHandler(e.id.toString())}>
                                            <VisibilityIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </>
    )
}
