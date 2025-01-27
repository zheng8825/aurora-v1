import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/christian-buehner-DItYlc26zVI-unsplash.jpg',
    name: 'Phase Change Material (PCM)',
    category: 'UI/UX Design',
    description:
      'Phase Change Materials (PCMs) are unique substances that absorb, store, and release thermal energy during phase transitions. Integrating PCMs into building components helps lower cooling load demands and surface temperatures',
    company: {
      name: 'Grab',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 2,
    photo: '/images/mentors/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg',
    name: 'Thermal insulation',
    category: 'Machine Learning',
    description:
      "Thermal insulation is a material that helps to slow down the transfer of heat. It's used in buildings, pipes, and other applications to keep things warm or cold",
    company: {
      name: 'Google',
      logo: '/images/companies/google.png',
    },
  },
  // {
  //   id: 3,
  //   photo: '/images/mentors/noah-buscher-8A7fD6Y5VF8-unsplash.jpg',
  //   name: 'Nguyễn Thuy',
  //   category: 'Android Development',
  //   description:
  //     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   company: {
  //     name: 'Airbnb',
  //     logo: '/images/companies/airbnb.png',
  //   },
  // },
  // {
  //   id: 4,
  //   photo: '/images/mentors/philip-martin-5aGUyCW_PJw-unsplash.jpg',
  //   name: 'Rizki Known',
  //   category: 'Fullstack Development',
  //   description:
  //     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   company: {
  //     name: 'Microsoft',
  //     logo: '/images/companies/microsoft.png',
  //   },
  // },
]
