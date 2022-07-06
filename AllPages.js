
ubuntu@ip-172-31-40-64:~/test_routing/src/pages$ cat *

const About = () => {
        return (
                <div>
                        About page
                </div>
        )
}

export default About;


const Home = () => {
        return (
                <div>
                Home Page
                </div>
        )
}


export default Home
const NotFound = () => {
        return (
                <div>
                404 Error Not Found
                </div>
        )
}


export default NotFound
import { useParams, useLocation } from "react-router-dom";
const Post = () => {
        const { id }  = useParams();

        const query = new URLSearchParams(useLocation().search)


return (
<>
        <h2>Id is = {id}</h2>
        <h2>{query.get("first")} </h2>
        <h2>{query.get("last")} </h2>
</>
);
}


export default Post;


const Profile = () => {
        return <div> Profile Page </div>;
}
