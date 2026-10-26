import AsyncStorage from '@react-native-async-storage/async-storage';

const chave = '@toDo';

export async function AdicionarItem(itemAdicionar) {
  const dados = await BuscarToDos();
  const novosDados = [...dados, itemAdicionar];
  await AsyncStorage.setItem(chave, JSON.stringify(novosDados));
  return novosDados;
}

export async function DeletarItem(idDeletar) {
  const dados = await BuscarToDos();
  const novosDados = dados.filter(
    (item) => String(item.id) !== String(idDeletar)
  );

  await AsyncStorage.setItem(chave, JSON.stringify(novosDados));

  return novosDados;
}

export async function AtualizarItem(itemAtualizado) {
  const dados = await BuscarToDos();

  const novosDados = dados.map((item) =>
    item.id === itemAtualizado.id ? itemAtualizado : item
  );
  await AsyncStorage.setItem(chave, JSON.stringify(novosDados));
  return novosDados;
}

export async function BuscarToDos() {
  const dados = await AsyncStorage.getItem(chave);
  if (!dados) {
    return [];
  }
  return JSON.parse(dados);
}