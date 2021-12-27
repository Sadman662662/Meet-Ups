import { useEffect, useState } from "react";
import MeetupLists from "../components/meetups/MeetupLists";

function AllMeetUpsPage(params) {
  const[isLoading,setIsLoading]=useState(true);
  const[loadedMeetups,setLoadedMeetups] = useState([]);

  useEffect(()=>{
    setIsLoading(true);
    fetch('https://meetup-e121c-default-rtdb.firebaseio.com/meetups.json')
    .then(response=>{
      return response.json();
    })
    .then(data=>{
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id:key,
          ...data[key]
        };

        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  },[]);

  
  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }
  return <section>
            <h1>AllMeetUps</h1>
            <MeetupLists meetups={loadedMeetups}/>
          </section>
}

export default AllMeetUpsPage;