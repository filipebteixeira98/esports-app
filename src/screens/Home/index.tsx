import { View, Image, FlatList } from 'react-native';

import { styles } from './styles';

import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

import logoImg from '../../assets/logo-nlw-esports.png';

import { GAMES } from '../../utils/games';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Find your duo!"
        subtitle="Choose what game you want to play..."
      />
      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
