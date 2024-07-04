import axios from "axios"

export const API_WP = 'https://diprofirechile.wpcomstaging.com/wp-json'

export const endpoints_wp = {
  POSTS: `${API_WP}/wp/v2/posts`,
  POST_REVISIONS: `${API_WP}/wp/v2/posts/<id>/revisions`,
  CATEGORIES: `${API_WP}/wp/v2/categories`,
  TAGS: `${API_WP}/wp/v2/tags`,
  PAGES: `${API_WP}/wp/v2/pages`,
  PAGE_REVISIONS: `${API_WP}/wp/v2/pages/<id>/revisions`,
  COMMENTS: `${API_WP}/wp/v2/comments`,
  TAXONOMIES: `${API_WP}/wp/v2/taxonomies`,
  MEDIA: `${API_WP}/wp/v2/media`,
  USERS: `${API_WP}/wp/v2/users`,
  POST_TYPES: `${API_WP}/wp/v2/types`,
  POST_STATUSES: `${API_WP}/wp/v2/statuses`,
  SETTINGS: `${API_WP}/wp/v2/settings`,
  THEMES: `${API_WP}/wp/v2/themes`,
  SEARCH: `${API_WP}/wp/v2/search`,
  BLOCK_TYPES: `${API_WP}/wp/v2/block-types`,
  BLOCKS: `${API_WP}/wp/v2/blocks`,
  BLOCK_REVISIONS: `${API_WP}/wp/v2/blocks/<id>/autosaves/`,
  BLOCK_RENDERER: `${API_WP}/wp/v2/block-renderer`,
  BLOCK_DIRECTORY_ITEMS: `${API_WP}/wp/v2/block-directory/search`,
  PLUGINS: `${API_WP}/wp/v2/plugins`,
}

export const getProjects = async () => {
  const response = await axios.get(endpoints_wp.POSTS)
  return response.data
}