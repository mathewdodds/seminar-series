<script setup>
import { defineComponent, ref, computed } from 'vue'
import { usePage } from 'iles'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat)

function sortEvents(input) {
  return input.sort((a, b) => {
    const aStart = dayjs(`${a.date} ${a.time.split(' - ')[0]}`, 'MMMM D YYYY h:mm A');
    const bStart = dayjs(`${b.date} ${b.time.split(' - ')[0]}`, 'MMMM D YYYY h:mm A');
    return aStart - bStart;
  });
}

const { frontmatter, meta } = usePage()

function useEvents(){
     const fetchEvents = useDocuments('~/pages/events')
     return (fetchEvents.value)
  }

  const events = sortEvents(useEvents())
  console.log(events)

</script>

<template>
  <div class="container">
    <div class="w-full w-7/8 sm:w-1/4 md:w-2/3 mx-auto flex flex-col items-left mt-24">
      <div class="flex w-full h-2 bg-blue-600 mb-5 sm:mb-12"></div>
      <header class="flex flex-col sm:flex-row items-center">
        <img class="hidden sm:flex sm:w-44 sm:h-44 mr-12 bg-red rounded-full" src="https://i.ibb.co/wsvChkN/sexton.jpg"/>
        <div class="flex flex-col">
          <div class="text-3xl font-bold text-black">{{ frontmatter.title }}</div>
          <div class="text-2xl mt-6 text-black">{{ frontmatter.sub }}</div>
        </div>
      </header>
      <div class="flex flex-col mt-12 sm:mt-24 mb-12">
        <div v-for="event in events" :key="event.id" class="border-t pt-5 mb-2">
          <div class="flex sm:justify-between sm:items-center flex-col sm:flex-row">
            <div class="flex flex-col">
              <div>
                <router-link  :to="event.href" class="text-2xl font-bold transition-all hover:text-blue-900">{{ event.title }}</router-link>
                <div class="flex">
                  <div class="text-md font-semibold mr-2">DATE:</div>
                  <div >{{ event.date }}</div>
                </div>
                <div class="flex">
                  <div class="text-md font-semibold mr-2">TIME:</div>
                  <div>{{ event.time }}</div>
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <router-link  :to="event.href" class="border-blue-600 border-2 mt-3 sm:mt-0 mb-3 sm:mb-0 text-blue-600 hover:text-blue-300 transition-all font-semibold p-2 sm:p-4">
                Event Details / RSVP
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
