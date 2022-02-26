import NewMeetupForm from "../components/meetups/NewMeetupForm";

function Favourites() {
  function addMeetupHandler(meetupData) {
    //https://advance-react-back-default-rtdb.firebaseio.com/
    fetch("https://advance-react-back-default-rtdb.firebaseio.com/meetups");
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default Favourites;
