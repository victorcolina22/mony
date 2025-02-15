import { Link } from 'expo-router';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default function Register() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View className='flex-1 items-center justify-center gap-2'>
        <TextInput
          className='border border-black rounded-md w-1/2 p-3'
          placeholder='usuario'
          placeholderTextColor='gray'
        />
        <TextInput
          className='border border-black rounded-md w-1/2 p-3'
          placeholder='contraseña'
          placeholderTextColor='gray'
        />
        <TextInput
          className='border border-black rounded-md w-1/2 p-3'
          placeholder='repetir contraseña'
          placeholderTextColor='gray'
        />

        <Link
          asChild
          href={'/(onboarding)'}
          className='border border-red-500 px-5 py-3 rounded-md mt-20'
        >
          <Text>Go to onboarding</Text>
        </Link>
      </View>
    </TouchableWithoutFeedback>
  );
}
