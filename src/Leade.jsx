import './leader.css'
import "tailwindcss";

const people = [
    {
      name: 'Bendriss Anis',
      role: 'President',
      imageUrl:
        'src/graphics/anis.jpg',
    },

    {
            name: 'Hadjij Chourouk',
    role: 'Vice President | Designer',
    imageUrl:'src/graphics/sun.jpg',
    },

    {
        name : "Benouali Omar Walid",
        role:'Ex president',
        imageUrl:'src/graphics/walid.jpg'
    },

    {
        name:'Derradji Amine Abdelbasset',
        role:'Head of RE Department | Developer',
        imageUrl:'src/graphics/me.jpg'
    }, {
        name: 'Taleb Ali',
        role:'Secretary General',
         imageUrl:'src/graphics/ali2.jpg'

    },
    {
        name:"Sibelkhir Moncef",
        role:"  Head of Developemnt Department",
        imageUrl:"src/graphics/nmoncef.jpg"
    },
    {
      name:"Guerroudj Abdelwaheb",
      role:"Ex vice president | Social Media Manager",
      imageUrl:"src/graphics/waheb.jpg"
    },
    {
      name:"Farah Messaouden",
      role:"Head of Design Department",
      imageUrl:"src/graphics/farah3.jpg",
    },
    {
      name:"Nour Meriem",
      role:"Head of Communication Department",
      imageUrl:"src/graphics/nour.jpg",
    },
    {
      name:"Touati Billal",
      role:" Head of Social Media Department",
      imageUrl:"src/graphics/2098873.svg"
    },

    {
      name : "Rouba Amina",
      role:"Designer",
      imageUrl :'src/graphics/amina.jpg'
    },
    {
      name:"Bouarroudj Meriem",
      role:"Ex Head of Dev Department + Project Department | One of the most active membres in our team",
      imageUrl:"src/graphics/meriem.jpg"
    },
    {
      name:"Tayeb-Bey Akram",
      role:"RE Manager",
      imageUrl:"src/graphics/akram1.jpg"
    },
    {
      name:"Dahmene Chaima",
      role:"Social Media | Sponsorship",
      imageUrl:"src/graphics/2098873.svg",
    },
    {
      name:"Achouri Sara",
      role:"Active Membre",
      imageUrl:"src/graphics/2098873.svg",
    },
    {
      name:"Boudelal Abderrahman",
      role:"EX Head of Design Department",
      imageUrl:"src/graphics/boud.jpg"
    },
    {
      name:"Kawther",
      role:"EX Vice President",
      imageUrl:"src/graphics/kawter.jpg"
    },
    {
      name:"Soufi Yacine",
      role:"Designer",
      imageUrl:"src/graphics/yasin.jpg",
    },
    {
      name:"Djemai Abla",
      role:"Membre Active",
      imageUrl:"src/graphics/2098873.svg"
    },
    {
      name:"Ghedir Israa",
      role:"Active Membre",
      imageUrl:"src/graphics/2098873.svg",
    },
  ]
  
  export default function Leaders() {
    return (
      <div className="firstOne">
        <div className="secondOne">
                  <div  className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Meet our Leaders
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We  have great members who together form the Egenergy community which is the secret of our success and continuous development.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" width="100px" src={person.imageUrl} className="size-16 rounded-full" />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
        </div>

      </div>
      
    )
  }

  