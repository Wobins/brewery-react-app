const Footer = () => {
  return (
    <footer>
        <div>
            <p>&copy; {year} <a href="https://github.com/Wobins" target="_blank">Ange Wobinwo</a></p>
            <p>All Rights Reserved.</p>
        </div>
    </footer>
  )
}

const year = new Date().getFullYear()

export default Footer