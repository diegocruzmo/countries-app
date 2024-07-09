<template>
  <router-link :to="{ name: 'country', params: { country: country.name.common } }">
    <div class="h-24">
      <img class="h-24 w-full" :src="country.flags.png" :alt="country.flags.alt" />
    </div>
    <h4 class="text-md mt-2">{{ country.name.common }}</h4>
    <p class="text-sm">
      Capital:
      <span v-for="capital in country.capital" :key="capital" class="font-bold">{{ capital }}</span>
    </p>
    <p class="text-sm">
      Population: <span class="font-bold">{{ country.population?.toLocaleString() }}</span>
    </p>
    <p class="text-sm">
      Region: <span class="font-bold">{{ country.region }}</span>
    </p>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps(['country'])
</script>
