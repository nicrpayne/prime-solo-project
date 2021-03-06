import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import journalEntriesSaga from './journalEntriesSaga';
import formSaga from './formSaga'
import emotionListSaga from './emotionListSaga'
import secondaryEmotionListSaga from './secondaryEmotionListSaga'
import tertiaryEmotionListSaga from './tertiaryEmotionListSaga'
import getEntryDetails from './getEntryDetails'
import deleteSaga from './deleteSaga'
import editSaga from './editSaga'

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    journalEntriesSaga(),
    formSaga(),
    emotionListSaga(),
    secondaryEmotionListSaga(),
    tertiaryEmotionListSaga(),
    getEntryDetails(),
    deleteSaga(),
    editSaga()
  ]);
}
