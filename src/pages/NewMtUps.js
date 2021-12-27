import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpsPage() {

    const history = useHistory();

    function meetUpHandler(meetupData) {
        fetch('https://meetup-e121c-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'content-type':'application/json'
            }
        }
        ).then(()=>{
            history.replace('/');
        });
    }
    return <section>
        <h1>
            Add New Meetup
        </h1>
        <NewMeetupForm onAddMeetup={meetUpHandler}/>
    </section>
}

export default NewMeetUpsPage;