async function fetchFromUrl(url) {
  try {
    const response = fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (err) {
    console.error("Error fetching items:", err);
  }
}
