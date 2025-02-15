import { Link } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

export default function MainScreen() {
  return (
    <View className='flex-1 items-center justify-center'>
      <View className='flex flex-col gap-2'>
        <Link asChild href={'/(register)'}>
          <TouchableOpacity className='border border-black rounded-md px-6 py-3'>
            <Text className='text-center'>Crear una cuenta</Text>
          </TouchableOpacity>
        </Link>

        <Link asChild href={'/(login)'}>
          <TouchableOpacity className='border border-black rounded-md px-6 py-3'>
            <Text className='text-center'>Iniciar sesión</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
