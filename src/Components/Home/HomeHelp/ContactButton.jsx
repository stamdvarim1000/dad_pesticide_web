import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function ContactButton() {
    return (
        <div>
            <Button component={Link} to="/contact" variant="contained" onClick={console.log("bka")} >ליצירת קשר</Button>

        </div>
    );
}
