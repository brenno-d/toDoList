import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../app/styles/styles';

export default function CardToDo({
  item,
  excluirTarefa,
  alternarTarefa,
}) {
  return (
    <View style={styles.tarefa}>
      <TouchableOpacity
        style={styles.tarefaConteudo}
        onPress={() => alternarTarefa(item)}
      >
        <View
          style={[
            styles.checkbox,
            item.concluida && styles.checkboxConcluido,
          ]}
        >
          {item.concluida && (
            <Text style={styles.check}>✓</Text>
          )}
        </View>

        <View style={styles.textosTarefa}>
          <Text
            style={[
              styles.tituloTarefa,
              item.concluida && styles.tituloConcluido,
            ]}
          >
            {item.titulo}
          </Text>

          {!!item.subtitulo && (
            <Text
              style={[
                styles.subtituloTarefa,
                item.concluida && styles.subtituloConcluido,
              ]}
            >
              {item.subtitulo}
            </Text>
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoExcluir}
        onPress={() => excluirTarefa(item.id)}
      >
        <Text style={styles.textoExcluir}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}