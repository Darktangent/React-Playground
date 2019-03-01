import axios from 'axios';



const KEY=`AIzaSyBHMJoXROi5Tpf2AxyQ9MQjkmZWE8cQFuY`


export default axios.create({

  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResults:6,
    key:KEY
  }
})



