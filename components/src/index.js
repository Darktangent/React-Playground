import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App=()=>{
  return (

    <div className="ui container comments">
      <ApprovalCard>
      Are you sure you want to do this>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Sam" time={new Date().toLocaleTimeString()} comment={"Nice blog post"} src={faker.image.avatar()} />
      
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail author="Alex" time={new Date().toLocaleTimeString()} comment={"Nice blog post"} src={faker.image.avatar()}></CommentDetail>
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail author="Jane" time={new Date().toLocaleTimeString()} comment={"Nice blog post"} src={faker.image.avatar()}></CommentDetail>
      </ApprovalCard>
     
    
    </div>
  );
}
ReactDOM.render(<App></App>, document.querySelector('#root'))