const TRENDS = [
  { location: 'Trending in Kenya', topic: '#VituKwaGround', count: '9,580 Tweets' },
  { location: 'Trending in Kenya', topic: 'Amerix',         count: '8,211 Tweets' },
  { location: 'Trending in Kenya', topic: 'murkomen',       count: '3,135 Tweets' },
  { location: 'Trending in Kenya', topic: 'Simp',           count: '40.3K Tweets' },
  { location: 'Trending in Kenya', topic: '#BreakSafaricomMonopoly', count: '3,579 Tweets' },
];

const FOLLOW_SUGGESTIONS = [
  { avatar: 'https://pbs.twimg.com/profile_images/1710911871551685633/0r6g1j7A_400x400.jpg', name: 'jack',           handle: '@jack',   verified: true  },
  { avatar: 'https://pbs.twimg.com/profile_images/1710911871551685633/0r6g1j7A_400x400.jpg', name: 'Marc Andreessen', handle: '@pmarca', verified: false },
];

// Depends on ICONS from icons.js
function TrendItem({ location, topic, count }) {
  return `
    <div class="flex justify-between items-start px-4 py-2 hover:bg-gray-800 cursor-pointer transition">
      <div>
        <p class="text-sm text-gray-500">${location}</p>
        <p class="font-bold text-sm">${topic}</p>
        <p class="text-sm text-gray-500 mt-0.5">${count}</p>
      </div>
      <button class="text-gray-500 hover:text-blue-400 p-2 rounded-full hover:bg-blue-400/10 transition">
        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">${ICONS.dots}</svg>
      </button>
    </div>`;
}

function FollowItem({ avatar, name, handle, verified }) {
  return `
    <div class="flex justify-between items-center px-4 py-2 hover:bg-gray-800 cursor-pointer transition gap-2">
      <div class="flex items-center gap-4 min-w-0">
        <img src="${avatar}" alt="${name}" class="w-10 h-10 rounded-full shrink-0">
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <span class="font-bold text-md hover:underline truncate">${name}</span>
            ${verified ? `<svg class="w-4 h-4 fill-blue-400 shrink-0" viewBox="0 0 24 24" aria-hidden="true">${ICONS.verified}</svg>` : ''}
          </div>
          <p class="text-md text-gray-500 truncate">${handle}</p>
        </div>
      </div>
      <button class="bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-gray-200 transition text-sm shrink-0">
        Follow
      </button>
    </div>`;
}
