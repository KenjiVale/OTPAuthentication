import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../config/colors';

const OTPScreen = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  return (
    <>
      <View style={styles.container}>
        <Image source={require('../../assets/bgOTP2.png')} style={styles.img} />
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.h2}>
          We Will Send you an One Time Password on this{' '}
          <Text style={{fontWeight: 'bold'}}>Mobile Number</Text>
        </Text>
        <Text style={[styles.h2, {fontWeight: 'bold', marginTop: 10}]}>
          +62 - 821312335
        </Text>
        <View style={{flexDirection: 'row', marginTop: 18}}>
          <TextInput
            style={styles.input}
            onChangeText={setText1}
            value={text1}
            maxLength={1}
          />
          <TextInput
            style={styles.input}
            onChangeText={setText2}
            value={text2}
            maxLength={1}
          />
          <TextInput
            style={styles.input}
            onChangeText={setText3}
            value={text3}
            maxLength={1}
          />
          <TextInput
            style={styles.input}
            onChangeText={setText4}
            value={text4}
            maxLength={1}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text style={[styles.h2, {fontSize: 12}]}>
            Do not receive code ?{' '}
            <Text style={{fontWeight: 'bold', color: colors.orange}}>
              Re-send
            </Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Authenticate</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default OTPScreen;

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
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    backgroundColor: colors.gray3,
    borderColor: colors.orange,
    textAlign: 'center',
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
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
