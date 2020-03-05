<template>
  <div class="lista grid grid-cols-6 gap-1 m-2 bg-gray-300 rounded shadow">
    <div class="item m-3 col-span-5">
      <div id="titulo" class="m-1 flex justify-between">
        <div>{{ nota.titulo }}</div>
        <div class="text-sm">[{{ nota.redeSocial }}]</div>
      </div>
      <div id="descricao" class="m-1">{{ nota.descricao }}</div>
    </div>
    <div class="item col-span-1 p-1 m-auto">
      <font-awesome-icon
        class="text-purple-700 hover:text-blue-600 text-lg"
        icon="share-square"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lista',
  props: {
    nota: {
      id: Number,
      titulo: String,
      descricao: String,
      redeSocial: String
    }
  }
};
</script>

<style></style>
