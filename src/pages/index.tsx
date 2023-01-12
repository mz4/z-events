import { MongoClient } from 'mongodb';
import { Fragment } from 'react';

import MeetupList from '../components/meetups/MeetupList';

interface IndexProps {
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

const Index: React.FC<IndexProps> = (props) => {
  const { meetups } = props;
  return (
    <Fragment>
      <div className="text-5xl font-bold text-red-700">Events list</div>
      <MeetupList meetups={meetups} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:GJbTcd31APW1YI7o@cluster0.5ng0lcy.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
        description: meetup.description,
        date: meetup.date,
        time: meetup.time,
      })),
    },
    revalidate: 1,
  };
}

export default Index;
