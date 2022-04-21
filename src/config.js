import { Config, SearchStyle } from '@elevio/kb-kit/lib/Config';
import Loader from './components/Loader';
import ArticlePage from './pages/article';
import CategoryPage from './pages/category';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import Error404Page from './pages/error-404';
import Error401Page from './pages/error-401';
import ErrorPage from './pages/error';
const config = {
  pages: {
    article: {
      component: ArticlePage,
    },
    home: {
      component: HomePage,
    },
    category: {
      component: CategoryPage,
    },
    search: {
      component: SearchPage,
    },
    error404: {
      component: Error404Page,
    },
    error401: {
      component: Error401Page,
    },
    error: {
      component: ErrorPage,
    },
  },
  pageLoadingIndicator: Loader,
  searchStyle: SearchStyle.dropdown,
};
export default config;
