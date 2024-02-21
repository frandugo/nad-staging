import { featuredPosts } from "./featuredPosts";
import { loadSlick } from "./slickSlider";

document.addEventListener("DOMContentLoaded", function () {
    featuredPosts();
    loadSlick();
});