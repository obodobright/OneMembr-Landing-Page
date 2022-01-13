import { BiConversation } from "react-icons/bi";
import { GiExplosiveMeeting } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
const dataFeature = [
  {
    id: "1",
    title: "Be your own creator",
    desc: "It’s easy to create Live Rooms and start your own conversations about any topic. Select a group and start the conversation, then see who tunes in.",
    icon: <BiConversation />,
  },
  {
    id: "2",
    title: "Unique live rooms",
    desc: "On OneMembr you'll find conversations with top artists, athletes, and people in the know. Preview upcoming rooms and add them to your calendar so you don't miss out.",
    icon: <GiExplosiveMeeting />,
  },
  {
    id: "3",
    title: "Find your people",
    desc: "Browse groups on any subject, from teams to bands to topics that have the world talking. Select your topics and we'll notify you about rooms you can join.",
    icon: <FaUserFriends />,
  },
];

export default dataFeature;
