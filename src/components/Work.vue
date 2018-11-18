<template>
  <article>
    <h1>Portefølje</h1>
    <figure v-for="(project, index) in projects" :key="index">
      <figcaption>
        <h3>{{ project.id }}</h3>
        <h4>{{ project.title }}</h4>
        <h5>Made with {{ project.tools }}</h5>
        <p>{{ project.description }}</p>
      </figcaption>
      <img :src="project.image" :alt="project.title">
      <a :href="project.url">{{project.url}}</a>
    </figure>
  </article>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: '01',
          title: 'NeuroFokus',
          description: '',
          tools: 'HTML5, SCSS & Barba.js',
          year: '2018',
          image: '../static/neurofokus.jpg',
          url: 'https://www.neurofokus.dk'
        },
        { id: '02',
          title: 'Unge Humanister',
          description: '',
          tools: 'SCSS & Umbraco',
          year: '2018',
          image: '../static/ungehumanister.jpg',
          url: 'http://www.ungehumanister.dk'
        },
        { id: '03',
          title: 'Baulein Branding',
          description: '',
          tools: 'Nuxt.js',
          year: '2018',
          image: '../static/braulein.jpg',
          url: 'http://www.braulein.dk'
        },
        { id: '04',
          title: 'Ene Es',
          description: '',
          tools: 'Vue.js & Prismic.io',
          year: '2018',
          image: '../static/enees.jpg',
          url: 'https://www.ene-es.dk'
        },
        { id: '05',
          title: 'PrettyUgly',
          description: '',
          tools: 'HTML5 & CSS3',
          year: '2018',
          image: '../static/prettyugly.jpg',
          url: 'http://www.pretty-ugly.dk'
        },
        { id: '06',
          title: 'Telefon Jokeren',
          description: '',
          tools: 'Vue.js',
          year: '2018',
          image: '../static/telefonjokeren.jpg',
          url: 'https://www.telefonjokeren.dk'
        }
      ]
    } 
  }
}
</script>
