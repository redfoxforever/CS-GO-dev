const base = {
    navLinks: [
        {
            name: 'главная',
            url: 'home',
            active: true
        },
        {
            name: 'игроки',
            url: 'players',
            active: false
        },
        {
            name: 'активные игроки',
            url: 'active players',
            active: false
        },
        {
            name: 'соревнование',
            url: 'competitions',
            active: false
        },
        {
            name: 'команды',
            url: 'teams',
            active: false
        },
    ],
    home: {
        header: {
            desc: {
                title: [
                    {
                        text: 'quelecs'
                    },
                    {
                        text: 'game project'
                    }
                ],
                text: "Quelecs - игровой проект в CS:GO. У нас имеется более 100+ сероверов, наши игрокви счастливы и довольны.",
                links: [
                    {
                        name: 'go to server',
                        url: ''
                    },
                    {
                        name: 'сreate account',
                        url: ''
                    }
                ]
            },
            img: 'img/home/header/header-img.png'
        }
    },
    allMaps: [
        {
            img: 'img/home/maps/dust2.jpg',
            name: 'DeathMatch',
            category: 'deathmatch',
            unavailable: false
             
        },
        {
            img: 'img/home/maps/inferno-map.png',
            name: 'Duels 1x1',
            category: 'duels',
            unavailable: false
        },
        {
            img: 'img/home/maps/mirage-map.png',
            name: 'retake classic',
            category: 'retake',
            unavailable: false 
        },
        {
            img: 'img/home/maps/pool-map.png',
            name: 'bhop',
            category: 'bhop',
            unavailable: false
        },
        {
            img: 'img/home/maps/inferno-map.png',
            name: 'competitive',
            category: 'competitive',
            unavailable: true
        },
        {
            img: 'img/home/maps/mirage-map.png',
            name: 'casual',
            category: 'casual',
            unavailable: true
        },
        {
            img: 'img/home/maps/dust2.jpg',
            name: 'arms race',
            category: 'arms race',
            unavailable: true
        },
        {
            img: 'img/home/maps/pool-map.png',
            name: 'demolition',
            category: 'demolition',
            unavailable: true
        }
    ],
    mapsTags() {
        let tags = [
            {
                name: 'все',
                locked: false,
                active: true
            }
        ]

        this.allMaps.map(map => {
            tags.push(
                {
                    name: map.category,
                    locked: map.unavailable ? true : false,
                    active: false 
                }
            )
        })

        return tags
    },
    userKey: '1016978d53a748d29dd944c96a5649d9'
}

export default base