import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      {
        profileImage: "/images/profile_icon.png",
        created: "oct 22, 2022",
        postImage: "/images/post1.jpeg",
        postContent: "Tartu, Estonia's second-largest city with a population of 97,435 as of 2023, is known for its historical significance. It sits on the Emajõgi river, linking Lake Võrtsjärv and Lake Peipus. Tartu is renowned as the \"intellectual capital\" due to its University of Tartu, established in 1632. It's also home to the Supreme Court, Ministry of Education and Research, Estonian National Museum, and Vanemuine, the oldest Estonian-language theatre. Tartu is set to become the European Capital of Culture in 2024.",
        likeIcon: "/images/like.png",
        likes: 0
      },
      {
        profileImage: "/images/profile_icon.png",
        created: "oct 2, 2022",
        postImage: null,
        postContent: "This course will introduce students to key concepts and technologies for developing modern web applications. The course starts by presenting basic Web technologies and languages (e.g. HTTP, HTML, CSS, Javascript) followed by modern frontend (e.g., Vue.js) and backend development frameworks (e.g., Node.js). Finally, various software testing techniques will be discussed and we will learn how some of them can be used in the context of web applications.",
        likeIcon: "/images/like.png",
        likes: 0
      },
      {
        profileImage: "/images/profile_icon.png",
        created: "aug 5, 2021",
        postImage: "/images/post3.jpeg",
        postContent: "Tallinn, the capital and largest city of Estonia, is located on the north coast by the Gulf of Finland. As of 2023, it has a population of about 454,000. Tallinn serves as Estonia's primary financial, industrial, and cultural hub. It is situated 187 km northwest of Tartu, 80 km south of Helsinki, Finland, 320 km west of Saint Petersburg, Russia, 300 km north of Riga, Latvia, and 380 km east of Stockholm, Sweden. Historically, it was known as Reval in much of the world until the early 20th century.",
        likeIcon: "/images/like.png",
        likes: 0
      },
      {
        profileImage: "/images/profile_icon.png",
        created: "sep 12, 2021",
        postImage: "/images/post4.jpeg",
        postContent: "The University of Tartu Delta Centre brings together a vibrant community of students, researchers and innovators in the fields of computer science, robotics, technology, mathematics, statistics, economics, management and business. The Delta Centre combines learning, excellence in research and the challenges of business and society, creating innovative solutions for economic and social progress.",
        likeIcon: "/images/like.png",
        likes: 0
      },
      {
        profileImage: "/images/profile_icon.png",
        created: "oct 27, 2022",
        postImage: null,
        postContent: "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display  information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.",
        likeIcon: "/images/like.png",
        likes: 0
      },
      {
        profileImage: "/images/profile_icon.png",
        created: "oct 28, 2023",
        postImage: "/images/post6.png",
        postContent: "Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition. The core library is focused on the view layer only. Advanced features required for complex applications such as routing, state management, and build tooling are offered via officially maintained supporting libraries and packages.\nVue.js allows for extending HTML with HTML attributes called directives. The directives offer functionality to HTML applications and come as either built-in or user-defined directives.\nVue was created by Evan You after working for Google using AngularJS in several projects. He later summed up his thought process: \"I figured, what if I could just extract the part that I really liked about Angular and build something really lightweight.\" The first source code commit to the project was dated July 2013, and Vue was first publicly announced the following February, in 2014.",
        likeIcon: "/images/like.png",
        likes: 0
      },
      {
        profileImage: "/images/profile_icon.png",
        created: "oct 29, 2023",
        postImage: null,
        postContent: "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.\n\nThe original author, TJ Holowaychuk, described it as a Sinatra-inspired server, meaning that it is relatively minimal with many features available as plugins. Express is the back-end component of popular development stacks like the MEAN, MERN, or MEVN stack, together with the MongoDB database software and a JavaScript front-end framework or library.",
        likeIcon: "/images/like.png",
        likes: 0
      },
      {
        profileImage: "/images/profile_icon.png",
        created: "oct 29, 2023",
        postImage: null,
        postContent: "Java has significant advantages over other languages and environments that make it suitable for just about any programming task.\n\nThe advantages of Java are as follows:\n\nJava is easy to learn.\nJava was designed to be easy to use and is therefore easy to write, compile, debug, and learn than other programming languages.\n\nJava is object-oriented.\nThis allows you to create modular programs and reusable code.\n\nJava is platform-independent.\nOne of the most significant advantages of Java is its ability to move easily from one computer system to another. The ability to run the same program on many different systems is crucial to World Wide Web software, and Java succeeds at this by being platform-independent at both the source and binary levels.\nBecause of Java's robustness, ease of use, cross-platform capabilities and security features, it has become a language of choice for providing worldwide Internet solutions.",
        likeIcon: "/images/like.png",
        likes: 0
      },
      {
        profileImage: "/images/profile_icon.png",
        created: "oct 29, 2023",
        postImage: "/images/post9.webp",
        postContent: "The University of Tartu is a public research university located in the city of Tartu, Estonia. It is the national university of Estonia. It is the biggest and most prestigious university in the country. The university was founded under the name of Academia Gustaviana in 1632 by Baron Johan Skytte, the Governor-General of Swedish Livonia, Ingria, and Karelia, with the required ratification provided by King Gustavus Adolphus, shortly before the king's death on 6 November in the Battle of Lützen (1632).",
        likeIcon: "/images/like.png",
        likes: 0
      },
      {
        profileImage: "/images/profile_icon.png",
        created: "oct 29, 2023",
        postImage: "/images/post10.webp",
        postContent: "GitHub, Inc. is a platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. Headquartered in California, it has been a subsidiary of Microsoft since 2018.\n\nIt is commonly used to host open source software development projects. As of January 2023, GitHub reported having over 100 million developers and more than 372 million repositories, including at least 28 million public repositories. It is the world's largest source code host as of June 2023.",
        likeIcon: "/images/like.png",
        likes: 0
      }
    ]
  },
  getters: {
    getPosts: (state) => {
      return state.posts;
    },
  },

  mutations: {
    incrementLikes(state, postIndex){
      state.posts[postIndex].likes += 1
    },
    resetLikes(state){
      for (const post of state.posts) {
        post.likes = 0;
      }
    }
  },
  actions: {
    resetLikesAct(act) {
      act.commit('resetLikes')
    },
    incrementLikesAct(act, postIndex){
      act.commit('incrementLikes', postIndex)
    }

  },
  modules: {
  }
})