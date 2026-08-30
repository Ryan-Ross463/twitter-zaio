//Explore page data

const EXPLORE_TABS = ['Explore', 'Trending', 'News', 'Sports', 'Entertainment'];

//My Custom Code
const NEWS_ITEMS = [
  {
    title:    "Taxi Boss Joe 'Ferrari' Sibanyoni Denies Cartel Links at Madlanga Commission",
    category: 'News',
    time:     'Trending now',
    posts:    '460 posts',
  },
  {
    title:    "Norway's King Harald V Dies at 89 After 35-Year Reign",
    category: 'News',
    time:     '11 hours ago',
    posts:    '148K posts',
  },
  {
    title:    'Aston Villa Agree €55M Deal for PSG Winger Ibrahim Mbaye',
    category: 'Sports',
    time:     '2 hours ago',
    posts:    '34.5K posts',
  },
];

//My custom code
const TRENDING_TOPICS = [
  { category: 'Trending in South Africa', topic: 'Mswazi',              posts: '12.3K posts' },
  { category: 'Trending in South Africa', topic: 'Sjava',               posts: '8,901 posts' },
  { category: 'Entertainment · Trending', topic: '#DiscoveryInsurelikeNoOther', posts: '5,412 posts' },
  { category: 'Sports · Trending',        topic: 'Nkosi',               posts: '3,100 posts' },
  { category: 'Trending in Kenya',        topic: '#VituKwaGround',      posts: '9,580 posts' },
  { category: 'Technology · Trending',    topic: '#JavaScript',         posts: '45.2K posts' },
  { category: 'Trending in Kenya',        topic: 'Amerix',              posts: '8,211 posts' },
  { category: 'Entertainment · Trending', topic: '#BreakSafaricomMonopoly', posts: '3,579 posts' },
];

//The Explore Tabs
function ExploreTab({ label, active }) {
  const activeClass   = 'text-white font-bold';
  const inactiveClass = 'text-gray-500 hover:text-white hover:bg-white/5';

  return `
    <button data-tab="${label}" class="explore-tab flex-1 py-4 text-sm sm:text-base transition relative ${active ? activeClass : inactiveClass}">
      ${label}
      ${active ? '<div class="absolute bottom-0 left-0 right-0 h-1 bg-blue-400 rounded-full"></div>' : ''}
    </button>`;
}

//The News Today Items
function NewsItem({ title, category, time, posts }) {
  return `
    <div class="flex items-start gap-3 px-4 py-3 hover:bg-white/5 cursor-pointer transition">
      <div class="flex-1 min-w-0">
        <p class="text-xs text-gray-500">${category} · ${time}</p>
        <p class="font-bold text-white text-sm leading-snug mt-1">${title}</p>
        <p class="text-xs text-gray-500 mt-1">${posts}</p>
      </div>
    </div>`;
}

//The Trending Row
function TrendingRow({ category, topic, posts }) {
  return `
    <div class="flex justify-between items-start px-4 py-3 hover:bg-white/5 cursor-pointer transition">
      <div>
        <p class="text-xs text-gray-500">${category}</p>
        <p class="font-bold text-white text-base mt-0.5">${topic}</p>
        <p class="text-xs text-gray-500 mt-0.5">${posts}</p>
      </div>
      <button class="text-gray-500 hover:text-blue-400 p-2 rounded-full hover:bg-blue-400/10 transition mt-1">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">${ICONS.dots}</svg>
      </button>
    </div>`;
}
