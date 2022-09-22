

export default ( ) => ({ 
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            picture: null,

        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text:  "In nascetur tempor orci platea hac augue semper ultrices varius, porttitor suscipit vulputate netus nisl mollis aliquet taciti condimentum, litora mattis interdum enim morbi ad donec facilisis. Arcu sociosqu egestas malesuada imperdiet ligula cursus, natoque pretium ultrices lobortis parturient, nullam pellentesque commodo ultricies nec. Torquent consequat dui enim nisl magna convallis bibendum tellus mattis diam egestas platea lacinia maecenas.",
            picture: null,

        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text:  "Condimentum nibh tellus ac cras eros urna imperdiet pretium inceptos habitasse, nulla varius nam nunc scelerisque magnis ultricies arcu porttitor, commodo dis leo etiam in molestie nullam sagittis ante. Dui interdum tincidunt nostra bibendum vestibulum montes sed vitae condimentum habitasse, felis ullamcorper neque tristique morbi porta senectus risus purus augue, per nibh etiam congue pulvinar orci imperdiet fames eros. Nam vel vitae varius convallis.",
            picture: null,

        },
    ]
 })