export const rootUrl = "https://www.handalselaras.com/wp-json/wp/v2";
export const categories = [
  {
    id: 1,
    name: "Perencanaan Wilayah dan Kota",
    catIds: "45,242,243,270,6,272",
  },
  { id: 2, name: "Arsitektur", catIds: "229,223" },
  { id: 3, name: "Manajemen Konstruksi", catIds: "240,233,225" },
  { id: 4, name: "Survey dan Pemetaan", catIds: "219,235" },
  { id: 5, name: "UAV LiDAR", catIds: "237,227" },
  { id: 6, name: "Blog", catIds: "3" },
];
export const wpBlog2webBlog = (blog) => {
  return {
    id: blog.id,
    slug: blog.slug,
    title: blog.title.rendered,
    text: blog.excerpt.rendered,
    publish: blog.modified,
    category:
      blog._embedded && blog._embedded["wp:term"][0]
        ? blog._embedded["wp:term"][0]
            .map((category) => category.name.replace(/&amp;/g, "&"))
            .join(", ")
        : "",
    image:
      blog._embedded && blog._embedded["wp:featuredmedia"]
        ? blog._embedded["wp:featuredmedia"][0].source_url
        : null,
  };
};
