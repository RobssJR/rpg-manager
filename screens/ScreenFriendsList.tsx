import { View } from 'react-native';
import { RootTabScreenProps } from '../types';
import  SimpleText  from '../components/SimpleText';

export default function ScreenFriendsList({ navigation }: RootTabScreenProps<'FriendList'>) {
  return (
    <View>
      <SimpleText textType="simple">Tela de amigos</SimpleText>
    </View>
  );
}