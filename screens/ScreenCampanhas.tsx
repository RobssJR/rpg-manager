import { View } from 'react-native';
import { RootTabScreenProps } from '../types';
import  SimpleText  from '../components/SimpleText';

export default function ScreenCampanhas({ navigation }: RootTabScreenProps<'Campanhas'>) {
  return (
    <View>
      <SimpleText textType="simple">Tela de campanhas</SimpleText>
    </View>
  );

