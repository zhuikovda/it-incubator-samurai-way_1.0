// let dialogData = [
//     { id: 1, name: "Dima" },
//     { id: 2, name: "Sveta" },
//     { id: 3, name: "Eva" },
//     { id: 4, name: "Sasha" },
//     { id: 5, name: "Eva" },
//     { id: 6, name: "Zina" }
//   ];
  
//   let messageData = [
//     { id: 1, message: "Hi!" },
//     { id: 2, message: "How are yo" },
//     { id: 3, message: "Hello!" },
//     { id: 4, message: "I'am fine!" },
//     { id: 5, message: "Good bye!" },
//     { id: 6, message: "Good luck !" }
//   ];
  
//   let postData = [
//       { id: 1, message: "Hi, Dima!", likesCount: 15 },
//       { id: 1, message: "Hi, Eva!", likesCount: 20 }
//   ];
  export let state = {
    dialogsPage: {dialogData : [
        { id: 1, name: "Dima", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU"  },
        { id: 2, name: "Sveta", ava: "https://cs10.pikabu.ru/post_img/big/2018/02/23/11/1519415820143773252.jpg"},
        { id: 3, name: "Eva", ava: "https://abrakadabra.fun/uploads/posts/2022-01/1643232514_4-abrakadabra-fun-p-milie-multyashnie-personazhi-14.jpg" },
        { id: 4, name: "Sasha", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDBnrRXqeRQQYomhlo_sYKcUF0PwGRbzBt0QrSD9jAFv4GmQ2rs6OHiiRcUMm1KoeoWg&usqp=CAU" },
        { id: 5, name: "Eva", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Xswv-3d6tsRAw-Kkjqcj59OI6SnQ4FEeLMAiB_JxZdqiQ64OldtNRRvCOKLeLPihcoM&usqp=CAU" },
        { id: 6, name: "Zina", ava: "https://ic.pics.livejournal.com/b_picture/19184119/779124/779124_900.jpg" }
      ],
      messageData: [
        { id: 1, message: "Hi!", leftEdge: true, ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU" },
        { id: 2, message: "How are yo", leftEdge: false, ava: "https://cs10.pikabu.ru/post_img/big/2018/02/23/11/1519415820143773252.jpg" },
        { id: 3, message: "Hello!", leftEdge: true, ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU" },
        { id: 4, message: "I'am fine!", leftEdge: false, ava: "https://cs10.pikabu.ru/post_img/big/2018/02/23/11/1519415820143773252.jpg" },
        { id: 5, message: "Good bye!", leftEdge: true, ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU" },
        { id: 6, message: "Good luck !", leftEdge: false, ava: "https://cs10.pikabu.ru/post_img/big/2018/02/23/11/1519415820143773252.jpg" }
      ]},
    profilePage: {postData: [
        { id: 1, message: "Hi, Dima!", likesCount: 15 },
        { id: 1, message: "Hi, Eva!", likesCount: 20 }
    ]},
    sidebarFriends: {
      title: "Friends",
      friends: [
        {id: 1, name: "Sergei", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3UV9nJRhZE6mkae7sogh0WSO_amejPEeaw&usqp=CAU"},
        {id: 2, name: "Roma", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbs1TtuxFoJfb-iTaBhAL7bl5TxkM78U2YMg&usqp=CAU"},
        {id: 3, name: "Lenya", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsz2eWio9nR72fvHTWnkCjcqQxwYHTTxm87Q&usqp=CAU"}
      ]
    }
      
  }