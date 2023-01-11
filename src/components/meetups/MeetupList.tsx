interface MeetupListProps {
  meetups: {
    title: string;
    address: string;
    image: string;
    id: string;
  }[];
}

const MeetupList: React.FC<MeetupListProps> = (props) => {
  return (
    <ul>
      {props.meetups.map((meetup) => (
        <li key={meetup.id}>{meetup.title}</li>
      ))}
    </ul>
  );
};

export default MeetupList;
