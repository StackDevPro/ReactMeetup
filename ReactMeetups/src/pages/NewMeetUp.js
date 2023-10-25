import { useNavigate } from 'react-router-dom'

import NewMeetUpForm from "../components/meetups/NewMeetUpForm";


function NewMeetUp(){
    const navigate = useNavigate();
    function addMeetupHandler(meetupData){
        fetch(
            'https://react-crash-course-4ffa8-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(()=>{
            navigate('/'); 
        });
    }
    return <section>
        <h1> Add New Meet ups </h1>
        <NewMeetUpForm onAddMeetup={addMeetupHandler}/>
    </section>
    
}

export default NewMeetUp;