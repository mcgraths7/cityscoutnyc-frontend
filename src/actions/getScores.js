import Axios from 'axios'

function getScores(address){
  /* use this when testing app locally
  const url = `http://localhost:3001/api/v1/voting_districts?full_address=${address}` */

  const url = `https://city-scout.herokuapp.com/api/v1/voting_districts?full_address=${address}`,
        response = Axios.get(url)

  return {
    type: 'GET_SCORES',
    payload: response
  }
}
export default getScores
