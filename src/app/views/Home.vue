<template>
  <div id="home" class="grid grid-cols-10">
    <div class="col-span-5">
      <div class="text-center text-gray-200 pb-5">Criar Nota 👇</div>
      <Formulario />
    </div>
    <div class="col-span-5">
      <div class="row-span-5">
        <div class="text-center text-gray-200 pb-5">Minhas Notas 👇</div>
        <div class="overflow-y-auto h-halfScreen">
          <Lista v-for="nota of notas" :key="nota.id" :nota="nota" />
        </div>
      </div>
      <div class="row-span-5">

      </div>
    </div>
  </div>
</template>

<script>
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';

export default {
  name: 'Home',
  components: {
    Lista, Formulario
  },
  setup() {
    const notas = [
      {
        id: 1,
        titulo: 'blablabla',
        descricao: 'lalalalalalalalalalalalalalla',
        redeSocial: 'Facebook'
      },
      {
        id: 2,
        titulo: 'bleyblade',
        descricao: 'Ganhar o campeonato do dragao...',
        redeSocial: 'Facebook'
      },
      {
        id: 3,
        titulo: 'blablabla',
        descricao: 'lalalalalalalalalalalallla',
        redeSocial: 'Facebook'
      },
      {
        id: 4,
        titulo: 'bleyblade',
        descricao: 'Ganhar o campeonato do dragao...',
        redeSocial: 'Facebook'
      },

    ];

    return {
      notas
    };
  }
};
</script>
