import { useParams } from "react-router-dom"

export default function PostDetail(){
    const {postId}=useParams()
    return(
        <div className="mt-8 border rounded bg-gray-400">
        <h1 className="text-2xl font-semibold mb-2 ">Post Detail</h1>

        <p className="text-orange-400">Showing Details for post ID: <span className="font-mono text-black">{postId}</span></p>
            
        </div>
    )
}