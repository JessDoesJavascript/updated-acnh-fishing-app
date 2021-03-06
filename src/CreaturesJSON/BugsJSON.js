import React from 'react';

const bugsJSON = [
    {
    "name": "Common Butterfly",
    "location": "Flying",
    "time": "4 AM - 7 PM",
    "price": 160,
    "month": {
    "north": [
    1,
    2,
    3,
    4,
    5,
    6,
    9,
    10,
    11,
    12
    ],
    "south": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Yellow Butterfly",
    "location": "Flying",
    "time": "4 AM - 7 PM",
    "price": 160,
    "month": {
    "north": [
    3,
    4,
    5,
    6,
    9,
    10
    ],
    "south": [
    3,
    4,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Tiger Butterfly",
    "location": "Flying",
    "time": "4 AM - 7 PM",
    "price": 240,
    "month": {
    "north": [
    3,
    4,
    5,
    6,
    7,
    8,
    9
    ],
    "south": [
    1,
    2,
    3,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Peacock Butterfly",
    "location": "Flying by Hybrid Flowers",
    "time": "4 AM - 7 PM",
    "price": 2500,
    "month": {
    "north": [
    3,
    4,
    5,
    6
    ],
    "south": [
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Common Bluebottle",
    "location": "Flying",
    "time": "4 AM - 7 PM",
    "price": 300,
    "month": {
    "north": [
    4,
    5,
    6,
    7,
    8
    ],
    "south": [
    1,
    2,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Paper Kite Butterfly",
    "location": "Flying",
    "time": "8 AM - 7 PM",
    "price": 1000,
    "month": {
    "north": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ],
    "south": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Great Purple Emperor",
    "location": "Flying",
    "time": "4 AM - 7 PM",
    "price": 3000,
    "month": {
    "north": [
    5,
    6,
    7,
    8
    ],
    "south": [
    1,
    2,
    11,
    12
    ]
    }
    },
    {
    "name": "Monarch Butterfly",
    "location": "Flying",
    "time": "4 AM - 5 PM",
    "price": 140,
    "month": {
    "north": [
    9,
    10,
    11
    ],
    "south": [
    3,
    4,
    5
    ]
    }
    },
    {
    "name": "Emperor Butterfly",
    "location": "Flying",
    "time": "5 PM - 8 AM",
    "price": 4000,
    "month": {
    "north": [
    1,
    2,
    3,
    6,
    7,
    8,
    9,
    12
    ],
    "south": [
    1,
    2,
    3,
    6,
    7,
    8,
    9,
    12
    ]
    }
    },
    {
    "name": "Agrias Butterfly",
    "location": "Flying",
    "time": "8 AM - 5 PM",
    "price": 3000,
    "month": {
    "north": [
    4,
    5,
    6,
    7,
    8,
    9
    ],
    "south": [
    1,
    2,
    3,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Rajah Brooke's Birdwing",
    "location": "Flying",
    "time": "8 AM - 5 PM",
    "price": 2500,
    "month": {
    "north": [
    1,
    2,
    4,
    5,
    6,
    7,
    8,
    9,
    12
    ],
    "south": [
    1,
    2,
    3,
    6,
    7,
    8,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Queen Alexandra's Birdwing",
    "location": "Flying",
    "time": "8 AM - 4 PM",
    "price": 4000,
    "month": {
    "north": [
    5,
    6,
    7,
    8,
    9
    ],
    "south": [
    1,
    2,
    3,
    11,
    12
    ]
    }
    },
    {
    "name": "Moth",
    "location": "Flying by Light",
    "time": "7 PM - 4 AM",
    "price": 130,
    "month": {
    "north": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ],
    "south": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Atlas Moth",
    "location": "On Trees",
    "time": "7 PM - 4 AM",
    "price": 3000,
    "month": {
    "north": [
    4,
    5,
    6,
    7,
    8,
    9
    ],
    "south": [
    1,
    2,
    3,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Madagascan Sunset Moth",
    "location": "Flying",
    "time": "8 AM - 4 PM",
    "price": 2500,
    "month": {
    "north": [
    4,
    5,
    6,
    7,
    8,
    9
    ],
    "south": [
    1,
    2,
    3,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Long locust",
    "location": "On the Ground",
    "time": "8 AM - 7 PM",
    "price": 200,
    "month": {
    "north": [
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
    ],
    "south": [
    1,
    2,
    3,
    4,
    5,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Migratory Locust",
    "location": "On the Ground",
    "time": "8 AM - 7 PM",
    "price": 600,
    "month": {
    "north": [
    8,
    9,
    10,
    11
    ],
    "south": [
    2,
    3,
    4,
    5
    ]
    }
    },
    {
    "name": "Rice Grasshopper",
    "location": "On the Ground",
    "time": "8 AM - 7 PM",
    "price": 160,
    "month": {
    "north": [
    8,
    9,
    10,
    11
    ],
    "south": [
    2,
    3,
    4,
    5
    ]
    }
    },
    {
    "name": "Grasshopper",
    "location": "On the Ground",
    "time": "8 AM - 5 PM",
    "price": 160,
    "month": {
    "north": [
    7,
    8,
    9
    ],
    "south": [
    1,
    2,
    3
    ]
    }
    },
    {
    "name": "Cricket",
    "location": "On the Ground",
    "time": "5 PM - 8 AM",
    "price": 130,
    "month": {
    "north": [
    9,
    10,
    11
    ],
    "south": [
    3,
    4,
    5
    ]
    }
    },
    {
    "name": "Bell Cricket",
    "location": "On the Ground",
    "time": "5 PM - 8 AM",
    "price": 430,
    "month": {
    "north": [
    9,
    10
    ],
    "south": [
    3,
    4
    ]
    }
    },
    {
    "name": "Mantis",
    "location": "On Flowers",
    "time": "8 AM - 5 PM",
    "price": 430,
    "month": {
    "north": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
    ],
    "south": [
    1,
    2,
    3,
    4,
    5,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Orchid Mantis",
    "location": "On Flowers (White)",
    "time": "8 AM - 5 PM",
    "price": 2400,
    "month": {
    "north": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
    ],
    "south": [
    1,
    2,
    3,
    4,
    5,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Honeybee",
    "location": "Flying",
    "time": "8 AM - 5 PM",
    "price": 200,
    "month": {
    "north": [
    3,
    4,
    5,
    6,
    7
    ],
    "south": [
    1,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Wasp",
    "location": "Shaking Trees",
    "time": "All day",
    "price": 2500,
    "month": {
    "north": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ],
    "south": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Brown Cicada",
    "location": "On Trees",
    "time": "8 AM - 5 PM",
    "price": 250,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Robust Cicada",
    "location": "On Trees",
    "time": "8 AM - 5 PM",
    "price": 300,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Giant Cicada",
    "location": "On Trees",
    "time": "8 AM - 5 PM",
    "price": 500,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Walker Cicada",
    "location": "On Trees",
    "time": "8 AM - 5 PM",
    "price": 400,
    "month": {
    "north": [
    8,
    9
    ],
    "south": [
    2,
    3
    ]
    }
    },
    {
    "name": "Evening Cicada",
    "location": "On Trees",
    "time": "4 AM - 8 AM & 4 PM - 7 PM",
    "price": 550,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Cicada Shell",
    "location": "On Trees",
    "time": "All day",
    "price": 10,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Red Dragonfly",
    "location": "Flying",
    "time": "8 AM - 7 PM",
    "price": 180,
    "month": {
    "north": [
    9,
    10
    ],
    "south": [
    3,
    4
    ]
    }
    },
    {
    "name": "Darner Dragonfly",
    "location": "Flying",
    "time": "8 AM - 5 PM",
    "price": 230,
    "month": {
    "north": [
    4,
    5,
    6,
    7,
    8,
    9,
    10
    ],
    "south": [
    1,
    2,
    3,
    4,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Banded Dragonfly",
    "location": "Flying",
    "time": "8 AM - 5 PM",
    "price": 4500,
    "month": {
    "north": [
    5,
    6,
    7,
    8,
    9,
    10
    ],
    "south": [
    1,
    2,
    3,
    4,
    11,
    12
    ]
    }
    },
    {
    "name": "Damselfly",
    "location": "Flying",
    "time": "All day",
    "price": 500,
    "month": {
    "north": [
    1,
    2,
    11,
    12
    ],
    "south": [
    5,
    6,
    7,
    8
    ]
    }
    },
    {
    "name": "Firefly",
    "location": "Flying",
    "time": "7 PM - 4 AM",
    "price": 300,
    "month": {
    "north": [
    6
    ],
    "south": [
    12
    ]
    }
    },
    {
    "name": "Mole Cricket",
    "location": "Underground",
    "time": "All day",
    "price": 500,
    "month": {
    "north": [
    1,
    2,
    3,
    4,
    5,
    11,
    12
    ],
    "south": [
    5,
    6,
    7,
    8,
    9,
    10,
    11
    ]
    }
    },
    {
    "name": "Pondskater",
    "location": "On Ponds and Rivers",
    "time": "8 AM - 7 PM",
    "price": 130,
    "month": {
    "north": [
    5,
    6,
    7,
    8,
    9
    ],
    "south": [
    1,
    2,
    3,
    11,
    12
    ]
    }
    },
    {
    "name": "Diving Beetle",
    "location": "On Ponds and Rivers",
    "time": "8 AM - 7 PM",
    "price": 800,
    "month": {
    "north": [
    5,
    6,
    7,
    8,
    9
    ],
    "south": [
    1,
    2,
    3,
    11,
    12
    ]
    }
    },
    {
    "name": "Giant Water Bug",
    "location": "On Ponds and Rivers",
    "time": "7 PM - 8 AM",
    "price": 2000,
    "month": {
    "north": [
    4,
    5,
    6,
    7,
    8,
    9
    ],
    "south": [
    1,
    2,
    3,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Stinkbug",
    "location": "On Flowers",
    "time": "All day",
    "price": 120,
    "month": {
    "north": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
    ],
    "south": [
    1,
    2,
    3,
    4,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Man-faced Stink Bug",
    "location": "On Flowers",
    "time": "7 PM - 8 AM",
    "price": 1000,
    "month": {
    "north": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
    ],
    "south": [
    1,
    2,
    3,
    4,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Ladybug",
    "location": "On Flowers",
    "time": "8 AM - 5 PM",
    "price": 200,
    "month": {
    "north": [
    3,
    4,
    5,
    6,
    10
    ],
    "south": [
    4,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Tiger beetle",
    "location": "On the Ground",
    "time": "All day",
    "price": 1500,
    "month": {
    "north": [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
    ],
    "south": [
    1,
    2,
    3,
    4,
    8,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Jewel Beetle",
    "location": "On Tree Stumps",
    "time": "All day",
    "price": 2400,
    "month": {
    "north": [
    4,
    5,
    6,
    7,
    8
    ],
    "south": [
    1,
    2,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Violin Beetle",
    "location": "On Tree Stumps",
    "time": "All day",
    "price": 450,
    "month": {
    "north": [
    5,
    6,
    9,
    10,
    11
    ],
    "south": [
    3,
    4,
    5,
    11,
    12
    ]
    }
    },
    {
    "name": "Citrus Long-horned Beetle",
    "location": "On Tree Stumps",
    "time": "All day",
    "price": 350,
    "month": {
    "north": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ],
    "south": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Rosalia Batesi Beetle",
    "location": "On Tree Stumps",
    "time": "All day",
    "price": 3000,
    "month": {
    "north": [
    5,
    6,
    7,
    8,
    9
    ],
    "south": [
    1,
    2,
    3,
    11,
    12
    ]
    }
    },
    {
    "name": "Blue Weevil Beetle",
    "location": "On Trees (Coconut)",
    "time": "All day",
    "price": 800,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Dung Beetle",
    "location": "On the Ground (Rolling Snowballs)",
    "time": "All day",
    "price": 3000,
    "month": {
    "north": [
    1,
    2,
    12
    ],
    "south": [
    6,
    7,
    8
    ]
    }
    },
    {
    "name": "Earth-boring Dung Beetle",
    "location": "On the Ground",
    "time": "All day",
    "price": 300,
    "month": {
    "north": [
    7,
    8,
    9
    ],
    "south": [
    1,
    2,
    3
    ]
    }
    },
    {
    "name": "Scarab Beetle",
    "location": "On Trees",
    "time": "11 PM - 8 AM",
    "price": 10000,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Drone Beetle",
    "location": "On Trees",
    "time": "All day",
    "price": 200,
    "month": {
    "north": [
    6,
    7,
    8
    ],
    "south": [
    1,
    2,
    12
    ]
    }
    },
    {
    "name": "Goliath Beetle",
    "location": "On Trees (Coconut)",
    "time": "5 PM - 8 AM",
    "price": 8000,
    "month": {
    "north": [
    6,
    7,
    8,
    9
    ],
    "south": [
    1,
    2,
    3,
    12
    ]
    }
    },
    {
    "name": "Saw Stag",
    "location": "On Trees",
    "time": "All day",
    "price": 2000,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Miyama Stag",
    "location": "On Trees",
    "time": "All day",
    "price": 1000,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Giant Stag",
    "location": "On Trees",
    "time": "11 PM - 8 AM",
    "price": 10000,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Rainbow Stag",
    "location": "On Trees",
    "time": "7 PM - 8 AM",
    "price": 6000,
    "month": {
    "north": [
    6,
    7,
    8,
    9
    ],
    "south": [
    1,
    2,
    3,
    12
    ]
    }
    },
    {
    "name": "Cyclommatus Stag",
    "location": "On Trees (Coconut)",
    "time": "5 PM - 8 AM",
    "price": 8000,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Golden Stag",
    "location": "On Trees (Coconut)",
    "time": "5 PM - 8 AM",
    "price": 12000,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Giraffe Stag",
    "location": "On Trees (Coconut)",
    "time": "",
    "price": 0,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Horned Dynastid",
    "location": "On Trees",
    "time": "5 PM - 8 AM",
    "price": 1350,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Horned Atlas",
    "location": "On Trees (Coconut)",
    "time": "5 PM - 8 AM",
    "price": 8000,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Horned Elephant",
    "location": "On Trees (Coconut)",
    "time": "5 PM - 8 AM",
    "price": 8000,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Horned Hercules",
    "location": "On Trees (Coconut)",
    "time": "5 PM - 8 AM",
    "price": 12000,
    "month": {
    "north": [
    7,
    8
    ],
    "south": [
    1,
    2
    ]
    }
    },
    {
    "name": "Walking Stick",
    "location": "On Trees",
    "time": "4 AM - 8 AM & 5 PM - 7 PM",
    "price": 0,
    "month": {
    "north": [
    7,
    8,
    9,
    10,
    11
    ],
    "south": [
    1,
    2,
    3,
    4,
    5
    ]
    }
    },
    {
    "name": "Walking Leaf",
    "location": "Under Trees Disguised as Leafs",
    "time": "All day",
    "price": 600,
    "month": {
    "north": [
    7,
    8,
    9
    ],
    "south": [
    1,
    2,
    3
    ]
    }
    },
    {
    "name": "Bagworm",
    "location": "Shaking Trees",
    "time": "All day",
    "price": 600,
    "month": {
    "north": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ],
    "south": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Ant",
    "location": "On Rotten Food",
    "time": "All day",
    "price": 80,
    "month": {
    "north": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ],
    "south": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Hermit Crab",
    "location": "Beach Disguised as Shells ",
    "time": "7 PM - 8 AM",
    "price": 1000,
    "month": {
    "north": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ],
    "south": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Wharf Roach",
    "location": "On Beach Rocks",
    "time": "All day",
    "price": 200,
    "month": {
    "north": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ],
    "south": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Fly",
    "location": "On Trash Items",
    "time": "All day",
    "price": 60,
    "month": {
    "north": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ],
    "south": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Mosquito",
    "location": "Flying",
    "time": "5 PM - 4 AM",
    "price": 130,
    "month": {
    "north": [
    6,
    7,
    8,
    9
    ],
    "south": [
    1,
    2,
    3,
    12
    ]
    }
    },
    {
    "name": "Flea",
    "location": "Villager's Heads",
    "time": "Villager's Heads",
    "price": 70,
    "month": {
    "north": [
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
    ],
    "south": [
    1,
    2,
    3,
    4,
    5,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Snail",
    "location": "On Rocks (Rain)",
    "time": "All day",
    "price": 250,
    "month": {
    "north": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ],
    "south": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Pill Bug",
    "location": "Hitting Rocks",
    "time": "11 PM - 4 PM",
    "price": 250,
    "month": {
    "north": [
    1,
    2,
    3,
    4,
    5,
    6,
    9,
    10,
    11,
    12
    ],
    "south": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Centipede",
    "location": "Hitting Rocks",
    "time": "4 PM - 11 PM",
    "price": 300,
    "month": {
    "north": [
    1,
    2,
    3,
    4,
    5,
    6,
    9,
    10,
    11,
    12
    ],
    "south": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Spider",
    "location": "Shaking Trees",
    "time": "7 PM - 8 AM",
    "price": 600,
    "month": {
    "north": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ],
    "south": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
    ]
    }
    },
    {
    "name": "Tarantula",
    "location": "On the Ground",
    "time": "7 PM - 4 AM",
    "price": 8000,
    "month": {
    "north": [
    1,
    2,
    3,
    4,
    11,
    12
    ],
    "south": [
    5,
    6,
    7,
    8,
    9,
    10
    ]
    }
    },
    {
    "name": "Scorpion",
    "location": "On the Ground",
    "time": "7 PM - 4 AM",
    "price": 8000,
    "month": {
    "north": [
    5,
    6,
    7,
    8,
    9,
    10
    ],
    "south": [
    1,
    2,
    3,
    4,
    11,
    12
    ]
    }
    }
    ]

export default bugsJSON;