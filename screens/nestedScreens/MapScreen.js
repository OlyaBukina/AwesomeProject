import PropTypes from 'prop-types';

import { View, Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// eslint-disable-next-line react/prop-types
export const MapScreen = ({ route }) => {
  // eslint-disable-next-line react/prop-types
  const { coords, place, title } = route.params;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          ...coords,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {coords && (
          <Marker title={title} coordinate={coords} description={place} />
        )}
      </MapView>
    </View>
  );
};

MapScreen.PropTypes = {
  route: PropTypes.shape({
    coords: PropTypes.objectOf(PropTypes.number),
    place: PropTypes.string,
    title: PropTypes.string,
  }),
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  mapStyle: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});
