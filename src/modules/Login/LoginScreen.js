import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import colors from '../../config/colors';
import CheckBox from '@react-native-community/checkbox';

const LoginScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (toggleCheckBox == true) {
      setModalVisible(true);
    }
  }, [toggleCheckBox]);

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>RECAPTCHA</Text>
        </View>
      </Modal>
      <View style={styles.container}>
        <Image source={require('../../assets/bgOTP.png')} style={styles.img} />
        <Text style={styles.title}>PHONE NUMBER</Text>
        <Text style={styles.h2}>
          Please enter your country code and phone number
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          <TextInput
            style={[styles.input, {width: '15%', marginRight: -5}]}
            onChangeText={setText}
            value={text}
            placeholder={'+62'}
          />
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder={'Phone Number'}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {
              justifyContent: 'flex-start',
              backgroundColor: colors.white,
              flexDirection: 'row',
            },
          ]}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColors={{true: colors.orange}}
          />
          <Text>I'm not a robot</Text>
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate('OTPScreen');
          }}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: 7}}>
          <Text style={[styles.h2, {fontSize: 12}]}>
            No account ?{' '}
            <Text
              style={{fontWeight: 'bold', color: colors.orange}}
              onPress={() => {
                navigation.navigate('RegistrationScreen');
              }}>
              Register Now
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',

    justifyContent: 'flex-start',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black2,
    marginBottom: 10,
    marginTop: 34,
  },
  h2: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.black,
    lineHeight: 19,
    width: '70%',
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '60%',
    margin: 12,
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: colors.gray3,
    borderColor: colors.orange,
    paddingHorizontal: 15,
  },
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: '50%',
  },
  buttonContainer: {
    backgroundColor: colors.orange,
    height: 40,
    width: '75%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
