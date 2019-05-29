import { createRequestInstance, watchRequests } from 'redux-saga-requests'
import { createDriver } from 'redux-saga-requests-axios'
import axios from 'axios'

axios.defaults.baseURL = ' http://ec2-3-84-16-108.compute-1.amazonaws.com:4000/'

export default function* rootSaga() {
  yield createRequestInstance({ driver: createDriver(axios) })
  yield watchRequests()
}