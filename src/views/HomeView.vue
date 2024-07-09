<template>
  <main>
    <PageHeader />
    <div class="container max-w-screen-lg mb-5 mx-auto px-6">
      <div class="pt-4 mb-8 relative">
        <input
          type="text"
          placeholder="Search for a country..."
          class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none text-white"
          v-model="search"
          @input="filterCountries"
        />
      </div>
      <CountriesList :countries="paginationCountries" />
      <div class="mb-8 flex gap-3 justify-center">
        <button
          :class="{ 'opacity-55': page <= 1 }"
          :disabled="page <= 1"
          @click="($event) => changePage(page - 1)"
          class="rounded bg-countries-secondary text-white mt-8 p-2"
        >
          Prevoius
        </button>
        <button
          :class="{ 'opacity-55': page >= 12 }"
          :disabled="page >= 12"
          @click="($event) => changePage(page + 1)"
          class="rounded bg-countries-secondary text-white mt-8 p-2"
        >
          Next
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import CountriesList from '../components/CountriesList.vue'
import PageHeader from '../components/PageHeader.vue'
import axiosQuery from '../utils/CountriesService'
import { onMounted, ref, watch } from 'vue'

const countries = ref([])
const search = ref('')
const filteredCountries = ref([])
const page = ref(1)
const itemsXPage = ref(12)
const paginationCountries = ref([])

const fetchCountries = async () => {
  try {
    const { data } = await axiosQuery.get('/all')
    countries.value = data
  } catch (error) {
    console.log(error)
  }
}

const filterCountries = () => {
  filteredCountries.value = countries.value.filter((country) =>
    country.name.common.toLowerCase().includes(search.value.toLowerCase())
  )
}

const getPaginationCountries = (currentCountries) => {
  const begin = (page.value - 1) * itemsXPage.value
  const end = page.value * itemsXPage.value
  paginationCountries.value = currentCountries.slice(begin, end)
}

const changePage = (newPage) => {
  page.value = newPage
}

onMounted(() => {
  fetchCountries()
})

watch([countries, page, filteredCountries], () => {
  getPaginationCountries(
    filteredCountries.value.length <= 0 && search.value === ''
      ? countries.value
      : filteredCountries.value
  )
})
</script>
