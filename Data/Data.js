const slides = [
    {
        key: '1',
        title: 'Get Textbooks for less',
        //image: 
    },
    {
        key: '2',
        title: 'sell/rent your used textbooks',
        //image: 
    },
    {
        key: '3',
        title: 'students help students',
        //image: 
    }
];

const posts = [
    {
        id:'1',
        title:'How to tame your dragon',
        subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        Author:'Ralph styles',
        ISBN: '4463456743564',
        Image:[
                require('../assets/book1.jpg'),
                require('../assets/book2.jpg'),
                require('../assets/book3.png')
            ],
        price: '30',
        conditon: 'Good',
        texture:'Hardcover',
        Category: 'ECS-Computer Science',
        userPosted: {
                        name:'Ohiani',
                        userImage: require("../assets/junior.jpg"),
                        reviews: '22',
                        dateJoined: 'Jan 2012'
                    }
    },
    {
        id:'2',
        title:'Think and grow rich',
        subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        Author:'Ohiani Abdulkadir',
        ISBN: '6463456743564',
        Image:[
            require('../assets/book1.jpg'),
            require('../assets/book2.jpg'),
            require('../assets/book3.png')
        ],
        price: '65',
        conditon: 'mild',
        texture:'paperback',
        Category: 'ECS-Computer Engineering',
        userPosted: {
                        name:'Martin Luther',
                        reviews: '4',
                        userImage: require("../assets/junior.jpg"),
                        dateJoined: 'Sep 30'
                    }
    },
    {
        id:'3',
        title:'Vip no regular',
        subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        Author:'James Odebiyi',
        ISBN: '3463456743564',
        Image:[
            require('../assets/book3.png'),
            require('../assets/book2.jpg'),
            require('../assets/book1.jpg'),
        ],
        price: '124',
        conditon: 'Good',
        texture:'paperback',
        Category: 'NJN-Finance',
        userPosted: {
                        name:'Laetitia Le',
                        userImage: require("../assets/junior.jpg"),
                        reviews: '14',
                        dateJoined: 'Feb 2017'
                    }
    },
    {
        id:'4',
        title:'Life after Google',
        subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        Author:'Dr Seuss',
        ISBN: '3463456743564',
        Image:[
            require('../assets/book3.png'),
            require('../assets/book2.jpg'),
            require('../assets/book3.png')
        ],
        price: '57',
        conditon: 'Bad',
        texture:'Hardcober',
        Category: 'ECS-Computer Science',
        userPosted: {
                        name:'Morgan Freeman',
                        uerImage: require("../assets/junior.jpg"),
                        reviews: '31',
                        dateJoined: 'Aug 2003'
                    }
    },
    {
        id:'5',
        title:'Intro to Java',
        subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        Author:'Meghana Sapute',
        ISBN: '2963456743564',
        Image:[
            require('../assets/book6.jpg'),
            require('../assets/book2.jpg'),
            require('../assets/book3.png')
        ],
        price: '79',
        conditon: 'Good',
        texture:'paperback',
        Category: 'ECS-Computer Science',
        userPosted: {
                        name:'Dr Lincolon',
                        userImage: require("../assets/junior.jpg"),
                        reviews: '22',
                        dateJoined: 'Jan 2012'
                    }
    },
    {
        id:'6',
        title:'Assembly code Introduction',
        subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        Author:'John Cole',
        ISBN: '9463456743564',
        Image:[
            require('../assets/book6.jpg'),
            require('../assets/book2.jpg'),
            require('../assets/book3.png')
        ],
        price: '30',
        conditon: 'Mild',
        texture:'HardCover',
        Category: 'ECS-Computer Science',
        userPosted: {
                        name:'Andrew Melborne',
                        userImage: require("../assets/junior.jpg"),
                        reviews: '36',
                        dateJoined: 'Mar 2001'
                    }
    }
];

export {slides, posts};