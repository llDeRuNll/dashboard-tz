import styles from './Navbar.module.css'

const Navbar = ({ items, activeItem, onSelect }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>Northwind Risk</div>
      <div className={styles.links}>
        {items.map((item) => (
          <button
            key={item}
            type="button"
            className={`${styles.link} ${activeItem === item ? styles.isActive : ''}`}
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className={styles.profile}>
        <div className={styles.avatar}>JM</div>
        <div>
          <div className={styles.name}>Jordan Meyers</div>
          <div className={styles.role}>Senior Underwriter</div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
