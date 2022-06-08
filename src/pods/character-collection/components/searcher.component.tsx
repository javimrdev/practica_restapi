import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface Props {
    onDebounce: any;
    defaultValue: string;
}

export const SearcherComponent: React.FC<Props> = (props) => {
    const { onDebounce, defaultValue } = props;
    const [value, setValue] = React.useState<string>(defaultValue);

    const onChange = (value: string) => {
        setValue(value);
        onDebounce(value);
    }

    return (
        <TextField id="outlined-basic" variant="outlined" label="Search by name" defaultValue={value} onKeyUp={(event: any) => onChange(event.target.value)} />
    )
}
