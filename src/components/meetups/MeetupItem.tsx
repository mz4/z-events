import { useRouter } from 'next/router';

interface MeetupItemProps {
  meetup: {
    title: string;
    address: string;
    image: string;
    id: string;
    description: string;
    date: string;
    time: string;
  };
}

const MeetupItem: React.FC<MeetupItemProps> = (props) => {
  const { meetup } = props;
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push(`/${meetup.id}`);
  };

  return (
    <div className="w-full cursor-pointer p-4 hover:opacity-75 md:w-1/2 lg:w-1/4">
      <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
        <img
          src={meetup.image}
          className="aspect-video w-full object-cover duration-200 hover:scale-105"
          alt=""
        />
        <div className="p-4">
          <div className="mb-1 text-sm">
            {meetup.date} - {meetup.time}
          </div>
          <div className="text-xl font-medium text-gray-900">
            {meetup.title}
          </div>
          <div className="mt-1 text-gray-500">{meetup.address}</div>
          <div className="max-h-60">
            <div className="mt-1 text-gray-500 line-clamp-6">
              {meetup.description}
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={showDetailsHandler}
              className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            >
              Show Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetupItem;
