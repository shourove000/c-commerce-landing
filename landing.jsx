import React, { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    const handleNewsletterSubmit = (e) => {
      e.preventDefault();
      const email = e.target.querySelector("input[type='email']").value;
      alert(`Thank you for subscribing with ${email}! Check your inbox for exclusive offers.`);
      e.target.reset();
    };

    const form = document.querySelector(".newsletter-form");
    if (form) form.addEventListener("submit", handleNewsletterSubmit);

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('.product-name').textContent;
        alert(`${productName} has been added to your cart!`);
      });
    });

    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    document.querySelectorAll('.feature-card').forEach(card => observer.observe(card));
  }, []);

  const scrollToProducts = () => {
    const section = document.getElementById('products');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style jsx>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', sans-serif; }
        header, nav, .hero, .features, .products-section, .stats, .newsletter, footer {
          width: 100%;
        }
        .hero { background: linear-gradient(135deg,#667eea,#764ba2); color:white; padding:5rem 2rem; }
        .hero-content { display:grid; grid-template-columns:1fr 1fr; max-width:1200px; margin:auto; gap:3rem; }
        .cta-button { background:white; padding:1rem 2.5rem; border-radius:50px; border:none; cursor:pointer; }
        .features { background:#f8f9fa; padding:4rem 2rem; max-width:1200px; margin:auto; }
        .features-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:2rem; }
        .feature-card { background:white; padding:2rem; border-radius:10px; text-align:center; box-shadow:0 5px 15px rgba(0,0,0,0.08); }
        .products-section { padding:4rem 2rem; max-width:1200px; margin:auto; }
        .products-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:2rem; }
        .product-card { background:white; border-radius:10px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.08); }
        .product-image { width:100%; height:250px; object-fit:cover; }
        .product-info { padding:1.5rem; }
        .add-to-cart { width:100%; background:linear-gradient(135deg,#667eea,#764ba2); padding:0.8rem; color:white; border:none; border-radius:5px; }
        .stats { background:linear-gradient(135deg,#667eea,#764ba2); color:white; padding:3rem 2rem; }
        .stats-content { max-width:1200px; margin:auto; display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:2rem; text-align:center; }
        .newsletter { background:#f8f9fa; padding:3rem 2rem; text-align:center; }
        .newsletter-form { display:flex; gap:0.5rem; justify-content:center; margin-top:1.5rem; }
        @media(max-width:768px){ .hero-content{grid-template-columns:1fr;} .newsletter-form{flex-direction:column;} }
      `}</style>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to ShopHub</h1>
            <p>Discover the best products at unbeatable prices.</p>
            <button className="cta-button" onClick={scrollToProducts}>Start Shopping</button>
          </div>
          <div className="hero-image">
            <img src="https://www.shutterstock.com/image-vector/shoppers-buying-gadgets-online-discount-260nw-1216923970.jpg" />
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose ShopHub?</h2>
        <div className="features-grid">
          {["Wide Selection","Fast Delivery","Secure Payment","Easy Returns"].map((t,i)=>(
            <div className="feature-card" key={i}>
              <div className="feature-icon">✨</div>
              <h3>{t}</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="products-section" id="products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {[1,2,3,4,5,6,7].map((p,i)=>(
            <div className="product-card" key={i}>
              <img className="product-image" src="https://www.shutterstock.com/image-vector/shoppers-buying-gadgets-online-discount-260nw-1216923970.jpg" />
              <div className="product-info">
                <div className="product-category">Category</div>
                <h3 className="product-name">Sample Product</h3>
                <div className="product-price">$99.99</div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stats">
        <div className="stats-content">
          <div className="stat-item"><h3>50K+</h3><p>Products</p></div>
          <div className="stat-item"><h3>100K+</h3><p>Customers</p></div>
          <div className="stat-item"><h3>24/7</h3><p>Support</p></div>
          <div className="stat-item"><h3>99%</h3><p>Satisfaction</p></div>
        </div>
      </section>

      <section className="newsletter" id="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get exclusive deals & offers!</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </>
  );
}
