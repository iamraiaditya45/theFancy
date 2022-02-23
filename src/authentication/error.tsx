import classes from '*.module.css';
import React from 'react';

export interface IErrorTextProps {
    error: string;
}

const ErrorText: React.FunctionComponent<IErrorTextProps> = props => {
    const { error } = props;

    if (error === '') return null;

    return (
        <small style={{color:"red", marginTop:"15px",textAlign:"center"}}>
            {error}
        </small>
    );
}

export default ErrorText;