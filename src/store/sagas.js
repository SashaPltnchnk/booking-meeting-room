import { createRequestInstance, watchRequests } from 'redux-saga-requests'
import { createDriver } from 'redux-saga-requests-axios'
import axios from 'axios'

axios.defaults.baseURL = 'https://web-ninjas.net/'
axios.defaults.headers.Authorization = localStorage.getItem('token')

export default function* rootSaga() {
  yield createRequestInstance({ driver: createDriver(axios) })
  yield watchRequests()
}