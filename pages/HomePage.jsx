// Name: Ammanullah | Registration No: 2500615
import { useMemo, useState } from 'react'
import { products } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

export default function HomePage() {
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(products.map((product) => product.category))]

  // Apply title search and category filtering together.
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesTitle = product.title.toLowerCase().includes(searchText.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      return matchesTitle && matchesCategory
    })
  }, [searchText, selectedCategory])

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="hero-kicker">YOUR CAMPUS MARKETPLACE</span>
          <h1>Find your next<br /><span>favorite thing.</span></h1>
          <p>Useful finds for students, creators, and curious minds.</p>
          <a className="hero-button" href="#products">Explore products <span>↘</span></a>
        </div>
        <div className="hero-visual">
          <div className="hero-circle"></div>
          <div className="hero-product hero-book">📚</div>
          <div className="hero-product hero-headphone">🎧</div>
          <div className="hero-product hero-lamp">💡</div>
          <span className="floating-note">Good finds<br />live here ✦</span>
        </div>
      </section>

      <section id="products" className="catalog-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE COLLECTION</span>
            <h2>Shop the picks</h2>
          </div>
          <span className="result-count">{filteredProducts.length} products</span>
        </div>

        <div className="filters">
          <label className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search by title"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
          </label>
          <label className="category-select">
            <span>Category</span>
            <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
              {categories.map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
          </label>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-icon">⌕</span>
            <h3>No products found</h3>
            <p>Try another title or choose a different category.</p>
            <button className="text-button" onClick={() => { setSearchText(''); setSelectedCategory('All') }}>
              Clear filters
            </button>
          </div>
        )}
      </section>
    </>
  )
}