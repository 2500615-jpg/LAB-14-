// Name: Ammanullah | Registration No: 2500615
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { products } from '../data/products.js'
import { selectWishIds, toggleWish } from '../store/wishlistSlice.js'
import NotFoundPage from './NotFoundPage.jsx'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))
  const dispatch = useDispatch()
  const wishIds = useSelector(selectWishIds)

  if (!product) return <NotFoundPage />

  const isWished = wishIds.includes(product.id)

  return (
    <section className="detail-layout">
      <div className={`detail-art product-art ${product.color}`}>
        <span className="detail-emoji">{product.emoji}</span>
        <span className="art-label">{product.category}</span>
      </div>
      <div className="detail-copy">
        <Link to="/" className="back-link">← Back to shop</Link>
        <span className="eyebrow">{product.category}</span>
        <h1>{product.title}</h1>
        <p className="detail-price">Rs. {product.price.toLocaleString('en-PK')}</p>
        <p className="detail-description">{product.description}</p>
        <button
          className={isWished ? 'primary-button selected' : 'primary-button'}
          onClick={() => dispatch(toggleWish(product.id))}
        >
          {isWished ? '♥ Remove from wishlist' : '♡ Add to wishlist'}
        </button>
      </div>
    </section>
  )
}