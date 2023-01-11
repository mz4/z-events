import { MongoClient } from 'mongodb';
import { Fragment } from 'react';

import MeetupList from '../components/meetups/MeetupList';

interface IndexProps {
  meetups: {
    title: string;
    address: string;
    image: string;
    id: string;
  }[];
}

const Index: React.FC<IndexProps> = (props) => {
  const { meetups } = props;
  return (
    <Fragment>
      <div>Test</div>
      <div>Testabc</div>
      <MeetupList meetups={meetups} />
    </Fragment>
  );
};

export async function getStaticProps() {
  // fetch data from an API
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
      })),
    },
    revalidate: 1,
  };
}

export default Index;
