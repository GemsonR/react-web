import {
  images,
  walrus,
  views,
  dogs,
  ices,
  coffees,
  buildings,
  seas,
  fishes,
  laptops,
  roads,
} from "./Images";

const data = [
  {
    id: 1,
    title: "Walrus ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus purus vel vehicula congue. Nullam id vestibulum leo. Duis ut luctus augue.",
    image: images.image1,
    description: {
      id: [1, 2, 3, 4],
      imgUrl: [walrus.walrus1, walrus.walrus2, walrus.walrus3, walrus.walrus4],
      list: [
        "Lorem ipsum dolor sit amet",
        "Posuere eu ante et, mattis euismod libero.",
        "Maecenas placerat ipsum non velit fermentum cursus.",
        "Vestibulum nec elementum ligula.",
      ],
    },
  },
  {
    id: 2,
    title: "views ipsum",
    text: " Mauris ut blandit nulla. Morbi lobortis nisl quis ipsum consequat volutpat. ",
    image: images.image2,
    description: {
      id: [1, 2, 3, 4],
      imgUrl: [views.view1, views.view2, views.view3, views.view4],
      list: [
        " Vestibulum nec elementum ligula. ",
        " Praesent egestas eget arcu nec tempor. ",
        " Etiam gravida ex odio. ",
        " Sollicitudin viverra lectus. ",
      ],
    },
  },
  {
    id: 3,
    title: "dog ipsum",
    text: "Quisque efficitur ultrices libero sit amet porta. Aliquam tincidunt, diam eget varius interdum, lacus dui aliquet ante, id sollicitudin quam sapien auctor urna. Donec porttitor libero quam, a facilisis mauris mollis sit amet. In tempus viverra lacus non faucibus. Donec quis risus felis.",
    image: images.image3,
    description: {
      id: [1, 2, 3, 4],
      imgUrl: [dogs.dog1, dogs.dog2, dogs.dog3, dogs.dog4],
      list: [
        "Etiam gravida ex odio.",
        "sollicitudin viverra lectus.",
        "Donec interdum maximus magna",
        "Nunc vehicula porttitor libero, vel pellentesque augue tincidunt ",
      ],
    },
  },
  {
    id: 4,
    title: "mountain ice ipsum",
    text: " Curabitur luctus orci semper neque rutrum malesuada.",
    image: images.image4,
    description: {
      id: [1, 2, 3, 4],
      imgUrl: [ices.ice1, ices.ice2, ices.ice3, ices.ice4],
      list: [
        "Nulla id enim ullamcorper sem faucibus eleifend.",
        "Praesent egestas eget arcu nec tempor.",
        "Etiam gravida ex odio.",
        "Maecenas placerat ipsum non velit fermentum cursus.",
      ],
    },
  },
  {
    id: 5,
    title: "coffee ipsum",
    text: "Praesent imperdiet tortor dolor, in accumsan augue feugiat eget.",
    image: images.image5,
    description: {
      id: [1, 2, 3, 4],
      imgUrl: [
        coffees.coffee1,
        coffees.coffee2,
        coffees.coffee3,
        coffees.coffee4,
      ],
      list: [
        "Maecenas placerat ipsum non velit fermentum cursus.",
        "sollicitudin viverra lectus.",
        "Donec interdum maximus magna",

        "Nunc vehicula porttitor libero, vel pellentesque augue tincidunt ",
      ],
    },
  },
  {
    id: 6,
    title: "buildings ipsum",
    text: "Aliquam accumsan sodales velit, sed vestibulum arcu fermentum at. Sed mattis vulputate ipsum nec tempor.",
    image: images.image6,
    description: {
      id: [1, 2, 3, 4],
      imgUrl: [
        buildings.building1,
        buildings.building2,
        buildings.building3,
        buildings.building4,
      ],
      list: [
        "Lorem ipsum dolor sit amet",
        "posuere eu ante et, mattis euismod libero.",
        "Donec interdum maximus magna",

        "Etiam gravida ex odio.",
      ],
    },
  },
  {
    id: 7,
    title: "fish ipsum",
    text: "Nam luctus nulla et est ullamcorper auctor. Integer dapibus, arcu at ullamcorper commodo, tellus ipsum ullamcorper mauris, non condimentum sapien urna et lorem.",
    image: images.image7,
    description: {
      id: [1, 2, 3, 4],
      imgUrl: [fishes.fish1, fishes.fish2, fishes.fish3, fishes.fish4],
      list: [
        "Etiam gravida ex odio.",
        "sollicitudin viverra lectus.",

        "Nunc vehicula porttitor libero, vel pellentesque augue tincidunt ",
        "Quisque non libero tortor.",
      ],
    },
  },
  {
    id: 8,
    title: "laptop ipsum",
    text: "Aliquam vitae porta nulla, ac dignissim tellus. Ut eget justo porta, imperdiet ipsum sed, vehicula lectus. In laoreet, leo ut porttitor consequat, odio erat facilisis arcu, vel molestie ligula lacus eget libero.",
    image: images.image8,
    description: {
      id: [1, 2, 3, 4],
      imgUrl: [
        laptops.laptop1,
        laptops.laptop2,
        laptops.laptop3,
        laptops.laptop4,
      ],
      list: [
        "Quisque non libero tortor.",
        "Praesent egestas eget arcu nec tempor.",
        "Maecenas placerat ipsum non velit fermentum cursus.",
        "Vestibulum nec elementum ligula.",
      ],
    },
  },
  {
    id: 9,
    title: "seas ipsum",
    text: "Nunc maximus magna sed massa imperdiet, nec rhoncus neque euismod. Nunc rhoncus sollicitudin dolor, eu condimentum erat porta vitae. Nunc fringilla iaculis pretium. Praesent at aliquam sem. ",

    image: images.image9,
    description: {
      id: [1, 2, 3, 4],
      imgUrl: [seas.sea1, seas.sea2, seas.sea3, seas.sea4],
      list: [
        "Etiam gravida ex odio.",
        "sollicitudin viverra lectus.",
        "Praesent egestas eget arcu nec tempor.",
        "Vestibulum nec elementum ligula.",
      ],
    },
  },
  {
    id: 10,
    title: "lorem ipsum 10",
    text: "Aenean in malesuada augue. Mauris aliquam lorem ipsum, sed volutpat lectus imperdiet eu.",
    image: images.image10,
    description: {
      id: [1, 2, 3, 4],
      imgUrl: [roads.road1, roads.road2, roads.road3, roads.road4],
      list: [
        "Quisque non libero tortor.",
        "Praesent egestas eget arcu nec tempor.",
        "Maecenas placerat ipsum non velit fermentum cursus.",
        "Vestibulum nec elementum ligula.",
      ],
    },
  },
];

export default data;
