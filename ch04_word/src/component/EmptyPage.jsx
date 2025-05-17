import {Link} from "react-router-dom"

export default function EmptyPage(){
  return (
    <>
      <h2>잘 못된 접근</h2>
      <Link to="/">돌아가기</Link>
    </>
  )

}