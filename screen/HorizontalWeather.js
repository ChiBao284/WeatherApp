import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {horizontalStatus, horizontalFlatListData} from '../data/weatherData';
import Icon from 'react-native-vector-icons/Ionicons';
class HorizontalFlatlist extends Component {
  render() {
    return (
      <View style={styles.itemWeather}>
        <Text style={styles.txt}>{this.props.item.hour}</Text>
        <Icon name={this.props.item.status.android} size={30} color="white" />
        <Text style={styles.txt}>{this.props.item.degrees} °C</Text>
      </View>
    );
  }
}
class HorizontalDay extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignContent: 'center',
        }}>
        <Text style={styles.txtDay}>{this.props.item.day}</Text>
        <Icon name={this.props.item.status.android} size={25} color="white" />
        <Text style={styles.txtDay}>{this.props.item.degrees} °C</Text>
      </View>
    );
  }
}

export default class HorizontalWeather extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.bg}>
          <Image
            source={require('../Images/file-20180820-30593-1nxanpj.jpg')}
          />
        </View>
        <View style={{height: 150}}>
          <FlatList
            horizontal={true}
            style={styles.flatlistHorizontal}
            data={horizontalFlatListData}
            renderItem={({item, index}) => {
              return (
                <HorizontalFlatlist
                  item={item}
                  index={index}
                  parentFlatList={this}
                />
              );
            }}
          />
        </View>
        <View style={styles.day}>
          <FlatList
            //horizontal={true}
            style={styles.flatlistDay}
            data={horizontalFlatListData}
            renderItem={({item, index}) => {
              return (
                <HorizontalDay
                  item={item}
                  index={index}
                  parentFlatList={this}
                />
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
  },
  flatlistHorizontal: {
    opacity: 0.5,
    backgroundColor: 'black',
  },
  flatlistDay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  itemWeather: {
    margin: 4,
    borderRadius: 10,
    borderColor: 'grey',
    alignItems: 'center',
    flex: 1,
    width: 90,
    borderWidth: 1,
  },
  txt: {
    fontSize: 16,
    margin: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  txtDay: {
    fontSize: 16,
    margin: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  bg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  day: {
    marginTop: 20,
    flex: 1,
  },
});
