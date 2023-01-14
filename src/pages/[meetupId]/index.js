import { Fragment } from 'react';

const MeetupDetails = ({ meetupId, allPokemons }) => {
  return (
    <Fragment>
      <div>MeetupId: {meetupId}</div>
      <ul>
        {allPokemons.map((poke) => (
          <li key={poke.url}>{poke.name}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const data = await response.json();
  return {
    props: {
      meetupId,
      allPokemons: data.results,
    },
  };
}

export default MeetupDetails;
