const { Faker, en } = require("@faker-js/faker");
const fs = require("fs");

const faker = new Faker({
  locale: [en],
});

const db = {
  users: [
    {
      id: 1,
      email: "Binhvo@gmail.com",
      password: "$2a$10$4JWMMv5EmJOi9rvwurrGSOmgQnHMMnqPyG5UycXVwITJ1xUxCr1lu",
      firstName: "Binh",
      lastName: "Vo",
      createdAt: 1729084847741,
      updatedAt: 1729084847741,
    },
    {
      id: 2,
      email: "Oliver@gmail.com",
      password: "$2a$10$4JWMMv5EmJOi9rvwurrGSOmgQnHMMnqPyG5UycXVwITJ1xUxCr1lu",
      firstName: "Michel",
      lastName: "Oliver",
      createdAt: 1729084847741,
      updatedAt: 1729084847741,
    },
    {
      id: 3,
      email: "Ronaldo@gmail.com",
      password: "$2a$10$4JWMMv5EmJOi9rvwurrGSOmgQnHMMnqPyG5UycXVwITJ1xUxCr1lu",
      firstName: "Cristiano",
      lastName: "Ronaldo",
      createdAt: 1729084847741,
      updatedAt: 1729084847741,
    },
    {
      id: 4,
      email: "Messi@gmail.com",
      password: "$2a$10$4JWMMv5EmJOi9rvwurrGSOmgQnHMMnqPyG5UycXVwITJ1xUxCr1lu",
      firstName: "Lionel",
      lastName: "Messi",
      createdAt: 1729084847741,
      updatedAt: 1729084847741,
    },
  ],
  posts: [],
  comments: [],
};

const randomPostsList = async (n) => {
  if (n <= 0) return [];
  const posts = [];

  Array.from(new Array(n)).forEach(() => {
    const uuid = faker.string.uuid();
    const booleanArr = faker.helpers.arrayElement([true, false]);
    const randomUser = faker.helpers.arrayElement(db.users);
    const post = {
      author: { ...randomUser, password: undefined },
      userId: randomUser.id,
      verified: booleanArr,
      title: faker.lorem.words({ min: 2, max: 5 }),
      description: faker.lorem.text(),
      paragraph: faker.lorem.paragraph({ min: 10, max: 50 }),
      createdAt: faker.date.anytime(),
      updatedAt: faker.date.anytime(),
      id: uuid,
      avatar: faker.image.avatar(),
      picture: faker.image.url(),
      readTime: "6 min read",
      reactions: {
        likes: faker.number.int({ min: 0, max: 1000 }),
        comments: faker.number.int({ min: 0, max: 100 }),
        views: faker.number.int({ min: 0, max: 1000 }),
        shares: faker.number.int({ min: 0, max: 100 }),
      },
      group: [
        {
          title: "Beincom - Việt Nam",
          postId: uuid,
        },
        {
          title: "Xây Dựng & Lãnh Đạo Cộng Đồng",
          postId: uuid,
        },
      ],
    };

    posts.push(post);
  });

  return posts;
};

const randomCommentList = async (n, posts) => {
  if (n <= 0) return [];
  const comments = [];

  Array.from(new Array(n)).forEach(() => {
    const randomUser = faker.helpers.arrayElement(db.users);
    const randomPost = faker.helpers.arrayElement(posts);
    const uuid = faker.string.uuid();
    const comment = {
      id: uuid,
      postId: randomPost.id,
      userId: randomUser.id,
      author: { ...randomUser, password: undefined },
      createdAt: faker.date.anytime(),
      content: faker.lorem.words({ min: 1, max: 40 }),
      reactions: {
        likes: faker.number.int({ min: 0, max: 1000 }),
      },
    };

    comments.push(comment);
  });

  return comments;
};

(async () => {
  const randomPosts = await randomPostsList(30);
  const randomComments = await randomCommentList(10, randomPosts);

  const result = {
    ...db,
    posts: randomPosts,
    comments: randomComments,
  };

  fs.writeFile("db.json", JSON.stringify(result), () => {
    console.log("Generate data successfully!");
  });
})();
