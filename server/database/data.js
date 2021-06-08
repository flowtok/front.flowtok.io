const users = [
  {
    id: '1',
    name: 'Ketty Bounce',
    password: '1234567',
    userImage: `https://robohash.org/1?set=set4`,
    tagName: '@prettykitty',
    age: 21,
    country: 'Ukraine',
    balance: '17 224.5 ₽',
    avgViews: '5 739.2',
    price: '123.4 ₽',
    goodRate: 1.3,
    heldMoney: '1 799.3 ₽',
    totalEarnings: '1 421 ₽',
    refLink: 'https://flowtok.com/ref/23i14ssg433s5rtgsd435',
    refCount: 311,
    refEarnings: '3 431.5 ₽',
    history: [
      { value: '9 112.90', date: '30.08.2021', type: 'inc' },
      { value: '1 112.90', date: '30.08.2020', type: 'dec' },
      { value: '112.90', date: '30.08.2023', type: 'inc' },
      { value: '112.90', date: '30.08.2023', type: 'inc' },
      { value: '1 112.90', date: '30.08.2020', type: 'dec' },
      { value: '112.90', date: '30.08.2023', type: 'inc' },
      { value: '112.90', date: '30.08.2023', type: 'dec' },
    ],
  },
  {
    id: '2',
    name: 'Michael Root',
    password: '7654321',
    userImage: `https://robohash.org/2?set=set4`,
    tagName: '@coolman',
    age: 27,
    country: 'Russia',
    balance: '173 224.5 ₽',
    avgViews: '52 739.2',
    price: '1423.4 ₽',
    goodRate: 1.9,
    heldMoney: '13 799.3 ₽',
    totalEarnings: '311 421 ₽',
    refLink: 'https://flowtok.com/ref/1471gb71bv1d1s12accv',
    refCount: 319,
    refEarnings: '32 431.5 ₽',
    history: [
      { value: '91 112.90', date: '30.08.2001', type: 'inc' },
      { value: '1 112.90', date: '30.08.2020', type: 'dec' },
      { value: '112.90', date: '30.08.2023', type: 'inc' },
      { value: '1122.93', date: '30.08.2013', type: 'dec' },
      { value: '1 112.90', date: '30.08.2020', type: 'dec' },
      { value: '112.90', date: '30.08.2023', type: 'inc' },
      { value: '11 223', date: '30.08.2023', type: 'dec' },
    ],
  },
];

const generalSettings = {
  facebook: 'https://www.facebook.com/',
  telegram: 'https://web.telegram.org',
  instagram: 'https://www.instagram.com/'
};

module.exports = {
  users,
  generalSettings
};
