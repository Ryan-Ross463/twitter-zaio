//Cursor code
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('nav-items').innerHTML =
    NAV_ITEMS.map(item => NavItem(item)).join('');

  document.getElementById('tweet-feed').innerHTML =
    TWEETS.map(tweet => tweet.render()).join('');

  document.getElementById('trends-list').innerHTML =
    TRENDS.map(trend => TrendItem(trend)).join('');

  document.getElementById('follow-list').innerHTML =
    FOLLOW_SUGGESTIONS.map(user => FollowItem(user)).join('');

  const input = document.getElementById('compose-input');
  const feed  = document.getElementById('tweet-feed');

  document.getElementById('compose-btn').addEventListener('click', () => {
    const content = input.value.trim();
    if (!content) return;

    const tweet = new Tweet({
      avatar:   'https://pbs.twimg.com/profile_images/1710911871551685633/0r6g1j7A_400x400.jpg',
      name:     'Ryan Ross',
      handle:   '@ross_ryan38740',
      time:     'now',
      content,
      replies:  0,
      retweets: 0,
      likes:    0,
      views:    '0',
    });

    feed.insertAdjacentHTML('afterbegin', tweet.render());
    input.value = '';
  });
});
