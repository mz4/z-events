import type { FormEvent } from 'react';
import { Fragment, useRef } from 'react';

interface MeetupDataProps {
  title?: string;
  image?: string;
  address?: string;
  description?: string;
}

interface NewMeetupFormProps {
  onAddMeetup: (meetupData: MeetupDataProps) => void;
}

const NewMeetupForm: React.FC<NewMeetupFormProps> = (props) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const meetupData: MeetupDataProps = {
      title: titleInputRef?.current?.value,
      image: imageInputRef?.current?.value,
      address: addressInputRef?.current?.value,
      description: descriptionInputRef?.current?.value,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            required
            id="description"
            ref={descriptionInputRef}
          />
        </div>
        <div>
          <button>Add Meetup</button>
        </div>
      </form>
    </Fragment>
  );
};

export default NewMeetupForm;
