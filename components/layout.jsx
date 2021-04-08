import Header from './header';

const Layout = (props) => {
  return (
    <div className="relative flex flex-col h-screen overflow-scroll max-w-5xl mx-auto">
      {props.children}
    </div>
  );
}

export default Layout;