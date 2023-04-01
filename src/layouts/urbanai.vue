<template>
    <div class="container">
      <div class="w-full w-7/8 sm:w-1/4 md:w-2/3 mx-auto flex flex-col items-left mt-24">
        <header class="flex flex-col">
            <router-link class="bg-gray-200 px-4 mb-6 font-bold py-2 flex" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13v7l-8-8 8-8v7h8v2z"/></svg>
                GO BACK
            </router-link>
            <div class="flex flex-col mb-6">
                <div class="text-3xl lg:text-5xl py-3 font-bold text-black">{{ $frontmatter.title }}</div>
                <div class="text-blue-600 font-semibold">MPLAN SEMINAR SERIES 2023</div>
            </div>
        </header>
        <div class="w-full flex flex-col rounded-xl overflow-hidden pb-6 bg-gray-50 shadow-2xl mb-24">
            <img class="w-full h-48 object-center object-cover mr-12 bg-red rounded-sm" :src="$frontmatter.banner"/>
            <div class="flex flex-col p-6 sm:p-12">
                <div class="flex text-md sm:text-xl">
                    <div class="text-md font-semibold mr-2">DATE:</div>
                    <div >{{ $frontmatter.date }}</div>
                </div>
                <div class="flex text-md sm:text-xl mt-2">
                    <div class="text-md font-semibold mr-2">TIME:</div>
                    <div>{{ $frontmatter.time }}</div>
                </div>
                <div class="mt-3 flex text-md text-pink-600 font-semibold mt-2 items-center">
                    <svg class="hidden sm:flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="17" height="17"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>
                    <div class="sm:ml-3">{{ $frontmatter.location }}</div>
                </div>
                <div class="flex text-sm mt-2">
                    <div>{{ $frontmatter.access }}</div>
                </div>
                <div class="flex text-md mt-2">
                    <a target="_blank" class="bg-blue-600 text-white font-semibold transition-all hover:shadow-xl rounded-lg py-2 px-3 mt-2" :href="$frontmatter.rsvp">Virtual Seminar - RSVP</a>
                </div>
                <div class="flex text-md mt-2">
                    <a target="_blank" class="bg-blue-600 text-white font-semibold transition-all hover:shadow-xl rounded-lg py-2 px-3 mt-2" :href="$frontmatter.rsvpVirtual">Attend in-person - RSVP</a>
                </div>
                <hr class="mt-8">
                <div class="text-gray-500 mt-6 mb-4 text-small">SEMINAR DESCRIPTION</div>
                <div class="markdown">
                    <slot></slot>
                </div>
                
            </div>
        </div>
          

      </div>
    </div>
  </template>

<style scoped>

/*! Typebase.less v0.1.0 | MIT License */
/* Setup */
.markdown {
  /* Change default typefaces here */
  font-size: 107.5%;
  -webkit-font-smoothing: antialiased;
}
/* Copy & Lists */
p {
  margin-bottom: 0;
}
ul,
ol {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
ul li,
ol li {
  line-height: 1.5rem;
}
ul ul,
ol ul,
ul ol,
ol ol {
  margin-top: 0;
  margin-bottom: 0;
}
blockquote {
  line-height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
/* Headings */
h1,
h2,
h3,
h4,
h5,
h6 {
  /* Change heading typefaces here */
  margin-top: 1.5rem;
  margin-bottom: 0;
}
h1 {
  font-size: 4.242rem;
  line-height: 4.5rem;
  margin-top: 3rem;
}
h2 {
  font-size: 2.828rem;
  line-height: 3rem;
  margin-top: 3rem;
}
h3 {
  font-size: 1.414rem;
}
h4 {
  font-size: 0.707rem;
}
h5 {
  font-size: 0.4713333333333333rem;
}
h6 {
  font-size: 0.3535rem;
}
/* Tables */
table {
  margin-top: 1.5rem;
  border-spacing: 0px;
  border-collapse: collapse;
}
table td,
table th {
  padding: 0;
  line-height: 33px;
}
/* Code blocks */
code {
  vertical-align: bottom;
}
/* Leading paragraph text */
.lead {
  font-size: 1.414rem;
}
/* Hug the block above you */
.hug {
  margin-top: 0;
}


</style>
