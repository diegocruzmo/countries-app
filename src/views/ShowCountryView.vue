<template>
  <Suspense>
    <CountryInfo :country="infoCountry" />
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axiosQuery from '../utils/CountriesService'
import CountryInfo from '../components/CountryInfo.vue'

let countryName = ref('')
let infoCountry = ref([])

const fetchCountry = async () => {
  try {
    const { data } = await axiosQuery.get(`/name/${countryName.value}`)
    infoCountry.value = await data
    console.log(infoCountry)
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  const route = useRoute()
  countryName.value = route.params.country
  fetchCountry()
})
</script>
