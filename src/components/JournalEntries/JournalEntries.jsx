import React, { Component } from 'react';
import { connect } from 'react-redux';

class JournalEntries extends Component {
    // state = {
    //     firstname: '',
    //     lastname: '',
    //     username: '',
    //     password: '',
    // };

componentDidMount() {
this.props.dispatch ({type: 'FETCH_ENTRIES'})
};
    // handleInputChangeFor = propertyName => (event) => {
    //     this.setState({
    //         [propertyName]: event.target.value,
    //     });
    // }

    render() {
        return (
            <div>
                <ul>
                    {this.props.reduxState.setEntriesReducer.map(entry =>
                        <li key={entry.id}>
                            <div>
                                <p>{entry.location}</p>
                                <p>{entry.date}</p>
                                <p>{entry.primary_emotion_id}</p>
                                <p>{entry.secondary_emotion_id}</p>
                                <p>{entry.tertiary_emotion_id}</p>
                                <p>{entry.journal_text}</p>

                                {/* <img src={book.image_url} /> */}
                                {/* {this.props.reduxStore.user.id === book.user_id ?
                                    <button onClick={() => this.props.dispatch(
                                        {
                                            type: 'DELETE_BOOK',
                                            payload: book
                                        })}>DELETE BOOK</button> :
                                    <p></p>
                                } */}
                            </div>
                        </li>
                    )}
                </ul>
            <p>
                {/* {JSON.stringify(this.props.state.setEntriesReducer)} */}
            </p>
                <center>
                    <button
                        type="button"
                        className="link-button"
                        // onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
                    >
                        Login
          </button>
                </center>
            </div>
        );
    }
}


// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = reduxState => ({
   reduxState
});

export default connect(mapStateToProps)(JournalEntries);
