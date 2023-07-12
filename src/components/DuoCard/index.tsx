import { TouchableOpacity, View, Text } from 'react-native';
import { GameController } from 'phosphor-react-native';

import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

import { THEME } from '../../theme';

export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Name" value={data.name} />
      <DuoInfo label="Years Playing" value={`${data.yearsPlaying} year(s)`} />
      <DuoInfo
        label="Availability"
        value={`${data.weekDays.length} day(s) \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo
        label="Audio Call"
        value={data.useVoiceChannel ? 'Yes' : 'No'}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />
      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>Connect</Text>
      </TouchableOpacity>
    </View>
  );
}
