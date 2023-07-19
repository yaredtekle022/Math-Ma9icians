import Nav from './NavBar';
import Footer from './Footer';
import './Home.css';

const Home = () => (
  <>
    <Nav />
    <main>
      <h2>Welcome to our page!</h2>
      <div className="text-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam semper sem vel dapibus consectetur. Mauris convallis
          suscipit turpis nec molestie.
          Vivamus semper hendrerit sem, ac fringilla tortor maximus non.
          In vitae consectetur massa,
          a fringilla turpis. Nullam tincidunt fringilla nulla, faucibus
          porttitor
          nulla placerat vel.
          In maximus egestas arcu ut elementum. In sit amet risus risus.
          Maecenas mattis mi orci. Sed ultrices,
          leo nec sagittis maximus, lorem massa finibus lacus, a malesuada
          velit felis sit amet mauris.
          Vestibulum vel felis eu est dignissim tempor.
          <br />
          <br />
          In lacinia diam ac dolor pharetra posuere. Vestibulum
          ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; In dignissim, nisl in
          rutrum aliquam, libero elit
          ullamcorper magna, in tincidunt mi lorem eget diam. Nullam
          posuere est neque, nec consequat
          lectus congue sit amet. Mauris eget tortor id turpis tincidunt
          tempus in ut mauris. Suspendisse
          tellus nisi, mollis auctor feugiat quis, rutrum id eros. Nam semper,
          purus quis ultricies vehicula,
          erat leo lacinia ante, id ultricies purus lacus a libero.
          Nam ornare suscipit neque,
          ac venenatis nisl vulputate ut. Morbi eu risus eget augue
          mollis porttitor at porttitor orci.
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default Home;
