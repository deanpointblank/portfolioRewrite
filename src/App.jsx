import './App.css';
import Nav from './nav/nav';
import About from './about/about';
import Contact from './contact/contact';
import Skills from './skills/skills';
import Work from './work/work';

export default function App(props) {

  const currentPage = () => {
    switch (props.page) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'skills':
        return <Skills />;
      case 'work':
        return <Work />;
      //case '404':
    }
  };

  return (
    <div className="container">
      <Nav />
      <main>
        {currentPage()}
      </main>
    </div>
  )
}
