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
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="-m-4 flex flex-wrap">
        {props.meetups.map((meetup) => (
          <div
            key={meetup.id}
            className="w-full cursor-pointer p-4 hover:opacity-75 md:w-1/2 lg:w-1/4"
          >
            <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetupList;
