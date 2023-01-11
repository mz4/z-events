import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import NewMeetupForm from '@/components/meetups/NewMeetupForm';

interface MeetupDataProps {
  title?: string;
  image?: string;
  address?: string;
  description?: string;
}

const NewMeetup = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetupData: MeetupDataProps) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  };

  return (
    <Fragment>
      <Head>
        <title>Add new Meetup</title>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetup;
