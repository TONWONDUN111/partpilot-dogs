async function loadPetVideoFeed() {
  const container = document.querySelector("#pet-videos-feed");
  if (!container) return;

  try {
    const response = await fetch("pet_videos_feed.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to load feed");
    const items = await response.json();

    if (!Array.isArray(items) || !items.length) {
      container.innerHTML = '<div class="empty-state"><p>No video picks yet. Feed updates will appear here automatically.</p></div>';
      return;
    }

    container.innerHTML = items.map((item) => `
      <article class="part-card">
        <header>
          <div>
            <span class="pill">${item.category || "Trending"}</span>
            <h3>${item.title}</h3>
          </div>
          <span class="meta-chip">${item.published || "Today"}</span>
        </header>
        <p>${item.summary || "Fresh pet video picks."}</p>
        <a class="button button-dogs-primary" href="${item.watchUrl}" target="_blank" rel="noreferrer">Watch now</a>
      </article>
    `).join("");
  } catch {
    container.innerHTML = '<div class="empty-state"><p>Unable to load pet videos feed right now.</p></div>';
  }
}

loadPetVideoFeed();
