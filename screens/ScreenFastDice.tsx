import { View } from 'react-native';
import { RootTabScreenProps } from '../types';
import  SimpleText  from '../components/SimpleText';

export default function ScreenFastDice({ navigation }: RootTabScreenProps<'FastDice'>) {
  return (
    <View>
      <SimpleText textType="simple">Tela de dado rápido</SimpleText>
    </View>
  );
}