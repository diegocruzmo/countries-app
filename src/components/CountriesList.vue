<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-gray-300">
    <div
      v-for="country in countries"
      :key="country.name.common"
      class="border border-gray-300 rounded p-3"
    >
      <CountryItem :country="country" />
    </div>
  </div>
</template>

<script setup>
import CountryItem from './CountryItem.vue'
import { defineProps } from 'vue'
defineProps(['countries'])
</script>
