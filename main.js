
var app = new Vue({
  el: "#app",
  data: {
    favflavor: "",
    message: 'Hi! From Alison and Matthew',

    icecreamflavors: [
      {
        name: "Cookie Dough",
        image: "images/cookiedough.jpg",
        isshow: false,
        descript: "Vanilla ice cream, with gobs of cookie dough",
        isfav: false
      },
      {
        name: "Coffee",
        image: "images/coffee.jpg",
        isshow: false,
        descript: "Coffee ice cream, with dark chocolate chips",
        isfav: false
      },
      {
      name: "Mint Chocolate Chip",
      image: "images/mintchip.jpg",
      isshow: false,
      descript: "Mint ice cream, with cold chocolate chips",
      isfav: false
    },

    {
    name: "Strawberry",
    image: "images/strawberry.jpg",
    isshow: false,
    descript: "Strawberry ice cream, with bits of strawberry",
    isfav: false
  },
  {
    name: "Cookies and Cream",
  image: "images/cookie.jpg",
  isshow: false,
  descript: "Rich Vanilla ice cream, with bits of oreo cookie",
  isfav: false
},
{
name: "Neopolitan",
image: "images/neopolitan.jpg",
isshow: false,
descript: "Vanilla, Strawberry, and Chocolate ice cream, all in one delicious treat",
isfav: false
},
{
  name: "Coffee Cookie Crumble",
image: "images/coffeecookie.jpg",
isshow: false,
descript: "Rich Coffee ice cream, with bits of oreo cookie",
isfav: false
},
{
  name: "Chocolate Almond",
image: "images/chocolate-almond.jpg",
isshow: false,
descript: "Rich Chocolate ice cream, with bits of almonds",
isfav: false
},
{
name: "Vanilla",
image: "images/vanilla.jpg",
isshow: false,
descript: "Rich Creamy Vanilla Ice Cream",
isfav: false
}

    ]

  },

methods: {
  reverseMessage() {
    this.message = this.message.split('').reverse().join('');

  }
}
})
