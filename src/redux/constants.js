export const fetchProductApi = (searchText = "", pageNum) =>
  `api/task/products/search?search=${encodeURIComponent(
    searchText
  )}&page=${pageNum}&limit=10`;

export const apiKey = "72njgfa948d9aS7gs5";
