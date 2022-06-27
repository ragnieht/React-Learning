import MeetupList from "../components/meetup/MeetupList";
import { useSelector } from "react-redux";

export default function AllMeetupsPage() {
  const meetups = useSelector((state) => state.meetups);

  return (
    <div>
      <MeetupList meetups={meetups} />
    </div>
  );
}
