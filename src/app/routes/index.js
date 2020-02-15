///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import Home from '../pages/home';
import CaseStudyWithoutState from '../pages/case-studies/without-state';
import CaseStudyINotWantUpdate from '../pages/case-studies/i-not-want-update';
import CaseStudyTheContext from '../pages/case-studies/the-context';
import CaseStudyComponentsPurity from '../pages/case-studies/components-purity';
import CaseStudyInheritanceVsComposition from '../pages/case-studies/inheritance-vs-composition';
import CaseStudyComponentReferences from '../pages/case-studies/component-references';
import CaseStudyBuildComponents from '../pages/case-studies/build-components';
import CaseStudyHooksLessLinesMoreFun from '../pages/case-studies/hooks-less-lines-more-fun';

///////////////////////////////////////////////////////////////
// ROUTES
///////////////////////////////////////////////////////////////
const routes = [
  {
    path: "/",
    text: "Home",
    page: Home,
    default: true,
  },
  {
    text: "¿Can I use React without state?",
    page: CaseStudyWithoutState,
  },
  {
    text: "I don't want update ヽ(ಠ_ಠ)ノ",
    page: CaseStudyINotWantUpdate,
  },
  {
    text: "The context",
    page: CaseStudyTheContext,
  },
  {
    text: "Components purity",
    page: CaseStudyComponentsPurity,
  },
  {
    text: "Inheritance vs Composition",
    page: CaseStudyInheritanceVsComposition,
  },
  {
    text: "Component references",
    page: CaseStudyComponentReferences,
  },
  {
    text: "Build components",
    page: CaseStudyBuildComponents,
  },
  {
    text: "Hooks, less lines, more fun",
    page: CaseStudyHooksLessLinesMoreFun,
  },
].map(function(route, index) {
  route.path = route.path || `/case-study-${index}`;
  return route;
});

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default routes;
