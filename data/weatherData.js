var horizontalStatus = {
  rainy: {
    ios: 'ios-rainy',
    android: 'md-rainy',
  },
  cloud: {
    ios: 'ios-cloudy',
    android: 'md-cloud',
  },
  thunderstorm: {
    ios: 'ios-thunderstorm',
    android: 'md-thunderstorm',
  },
  sunny: {
    ios: 'ios-sunny',
    android: 'md-sunny',
  },
};
var horizontalFlatListData = [
  {
    hour: '1 AM',
    status: horizontalStatus.rainy,
    degrees: 24,
    day: 'Monday',
  },
  {
    hour: '2 AM',
    status: horizontalStatus.cloud,
    degrees: 23,
    day: 'Tuesday',
  },
  {
    hour: '3 AM',
    status: horizontalStatus.cloud,
    degrees: 23,
    day: 'Wednesday',
  },
  {
    hour: '4 AM',
    status: horizontalStatus.thunderstorm,
    degrees: 21,
    day: 'Thusday',
  },
  {
    hour: '5 AM',
    status: horizontalStatus.sunny,
    degrees: 25,
    day: 'Friday',
  },
  {
    hour: '6 AM',
    status: horizontalStatus.cloud,
    degrees: 25,
    day: 'Satuday',
  },
  {
    hour: '7 AM',
    status: horizontalStatus.thunderstorm,
    degrees: 23,
    day: 'Sunday',
  },
  {
    hour: '8 AM',
    status: horizontalStatus.cloud,
    degrees: 25,
    day: 'Monday',
  },
  {
    hour: '9 AM',
    status: horizontalStatus.sunny,
    degrees: 29,
    day: 'Tuesday',
  },
  {
    hour: '10 AM',
    status: horizontalStatus.sunny,
    degrees: 32,
    day: 'Wednesday',
  },
];

export {horizontalStatus};
export {horizontalFlatListData};
