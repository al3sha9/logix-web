
import HEADER from './header/header';

import ACC from './accomplishments/acc';
import SERVICES from './services/services';
import CONTACT from './contact/contact';
import PORTFOLIO from './portfolio/portfolio';
import ABOUT from './about/about';
import FOOTER from './footer/footer';
import TEAM from './team/team';


function MAIN() {
  return (
    <>
      {/* <NAVBAR  fixed="top" /> */}
      <HEADER />
      <ACC />
      <SERVICES />
      <PORTFOLIO />
      <TEAM />
      <ABOUT />
      <CONTACT />
      <FOOTER />
    </>
  );
}
export default MAIN