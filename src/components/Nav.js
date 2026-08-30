// Navigation items for the sidebar menu
//lg for 1024px or larger
//font-normal = font-weight: 400;
const NAV_ITEMS = [
  {
    label: 'Home',
    href: 'index.html',
    iconClass: 'w-6 h-6 xl:w-7 xl:h-7',
    textClass: 'font-bold',
    svg: `<path d="M21.58 13.06l-1.52-1.51-7.06-7c-.54-.53-1.42-.53-1.96 0l-7.06 7-1.52 1.51c-.39.4-.39 1.03 0 1.42.19.2.46.3.71.3h1.27v6.23c0 .55.45 1 1 1h4V14h4v5.01h4c.55 0 1-.45 1-1v-6.23h1.27c.25 0 .52-.1.71-.3.4-.39.4-1.02 0-1.42z"/>`,
  },
  {
    label: 'Explore',
    href: 'explore.html',
    iconClass: 'w-6 h-6 xl:w-7 xl:h-7',
    textClass: 'font-normal',
    svg: `<path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.42 0 2.73-.46 3.81-1.24l4.97 4.97c.2.2.45.3.71.3s.51-.1.71-.29c.39-.39.39-1.03 0-1.42l-4.97-4.97c.78-1.08 1.24-2.39 1.24-3.81 0-3.59-2.91-6.5-6.5-6.5zm-4.5 6.5c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5-4.5-2.02-4.5-4.5z"/>`,
  },
  {
    label: 'Notifications',
    iconClass: 'w-6 h-6 xl:w-7 xl:h-7',
    textClass: 'font-normal',
    svg: `<path d="M21.16 14.85l-1.7-1.74V8.55c0-4.11-2.91-7.55-6.84-8.31V0H11.4v.24C7.45 1 4.54 4.44 4.54 8.55v4.56l-1.7 1.74C2.31 15.38 2 16.03 2 16.71V18c0 .55.45 1 1 1h6.05c.23 2.27 2.14 4 4.47 4s4.24-1.73 4.47-4H21c.55 0 1-.45 1-1v-1.29c0-.68-.31-1.33-.84-1.86zM13.52 21c-1.29 0-2.35-.91-2.48-2h4.96c-.13 1.09-1.19 2-2.48 2z"/>`,
  },
  {
    label: 'Messages',
    iconClass: 'w-6 h-6 xl:w-7 xl:h-7',
    textClass: 'font-normal',
    svg: `<path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v.117l8 4.78 8-4.78V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 2.457l-7.498 4.48c-.31.185-.7.185-1.004 0L3.998 7.457V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5V7.457z"/>`,
  },
  {
    label: 'Grok',
    iconClass: 'w-6 h-6 xl:w-7 xl:h-7',
    textClass: 'font-normal',
    svg: `<path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm4.25 3h5.5v2h-5.5V8zm0 4h5.5v2h-5.5v-2zm0 4h3.5v2h-3.5v-2z"/>`,
  },
  {
    label: 'Lists',
    iconClass: 'w-6 h-6 xl:w-7 xl:h-7',
    textClass: 'font-normal',
    svg: `<path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2zM3 6h2v2H3V6zm0 7h2v2H3v-2zm0 7h2v2H3v-2z"/>`,
  },
  {
    label: 'Bookmarks',
    iconClass: 'w-6 h-6 xl:w-7 xl:h-7',
    textClass: 'font-normal',
    svg: `<path d="M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v16.86c0 .4-.28.75-.68.85-.4.11-.83-.1-1.04-.45L12 14.85l-6.28 6.91c-.2.23-.52.34-.82.28-.4-.08-.68-.43-.68-.83V4.5zM6.5 4c-.28 0-.5.22-.5.5v14.56l5.37-5.91c.34-.37.93-.37 1.27 0l5.36 5.91V4.5c0-.28-.22-.5-.5-.5h-11z"/>`,
  },
  {
    label: 'Communities',
    iconClass: 'w-6 h-6 xl:w-7 xl:h-7',
    textClass: 'font-normal',
    svg: `<path d="M7.5 7c1.93 0 3.5-1.57 3.5-3.5S9.43 0 7.5 0 4 1.57 4 3.5 5.57 7 7.5 7zm0-5c.83 0 1.5.67 1.5 1.5S8.33 5 7.5 5 6 4.33 6 3.5 6.67 2 7.5 2zM16.5 7c1.93 0 3.5-1.57 3.5-3.5S18.43 0 16.5 0 13 1.57 13 3.5 14.57 7 16.5 7zm0-5c.83 0 1.5.67 1.5 1.5S17.33 5 16.5 5s-1.5-.67-1.5-1.5S15.67 2 16.5 2zM2 21.5c0-2.48 2.02-4.5 4.5-4.5h2c2.48 0 4.5 2.02 4.5 4.5V23H2v-1.5zM4 21h7v-.5c0-1.38-1.12-2.5-2.5-2.5h-2C5.12 18 4 19.12 4 20.5v.5zm11.5-4c1.35 0 2.54.6 3.35 1.54V17.5c0-2.48-2.02-4.5-4.5-4.5h-1.15c.67.57 1.21 1.3 1.58 2.13.23-.08.47-.13.72-.13z"/>`,
  },
  {
    label: 'Premium',
    iconClass: 'w-6 h-6 xl:w-7 xl:h-7',
    textClass: 'font-normal',
    svg: `<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>`,
  },
  {
    label: 'Profile',
    iconClass: 'w-6 h-6 xl:w-7 xl:h-7',
    textClass: 'font-normal',
    svg: `<path d="M12 11.72c-2.607 0-4.72-2.113-4.72-4.72S9.393 2.28 12 2.28s4.72 2.113 4.72 4.72-2.113 4.72-4.72 4.72zm0-7.44c-1.5 0-2.72 1.22-2.72 2.72s1.22 2.72 2.72 2.72 2.72-1.22 2.72-2.72-1.22-2.72-2.72-2.72zM12 13.13c-4.41 0-8 3.59-8 8v.59h16v-.59c0-4.41-3.59-8-8-8zm-5.94 6.59c.43-2.61 2.69-4.59 5.94-4.59s5.51 1.98 5.94 4.59H6.06z"/>`,
  },
  {
    label: 'More',
    iconClass: 'w-6 h-6 xl:w-7 xl:h-7',
    textClass: 'font-normal',
    svg: `<path d="M16.5 10.25c-.966 0-1.75.784-1.75 1.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75-.784-1.75-1.75-1.75zm-9 0c-.966 0-1.75.784-1.75 1.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75-.784-1.75-1.75-1.75zm4.5 0c-.966 0-1.75.784-1.75 1.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75-.784-1.75-1.75-1.75z"/>`,
  },
];

// Wraps in <a> when a href is provided, plain <li> otherwise
function NavItem({ label, iconClass, textClass, svg, href }) {
  const itemClass = `flex items-center justify-center lg:justify-start gap-4 p-2 lg:p-3
    hover:bg-neutral-900/10 dark:hover:bg-white/10 rounded-full cursor-pointer
    transition duration-200 ease-out w-max text-black dark:text-[#E7E9EA]`;

  const content = `
    <svg viewBox="0 0 24 24" aria-hidden="true" class="${iconClass} fill-current">${svg}</svg>
    <span class="text-lg xl:text-xl ${textClass} hidden lg:inline">${label}</span>`;

  return href
    ? `<li><a href="${href}" class="${itemClass}">${content}</a></li>`
    : `<li class="${itemClass}">${content}</li>`;
}
