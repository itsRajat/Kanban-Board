const cards = [
  {
    id: 'card-1',
    title: 'Learning how to cook',
    desc: 'This is a desc 1',
  },
  {
    id: 'card-2',
    title: 'Making sandwich',
    desc: 'This is a desc 2',
  },
  {
    id: 'card-3',
    title: 'Taking the trash out',
    desc: 'This is a desc 3',
  },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Todo',
      cards,
    },
  },
  listIds: ['list-1'],
};

export default data;
