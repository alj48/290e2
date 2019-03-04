
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hi! From Alison and Matthew',
    newicecreamflavor = "";
    icecreamflavors: [
      {
        name: "Cookie Dough",
        image: "images/cookiedough.jpg",
        isshow: false,
        descript: "Vanilla ice cream, with gobs of cookiedough"
      },
      {
        name: "Coffee",
        image: "images/coffee.jpg",
        isshow: false,
        descript: "Coffee ice cream, with dark chocolate chips"
      },
      {
      name: "Mint Chocolate Chip",
      image: "images/mintchip.jpg",
      isshow: false,
      descript: "Mint ice cream, with cold chocolate chips"
    },

    {
    name: "Strawberry",
    image: "images/strawberry.jpg",
    isshow: false,
    descript: "Strawberry ice cream, with bits of strawberry"
  },
  {
    name: "Cookies and Cream",
  image: "images/cookie.jpg",
  isshow: false,
  descript: "Rich Vanilla ice cream, with bits of oreo cookie"
},
{
name: "Neopolitan",
image: "images/neopolitan.jpg",
isshow: false,
descript: "Vanilla, Strawberry, and Chocolate ice cream, all in one delicious treat"
},
{
  name: "Coffee Cookie Crumble",
image: "images/coffeecookie.jpg",
isshow: false,
descript: "Rich Coffee ice cream, with bits of oreo cookie"
},
{
  name: "Chocolate Almond",
image: "images/chocolate-almond.jpg",
isshow: false,
descript: "Rich Chocolate ice cream, with bits of almonds"
},
{
name: "Vanilla",
image: "images/vanilla.jpg",
isshow: false,
descript: "Rich Creamy Vanilla Ice Cream"
}

]


  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse.join('');

    },
    addflavor(){
      this.icecreamflavors.push(this.newicecreamflavor);
      this.newicecreamflavor= "";
    }
    }
  }


})
