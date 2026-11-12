const newsApiBaseUrl = import.meta.env.PROD
  ? "https://news-api-proxy.up.railway.app/news/v2/everything"
  : "https://newsapi.org/v2/everything";

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = (keyword) => {
  const today = new Date();
  const sevenDaysAgo = new Date();

  sevenDaysAgo.setDate(today.getDate() - 7);

  const from = sevenDaysAgo.toISOString().split("T")[0];
  const to = today.toISOString().split("T")[0];

  const params = new URLSearchParams({
    q: keyword,
    apiKey,
    from,
    to,
    pageSize: "100",
  });

  return fetch(`${newsApiBaseUrl}?${params.toString()}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`News API error: ${res.status}`);
      }

      return res.json();
    })
    .then((data) => {
      if (data.status !== "ok") {
        throw new Error(data.message || "Failed to fetch news");
      }

      return data.articles;
    });
};
