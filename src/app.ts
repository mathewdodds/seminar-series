import { defineApp } from 'iles'
import 'virtual:windi.css'
import '~/assets/base.css'


export default defineApp({
    head ({ frontmatter, site }) {
        return {
          link: [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
            { href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap', rel: 'stylesheet' }
          ]
        }
      }
})
