import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 20,
    paddingTop: 60,
  },

  titulo: {
    fontSize: 28,
    marginBottom: 20,
    color: '#2c3e50',
    textAlign: 'center',
    fontStyle: 'italic'
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },

  tarefa: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  tarefaConteudo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#3498db',
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxConcluido: {
    backgroundColor: '#3498db',
  },

  check: {
    color: '#fff',
    fontWeight: 'bold',
  },

  tituloTarefa: {
    fontSize: 16,
    color: '#2c3e50',
    flexShrink: 1,
  },

  tituloConcluido: {
    textDecorationLine: 'line-through',
    color: '#95a5a6',
  },

  botaoExcluir: {
    backgroundColor: '#e74c3c',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginLeft: 10,
  },

  textoExcluir: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  mensagemVazia: {
    textAlign: 'center',
    color: '#7f8c8d',
    marginTop: 40,
    fontSize: 16,
  },
  formulario: {
  flexDirection: 'row',
  marginBottom: 20,
  alignItems: 'center',
},

camposFormulario: {
  flex: 1,
},

input: {
  height: 48,
  backgroundColor: '#fff',
  borderRadius: 8,
  paddingHorizontal: 12,
  fontSize: 16,
  borderWidth: 1,
  borderColor: '#dcdcdc',
},

inputSubtitulo: {
  height: 40,
  backgroundColor: '#fff',
  borderRadius: 8,
  paddingHorizontal: 12,
  marginTop: 6,
  fontSize: 14,
  borderWidth: 1,
  borderColor: '#dcdcdc',
  color: '#555',
},

botaoAdicionar: {
  marginLeft: 8,
  backgroundColor: '#3498db',
  borderRadius: 8,
  justifyContent: 'center',
  paddingHorizontal: 14,
  height: 96,
},

textosTarefa: {
  flex: 1,
  justifyContent: 'center',
},

subtituloTarefa: {
  fontSize: 13,
  color: '#999',
  marginTop: 3,
  flexShrink: 1,
},

subtituloConcluido: {
  color: '#b8b8b8',
},
});
