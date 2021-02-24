export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6036865c79bdf100bb33f397',
                  title: 'Sanity Studio',
                  name: 'next-sanity-netlify-tut-studio',
                  apiId: 'd7dae0fc-9604-41b2-a8cd-062ab1654f14'
                },
                {
                  buildHookId: '6036865ca59c8500dc39f412',
                  title: 'Landing pages Website',
                  name: 'next-sanity-netlify-tut',
                  apiId: '3139c566-8d72-41fb-bd03-4c202a7b29fa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JohnnyBEdge/next-sanity-netlify-tut',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://next-sanity-netlify-tut.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
