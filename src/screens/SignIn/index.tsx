import { Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameController } from 'phosphor-react-native';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';

import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';

import { THEME } from '../../theme';

export function Home() {
  async function handleDiscordSignIn() {}

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading title="Sign In" subtitle="Find your duo and let's play." />
        <TouchableOpacity style={styles.button} onPress={handleDiscordSignIn}>
          <GameController color={THEME.COLORS.TEXT} size={20} />
          <Text style={styles.buttonTitle}>Login with discord</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}
