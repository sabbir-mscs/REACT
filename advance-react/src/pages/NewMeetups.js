import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    //https://advance-react-back-default-rtdb.firebaseio.com/
<<<<<<< HEAD
    fetch("https://advance-react-back-default-rtdb.firebaseio.com/meetups");
=======
    fetch(
      "https://advance-react-back-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
>>>>>>> 201b4236c6ecec43f22632be79c20721953fb9ea
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
