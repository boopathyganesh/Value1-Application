import { RootState } from '../store';
import { sitemap } from '../../lib/map';

export const selectActiveLinkTitle = (state: RootState) => {
  const activeLink = state.activeLink.link;
  let activeItem = sitemap.find(item => item.link === activeLink);

  // If no exact match is found, check for pattern matches
  if (!activeItem) {
    activeItem = sitemap.find(item => {
      const pattern = new RegExp(`^${item.link.replace('*', '.*')}$`);
      return pattern.test(activeLink);
    });
  }

  return activeItem ? activeItem.title : '';
};
