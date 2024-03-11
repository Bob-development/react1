import './Footer.css';

export function Footer({children}) {
  return (
    <footer className="footer">
      <p className="txt">
        All rights reserved!
      </p>

      {children}
    </footer>
  );
}
