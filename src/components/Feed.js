// Depends on the Icons from icons.js
function TweetAction({ icon, color, count }) {
  return `
    <button class="flex items-center gap-1 hover:text-${color} transition cursor-pointer">
      <div class="p-2 sm:p-3 rounded-full hover:bg-${color}/10 transition">
        <svg viewBox="0 0 24 24" class="w-5 h-5 sm:w-6 sm:h-6 fill-current">${icon}</svg>
      </div>
      ${count ? `<span class="text-xs sm:text-sm">${count}</span>` : ''}
    </button>`;
}

// Blueprint For A Tweet Component
class Tweet {
  constructor({ avatar, name, handle, time, content, replies, retweets, likes, views }) {
    this.avatar   = avatar;
    this.name     = name;
    this.handle   = handle;
    this.time     = time;
    this.content  = content;
    this.replies  = replies;
    this.retweets = retweets;
    this.likes    = likes;
    this.views    = views;
  }

  // Render the Tweet as HTML
  render() {
    return `
    <article class="border-b dark:border-neutral-800 p-3 sm:p-5 hover:bg-white/3 transition cursor-pointer flex gap-3 sm:gap-4">
      <div class="flex-shrink-0">
        <img src="${this.avatar}" alt="${this.name}" class="w-10 h-10 sm:w-14 sm:h-14 rounded-full">
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="font-bold text-white sm:text-lg">${this.name}</span>
          <span class="text-gray-500 text-sm sm:text-base">${this.handle} · ${this.time}</span>
        </div>
        <div class="text-white sm:text-xl mt-2 break-words">${this.content}</div>
        <div class="flex justify-between max-w-full sm:max-w-lg mt-4 text-gray-500">
          ${TweetAction({ icon: ICONS.reply,     color: 'blue-400',  count: this.replies  })}
          ${TweetAction({ icon: ICONS.retweet,   color: 'green-500', count: this.retweets })}
          ${TweetAction({ icon: ICONS.like,      color: 'pink-600',  count: this.likes    })}
          ${TweetAction({ icon: ICONS.analytics, color: 'blue-400',  count: this.views    })}
          ${TweetAction({ icon: ICONS.share,     color: 'blue-400',  count: ''            })}
        </div>
      </div>
    </article>`;
  }
}

// Feed: Sample tweets data
const TWEETS = [
  new Tweet({
    avatar: 'https://pbs.twimg.com/profile_images/1710911871551685633/0r6g1j7A_400x400.jpg',
    name: 'Zaio',
    handle: '@zaio_io',
    time: '2h',
    content: 'Building modern web apps with Tailwind CSS and sticky layouts is an absolute game changer! 🚀 Perfect for recording smooth demos.',
    replies: 12,
    retweets: 48,
    likes: 384,
    views: '2.4K',
  }),
  new Tweet({
    avatar: 'https://pbs.twimg.com/profile_images/1710911871551685633/0r6g1j7A_400x400.jpg',
    name: 'Ryan Ross',
    handle: '@ross_ryan38740',
    time: '5h',
    content: 'Just shipped a Twitter clone with vanilla JS components. No framework needed when the DOM is your friend 🔥',
    replies: 3,
    retweets: 7,
    likes: 41,
    views: '890',
  }),
  new Tweet({
    avatar: 'https://pbs.twimg.com/profile_images/1710911871551685633/0r6g1j7A_400x400.jpg',
    name: 'jack',
    handle: '@jack',
    time: '12h',
    content: 'What if Twitter was just an API?',
    replies: 2841,
    retweets: 1200,
    likes: '18.4K',
    views: '4.1M',
  }),
  new Tweet({
    avatar: 'https://pbs.twimg.com/profile_images/1710911871551685633/0r6g1j7A_400x400.jpg',
    name: 'Zaio',
    handle: '@zaio_io',
    time: '1d',
    content: "Reminder: responsive design isn't just about mobile. Your layout should look great on a 4K monitor too. Use max-width containers and relative units! 📐",
    replies: 9,
    retweets: 22,
    likes: 156,
    views: '3.2K',
  }),
  new Tweet({
    avatar: 'https://pbs.twimg.com/profile_images/1710911871551685633/0r6g1j7A_400x400.jpg',
    name: 'Marc Andreessen',
    handle: '@pmarca',
    time: '2d',
    content: 'Software is eating the world. AI is eating software. What eats AI?',
    replies: 4200,
    retweets: 3100,
    likes: '52.1K',
    views: '12M',
  }),
];
