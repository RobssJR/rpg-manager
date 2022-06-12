import { View } from 'react-native';
import { RootTabScreenProps } from '../types';
import  SimpleText  from '../components/SimpleText';

export default function ScreenCharacter({ navigation }: RootTabScreenProps<'Characters'>) {
  return (
    <View>
      <SimpleText textType="simple">Tela de personagens</SimpleText>
    </View>
  );
}