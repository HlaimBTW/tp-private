import { Users, User } from './users';

export interface Comments {
  user_id: number;
  user: User;
  user_comment: string;
}

export interface Post {
  sender_img: string;
  sender_name: string;
  sender_discription: string;
  sender_post_img: string;
  num_likes: number;
  num_comment: number;
  num_share: number;
  liked: boolean;
  class: string;
  comments: Comments[];
  add_like(): void;
}

export const Posts = [
  {
    sender_img:
      'https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg',
    sender_name: 'MrBeast',
    sender_discription:
      'Would you spend 100 days in this room with a random stranger for $500,000? (Door is unlocked, if one of you leave before day 100 you both lose)',
    sender_post_img:
      'https://pbs.twimg.com/media/F7OSTJ3WQAEyGea?format=jpg&name=large',
    num_likes: 330,
    num_comment: 3,
    num_share: 3,
    liked: false,
    class: 'bx bx-heart',
    comments: [
      {
        user_id: 1,
        user: Users[1],
        user_comment: 'Noiiiiiiiiiiice',
      },
      {
        user_id: 2,
        user: Users[0],
        user_comment: 'GG <3',
      },
      {
        user_id: 2,
        user: Users[2],
        user_comment: 'not me',
      },
    ],
    add_like() {
      if (this.liked == false) {
        this.num_likes++;
        this.class = 'bx bxs-heart clicked-icon';
        this.liked = true;
      } else {
        this.liked = false;
        this.class = 'bx bx-heart';
        this.num_likes--;
      }
    },
  },
  {
    sender_img:
      'https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg',
    sender_name: 'MrBeast',
    sender_discription:
      'Would you spend 100 days in this room with a random stranger for $500,000? (Door is unlocked, if one of you leave before day 100 you both lose)',
    sender_post_img:
      'https://pbs.twimg.com/media/F7OSTJ3WQAEyGea?format=jpg&name=large',
    num_likes: 330,
    num_comment: 3,
    num_share: 3,
    liked: false,
    class: 'bx bx-heart',
    comments: [
      {
        user_id: 1,
        user: Users[1],
        user_comment: 'Noiiiiiiiiiiice',
      },
      {
        user_id: 2,
        user: Users[0],
        user_comment: 'GG <3',
      },
      {
        user_id: 2,
        user: Users[2],
        user_comment: 'not me',
      },
    ],
    add_like() {
      if (this.liked == false) {
        this.num_likes++;
        this.class = 'bx bxs-heart clicked-icon';
        this.liked = true;
      } else {
        this.liked = false;
        this.class = 'bx bx-heart';
        this.num_likes--;
      }
    },
  },
  {
    sender_img:
      'https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg',
    sender_name: 'MrBeast',
    sender_discription:
      'Would you spend 100 days in this room with a random stranger for $500,000? (Door is unlocked, if one of you leave before day 100 you both lose)',
    sender_post_img:
      'https://pbs.twimg.com/media/F7OSTJ3WQAEyGea?format=jpg&name=large',
    num_likes: 3000,
    num_comment: 3,
    num_share: 3,
    liked: false,
    class: 'bx bx-heart',
    comments: [
      {
        user_id: 1,
        user: Users[1],
        user_comment: 'Noiiiiiiiiiiice',
      },
      {
        user_id: 2,
        user: Users[0],
        user_comment: 'GG <3',
      },
      {
        user_id: 2,
        user: Users[2],
        user_comment: 'not me',
      },
    ],
    add_like() {
      if (this.liked == false) {
        this.num_likes++;
        this.class = 'bx bxs-heart clicked-icon';
        this.liked = true;
      } else {
        this.liked = false;
        this.class = 'bx bx-heart';
        this.num_likes--;
      }
    },
  },

  {
    sender_img:
      'https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg',
    sender_name: 'MrBeast',
    sender_discription:
      'Would you spend 100 days in this room with a random stranger for $500,000? (Door is unlocked, if one of you leave before day 100 you both lose)',
    sender_post_img:
      'https://pbs.twimg.com/media/F7OSTJ3WQAEyGea?format=jpg&name=large',
    num_likes: 330,
    num_comment: 3,
    num_share: 3,
    liked: false,
    class: 'bx bx-heart',
    comments: [
      {
        user_id: 1,
        user: Users[1],
        user_comment: 'Noiiiiiiiiiiice',
      },
      {
        user_id: 2,
        user: Users[0],
        user_comment: 'GG <3',
      },
      {
        user_id: 2,
        user: Users[2],
        user_comment: 'not me',
      },
    ],
    add_like() {
      if (this.liked == false) {
        this.num_likes++;
        this.class = 'bx bxs-heart clicked-icon';
        this.liked = true;
      } else {
        this.liked = false;
        this.class = 'bx bx-heart';
        this.num_likes--;
      }
    },
  },
];
