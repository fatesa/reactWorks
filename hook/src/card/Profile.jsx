import Avatar from "./Avatar";
import exmPhoto from '../assets/forest.png'
import Card from "./Card";

export default function Profile(){
    return(
        <div>
            <h2>예제 프로필</h2>
            <Card>                
                <Avatar 
                    size = {{
                        width: "300px",
                        height: "200px"
                    }}
                    person = {{
                        name : "바탕화면",
                        imageUrl: exmPhoto
                    }}
                />
            </Card>
        </div>
    )
}