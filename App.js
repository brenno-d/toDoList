import { useEffect, useState } from 'react';
import CardToDo from './components/cardToDo';
import styles from './app/styles/styles';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  AdicionarItem,
  BuscarToDos,
  DeletarItem,
  AtualizarItem,
} from './app/asyncStorage';

export default function App() {
  const [texto, setTexto] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  async function carregarTarefas() {
    const dados = await BuscarToDos();
    setTarefas(dados);
  }

  async function adicionarTarefa() {
    if (!texto.trim()) {
      return;
    }

    const novaTarefa = {
      id: Date.now().toString(),
      titulo: texto,
      subtitulo: subtitulo,
      concluida: false,
    };

    const novasTarefas = await AdicionarItem(novaTarefa);

    setTarefas(novasTarefas);
    setTexto('');
    setSubtitulo('');
  }

  async function excluirTarefa(id) {
    const novasTarefas = await DeletarItem(id);
    setTarefas(novasTarefas);
  }

  async function alternarTarefa(tarefa) {
    const tarefaAtualizada = {
      ...tarefa,
      concluida: !tarefa.concluida,
    };

    const novasTarefas = await AtualizarItem(tarefaAtualizada);
    setTarefas(novasTarefas);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Deixa pra depois list</Text>

      <View style={styles.formulario}>
        <View style={styles.camposFormulario}>
          <TextInput
            style={styles.input}
            placeholder="Título"
            value={texto}
            onChangeText={setTexto}
            onSubmitEditing={adicionarTarefa}
          />

          <TextInput
            style={styles.inputSubtitulo}
            placeholder="Detalhes"
            value={subtitulo}
            onChangeText={setSubtitulo}
            onSubmitEditing={adicionarTarefa}
          />
        </View>

        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={adicionarTarefa}
        >
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardToDo
            item={item}
            excluirTarefa={excluirTarefa}
            alternarTarefa={alternarTarefa}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.mensagemVazia}>
            Nenhuma tarefa adicionada
          </Text>
        }
      />
    </View>
  );
}