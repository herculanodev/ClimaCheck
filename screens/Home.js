import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';

function Home(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        Hoje
      </Text>

      <Text style={styles.data}>
        seg, 11 de setembro
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },

  title: {
    color: '#FFA43A'
  },

  data:{
    color: '#EEEEEE'
  }
})

export default Home