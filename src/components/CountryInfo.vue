<template>
  <div class="p-6 max-w-xl container border rounded-md text-white" v-if="infoCountry">
    <div class="rounded text-center">
      <img class="w-full" :src="infoCountry.flags.png" :alt="infoCountry.flags.alt" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
          <h1>{{ infoCountry.name.common }}</h1>
        </div>
        <p class="text-gray-100y"><strong>Capital: </strong>{{ infoCountry.capital[0] }}</p>
        <p class="text-gray-100y"><strong>Region: </strong>{{ infoCountry.region }}</p>
        <p class="text-gray-100y"><strong>Sub Region: </strong>{{ infoCountry.subregion }}</p>
        <p class="text-gray-100y">
          <strong>Population: </strong>{{ infoCountry.population.toLocaleString() }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          <a :href="infoCountry.maps.googleMaps">See Map</a></span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const infoCountry = ref(null)
import axiosQuery from '../utils/CountriesService'

const fetchCountry = async () => {
  try {
    const route = useRoute()
    const countryName = route.params.country

    const { data } = await axiosQuery.get(`/name/${countryName}`)
    infoCountry.value = await data[0]
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  await fetchCountry()
})
</script>
