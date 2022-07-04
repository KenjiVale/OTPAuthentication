import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import colors from '../../config/colors';
import CheckBox from '@react-native-community/checkbox';

const RegistrationScreen = ({navigation}) => {
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
        <Image source={require('../../assets/bgOTP3.png')} style={styles.img} />
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          style={{width: '100%'}}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>REGISTRATION</Text>

          <Text style={[styles.h2, {width: '60%'}]}>
            By signing in you are agreeing our Term and{' '}
            <Text style={{fontWeight: 'bold', color: colors.orange}}>
              Privacy Policy
            </Text>
          </Text>
          <View style={{width: '100%', alignItems: 'center', marginTop: 15}}>
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
              placeholder={'Name'}
            />
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
              placeholder={'Phone Number'}
            />
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
              placeholder={'Username'}
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
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', marginTop: 7}}>
            <Text style={[styles.h2, {fontSize: 12}]}>
              Already have account ?{' '}
              <Text
                style={{fontWeight: 'bold', color: colors.orange}}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                Login
              </Text>
            </Text>
          </View>
          <View style={{height: 20}} />
        </ScrollView>
      </View>
    </>
  );
};

export default RegistrationScreen;

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
    marginTop: 20,
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
    width: '75%',
    marginVertical: 5,
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
