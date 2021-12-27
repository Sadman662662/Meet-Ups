import MeetupItems from './MeetupItems';
import classes from './MeetupLists.module.css';

function MeetupLists(props) {
    return (<ul className={classes.list}>
            {props.meetups.map((meetup)=>
                <MeetupItems
                    key={meetup.id}
                    id={meetup.id}
                    title={meetup.title}
                    image={meetup.image}
                    address={meetup.address}
                    description={meetup.description}
                />
            )}
    </ul>
    );
}

export default MeetupLists;