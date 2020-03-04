export default {
    featured: { 
        title: 'Featured',
        slug: 'featured',
        search: 'Search All Games',
        sub: null
    },
    slots: {
        title: 'Slots',
        slug: 'slots',
        search: 'Search All Slots',
        sub: [
            { title: 'Featured', slug: 'featured', width: 80 },
            { title: 'Exclusives', slug: 'exclusives', width: 80 },
            { title: 'Popular', slug: 'popular', width: 80 },
            { title: 'Multi-Line', slug: 'multiline', width: 90 }
        ]
    },
    jackpots: {
        title: 'Jackpots',
        slug: 'jackpots',
        search: 'Search All Jackpot Games',
        sub: [
            { title: 'Featured', slug: 'featured', width: 80 },
            { title: 'Must Drop', slug: 'mustdrop', width: 90 },
            { title: 'Vegas Millions', slug: 'vegasmillions', width: 110 }
        ]
    },
    live: {
        title: 'Live',
        slug: 'live',
        search: 'Search All Live Casino Games',
        sub: [
            { title: 'Featured', slug: 'featured', width: 80 },
            { title: 'Blackjack', slug: 'blackjack', width: 80 },
            { title: 'Roulette', slug: 'roulette', width: 90 },
            { title: 'Game Show', slug: 'gameshow', width: 100 }
        ]
    },
    table: {
        title: 'Table',
        slug: 'table',
        search: 'Search All Card & Table Games',
        sub: [
            { title: 'Featured', slug: 'featured', width: 80 },
            { title: 'Blackjack', slug: 'blackjack', width: 80 },
            { title: 'Roulette', slug: 'roulette', width: 90 },
            { title: 'Baccarat', slug: 'baccarat', width: 90 }
        ]
    },
    az: { 
        title: 'A-Z',
        slug: 'az',
        search: 'Search All Games',
        sub: null
    }
}