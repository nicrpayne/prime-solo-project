import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class TertiaryEmotionItem extends Component {

    // infoClick = (id) => {
    //     console.log('info icon clicked with id: ', id);
    //     this.props.dispatch({
    //         type: 'FETCH_DETAILS',
    //         payload: id
    //     })
    //     this.props.history.push(`/details/${id}`);
    // }
    handleClick = (emotion) => {

        this.props.dispatch({
            type: 'TERTIARY_EMOTION_ENTRY',
            payload: emotion
        })

        this.props.history.push('/form')
    }
    render() {
        // Define "emotion" as param passed from SecondaryEmotionSelector
        let emotion = this.props.emotion;

        return (
            <Grid key={emotion.id} className="EmotionItem-Card">
                <Card id={emotion.id} key={emotion.id} >
                    <CardContent >

                        <div className="EmotionItem-Icon">
                            <CardActions>
                                <IconButton onClick={() => { this.handleClick(emotion) }} aria-label={emotion.name}>
                                    {emotion.name}
                                </IconButton>
                            </CardActions>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default withRouter(connect(mapReduxStateToProps)(TertiaryEmotionItem));
