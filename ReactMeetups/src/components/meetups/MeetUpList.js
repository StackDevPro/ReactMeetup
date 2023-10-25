import classes from './MeetUpList.module.css'
import MeetUpItems from './MeetUpItems'

function MeetUpList(props){
    return <ul className={classes.list}>
        {props.meetups.map(meetup=>
            <MeetUpItems 
                key={meetup.id} 
                id={meetup.id} 
                image={meetup.image} 
                title={meetup.title} 
                address={meetup.address} 
                description={meetup.description}
            />
        )}
    </ul>
}

export default MeetUpList;