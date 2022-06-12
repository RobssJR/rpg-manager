import { View } from 'react-native';
import { RootTabScreenProps } from '../types';
import  SimpleText  from '../components/SimpleText';

export default function ScreenHome({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View>
      <SimpleText textType="simple">Tela de login</SimpleText>
    </View>
  );
}
