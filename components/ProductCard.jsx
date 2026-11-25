// Name: Ammanullah | Registration No: 2500615
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectWishIds, toggleWish } from '../store/wishlistSlice.js'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const wishIds = useSelector(selectWishIds)
  const isWished = wishIds.includes(product.id)

  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className={`product-art ${product.color}`}>
        <span className="product-emoji">{product.emoji}</span>
        <span className="art-label">{product.category}</span>
      </Link>
      <div className="product-info">
        <span className="eyebrow">{product.category}</span>
        <Link to={`/product/${product.id}`} className="product-title">{product.title}</Link>
        <div className="card-bottom">
          <strong className="price">Rs. {product.price.toLocaleString('en-PK')}</strong>
          <button
            className={isWished ? 'wish-button wished' : 'wish-button'}
            onClick={() => dispatch(toggleWish(product.id))}
            aria-pressed={isWished}
          >
            {isWished ? '♥ Wished' : '♡ Wish'}
          </button>
        </div>
      </div>
    </article>
  )
}