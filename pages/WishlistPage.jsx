// Name: Ammanullah | Registration No: 2500615
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { products } from '../data/products.js'
import { clearWish, selectWishIds, toggleWish } from '../store/wishlistSlice.js'

export default function WishlistPage() {
  const wishIds = useSelector(selectWishIds)
  const dispatch = useDispatch()
  const wishedProducts = products.filter((product) => wishIds.includes(product.id))

  return (
    <section className="wishlist-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">SAVED FOR LATER</span>
          <h1>Your wishlist</h1>
        </div>
        {wishedProducts.length > 0 && (
          <button className="clear-button" onClick={() => dispatch(clearWish())}>Clear all</button>
        )}
      </div>

      {wishedProducts.length === 0 ? (
        <div className="empty-state wishlist-empty">
          <span className="empty-icon">♡</span>
          <h3>Your wishlist is empty</h3>
          <p>Tap the Wish button on a product to save it here.</p>
          <Link to="/" className="primary-button">Explore products</Link>
        </div>
      ) : (
        <div className="wishlist-list">
          {wishedProducts.map((product) => (
            <article className="wishlist-row" key={product.id}>
              <div className={`wishlist-thumb ${product.color}`}>{product.emoji}</div>
              <div className="wishlist-product">
                <span className="eyebrow">{product.category}</span>
                <Link to={`/product/${product.id}`} className="product-title">{product.title}</Link>
                <span className="wishlist-price">Rs. {product.price.toLocaleString('en-PK')}</span>
              </div>
              <Link to={`/product/${product.id}`} className="view-link">View item ↗</Link>
              <button className="remove-button" onClick={() => dispatch(toggleWish(product.id))} aria-label={`Remove ${product.title}`}>
                Remove
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}