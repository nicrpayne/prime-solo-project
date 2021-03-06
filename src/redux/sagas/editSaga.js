import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* editSaga() {
    yield takeEvery('EDIT_ENTRY', editEntrySaga);
}

function* editEntrySaga(action) {
    console.log('in editEntrySaga', action);
    
    try {
        yield axios.put(`/api/entry/${action.payload.id}`, {journalText: action.payload.info});
        
    
        
        yield put({ type: 'GET_ENTRY_DETAILS', payload: action.payload.id });
    } catch (error) {
        console.log('Error in editEntrySaga: ', error);
    }
}

export default editSaga