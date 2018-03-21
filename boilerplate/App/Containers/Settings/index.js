import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { connect } from 'react-redux'
import { Content, Icon, Button, Text } from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from 'Redux/YourRedux'

// Styles
import styles from './styles'

class Settings extends Component {
  static navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'ios-search-outline'}
        size={30}
        style={{color: tintColor}}
      />
    )
  }

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <Content style={styles.container}>
        <View style={styles.titleSection}>
          <Text style={styles.titleText}>Settings</Text>
        </View>
      </Content>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
