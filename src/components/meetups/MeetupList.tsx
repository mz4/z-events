import MeetupItem from './MeetupItem';

interface MeetupListProps {
  meetups: {
    title: string;
    address: string;
    image: string;
    id: string;
    description: string;
    date: string;
    time: string;
  }[];
}

const MeetupList: React.FC<MeetupListProps> = (props) => {
  const { meetups } = props;
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="-m-4 flex flex-wrap">
        {meetups.map((meetup) => (
          <MeetupItem meetup={meetup} key={meetup.id} />
        ))}
      </div>
    </div>
  );
};

export default MeetupList;
