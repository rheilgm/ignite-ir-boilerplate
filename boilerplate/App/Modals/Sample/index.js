import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Icon, Content } from 'native-base'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from 'Redux/YourRedux'

// Styles
import styles from './styles'

export default class SampleModal extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <View style={styles.container}>
        <Content>
          <View style={styles.titleSection}>
            <Text style={styles.titleText}>Modal</Text>
          </View>
        </Content>

        <View style={styles.modalBack}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon name='ios-arrow-round-back' style={{fontSize: 40}} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
