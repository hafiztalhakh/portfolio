import React from 'react';
//Material UI
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
//React Router
import { withRouter } from 'react-router-dom';

const styles = makeStyles(theme => ({

}));

const About = () => {

    return (
        <Container maxWidth="lg">
            <Grid contaienr spacing={3}>
                <Grid item md={6}>
                    <div>
                    
                    </div>
                    <h5 style={{ color: '#fff', fontSize: '30px', fontWeight: 500, textTransform: 'uppercase', wordSpacing: ' 9px', display: 'inline-block', transform: 'rotate(-90deg)', position: 'relative', top: '60px', left: '-53px' }}>Who We Are</h5>
                </Grid>
                <Grid item md={6}>

                </Grid>
            </Grid>
        </Container>
    )
}

export default withRouter(About);
