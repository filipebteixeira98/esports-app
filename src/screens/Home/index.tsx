import { useState, useEffect } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';

import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch('http://192.168.1.11:3333/games')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Find your duo!"
          subtitle="Choose what game you want to play..."
        />
        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <GameCard data={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
