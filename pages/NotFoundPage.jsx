// Name: Ammanullah | Registration No: 2500615
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <span className="not-found-code">404</span>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="primary-button">Go to homepage</Link>
    </section>
  )
}