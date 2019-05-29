import { createRequestInstance, watchRequests } from 'redux-saga-requests'
import { createDriver } from 'redux-saga-requests-axios'
import axios from 'axios'

axios.defaults.baseURL = 'https://web-ninjas.net/'

export default function* rootSaga() {
  yield createRequestInstance({ driver: createDriver(axios) })
  yield watchRequests()
}