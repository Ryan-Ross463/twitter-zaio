//Initialization, tabs, and search logic
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nav-items").innerHTML = NAV_ITEMS.map((item) => NavItem(item),).join("");
  
    document.getElementById("trends-list").innerHTML = TRENDS.map((trend) =>TrendItem(trend),).join("");

    document.getElementById("follow-list").innerHTML = FOLLOW_SUGGESTIONS.map((user) => FollowItem(user),).join("");

  //Controls how your trending topics list updates and refreshes on the screen.
  function renderTrendingList(items) {
    const container = document.getElementById("trending-list");
    if (!container) return;
    container.innerHTML = items.length ? items.map((row) => TrendingRow(row)).join("")
      : '<p class="px-4 py-8 text-gray-500 text-center">No trending topics found</p>';
  }

  function renderNewsList(items) {
    const container = document.getElementById("news-list");
    if (!container) return;
    container.innerHTML = items.length ? items.map((item) => NewsItem(item)).join("")
      : '<p class="px-4 py-8 text-gray-500 text-center">No news items found</p>';
  }

  //The tab variable that keeps track of the currently active tab.
  let activeTab = "Explore";

  //This function combines both tab clicking and search typing into one update of the data content on the page feed. Also cursor functionality for the search query, but myne was the tab selection.
  function applyFilters() {
    // Get the search input and query string.
    const searchInput = document.getElementById("explore-search");
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

    // Get the tab filter based on the active tab.
    const tabFilter = activeTab.toLowerCase();

    // The Trending and News data array objects.
    let trendingResults = TRENDING_TOPICS;
    let newsResults = NEWS_ITEMS;

    // TAB FILTERING
    // (Filters both lists based on the clicked tab)
    if (activeTab !== "Explore") {
      //Filters the trending and the news arrays based on the active tab category.
      trendingResults = trendingResults.filter((t) => t.category.toLowerCase().includes(tabFilter),
      );

      newsResults = newsResults.filter((n) => n.category.toLowerCase().includes(tabFilter),
      );
    }

    // SEARCH FILTERING Cursor function
    // (Filters the remaining items based on what is typed)
    if (query) {
      trendingResults = trendingResults.filter(
        (t) => t.topic.toLowerCase().includes(query) || t.category.toLowerCase().includes(query),
      );

      newsResults = newsResults.filter(
        (n) => n.title.toLowerCase().includes(query) || n.category.toLowerCase().includes(query),
      );
    }

    // Rendering and UI Updates
    renderTrendingList(trendingResults);
    renderNewsList(newsResults);

    // Hide sections completely if there are no results to show
    const newsSection = document.getElementById("news-list")?.parentElement;
    const trendingSection = document.getElementById("trending-list")?.parentElement;

    if (newsSection) newsSection.style.display = newsResults.length ? "block" : "none";
    if (trendingSection) trendingSection.style.display = trendingResults.length ? "block" : "none";
  }

  // Render the tabs for the explore section.
  function renderTabs() {
    const tabsContainer = document.getElementById("explore-tabs");
    //Renders the tabs based on the EXPLORE_TABS array and the active tab.
    tabsContainer.innerHTML = EXPLORE_TABS.map((label) => ExploreTab({ label, active: label === activeTab }),).join("");

    // Attach click event listeners to the tabsn calls renderTabs() and applyFilters() on click.
    document.querySelectorAll(".explore-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeTab = btn.dataset.tab;
        renderTabs();
        applyFilters();
      });
    });
  }

  // Initial render of tabs and content
  renderTabs();
  applyFilters();

  // Initialize the search input listener and bind the input event ensuring the applyFilters() executes immediately. 
  const searchInput = document.getElementById("explore-search");
  if (searchInput) {
      searchInput.addEventListener("input", () => {
      applyFilters();
    });
  }
});
