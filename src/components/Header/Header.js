import './Header.css';

export function Header({ children }) {
  return (
    <header className="header">
      <input placeholder = "Search" className = "search" />

      <div className = "nav">
        {children}
      </div>
    </header>
  );
}
