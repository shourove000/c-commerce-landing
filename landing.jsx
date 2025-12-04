import { useRef } from "react";

export default function LandingPage() {
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    alert(`Thank you for subscribing with ${email}! Check your inbox for exclusive offers.`);
    e.target.reset();
  };

  const handleAddToCart = (name) => {
    alert(`${name} has been added to your cart!`);
  };

  const products = [
    {
      img: "https://www.shutterstock.com/image-vector/shoppers-buying-gadgets-online-discount-260nw-1216923970.jpg",
      category: "Gadgets",
      name: "Latest Gadgets",
      price: "$99.99",
    },
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/007/985/821/small/online-shopping-on-mobile-phone-apps-bags-gift-boxes-in-the-cart-convenient-to-pay-via-credit-card-without-going-to-the-store-cover-page-for-the-website-mobile-marketing-illustration-3d-vector.jpg",
      category: "Mobile",
      name: "Mobile Accessories",
      price: "$49.99",
    },
    {
      img: "https://i.pinimg.com/236x/d8/ed/a0/d8eda0e3e89770a4eb29f4323f2d6f42.jpg",
      category: "Fashion",
      name: "Trendy Accessories",
      price: "$34.99",
    },
    {
      img: "https://mensworld.com.bd/wp-content/uploads/2023/09/FSF-1166.jpg",
      category: "Men's Wear",
      name: "Premium Men's Collection",
      price: "$89.99",
    },
    {
      img: "https://needlebd.com/wp-content/uploads/2023/04/Sky-Shirt.jpg",
      category: "Clothing",
      name: "Casual Shirt",
      price: "$44.99",
    },
    {
      img: "https://5.imimg.com/data5/OB/MR/MY-30372469/solid-formal-blue-shirt-500x500.jpg",
      category: "Clothing",
      name: "Formal Blue Shirt",
      price: "$59.99",
    },
    {
      img: "https://cdn.kaykraft.com/wp-content/uploads/2021/06/YM-DNM-01.jpg",
      category: "Denim",
      name: "Classic Denim Jeans",
      price: "$69.99",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-white px-6 py-20 text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">Welcome to ShopHub</h1>
            <p className="text-lg text-gray-600 mb-6">
              Discover the best products at unbeatable prices. Shop online with
              confidence and enjoy fast delivery right to your door.
            </p>
            <button
              onClick={scrollToProducts}
              className="px-8 py-3 border border-black font-bold hover:bg-black hover:text-white"
            >
              Start Shopping
            </button>
          </div>
          <div>
            <img
              src="https://www.shutterstock.com/image-vector/shoppers-buying-gadgets-online-discount-260nw-1216923970.jpg"
              alt="Online Shopping"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose ShopHub?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: "✨", title: "Wide Selection", text: "Browse thousands of products from top brands in one place." },
            { icon: "🚚", title: "Fast Delivery", text: "Get your orders delivered quickly and safely to your doorstep." },
            { icon: "💳", title: "Secure Payment", text: "Shop with confidence with our secure and encrypted system." },
            { icon: "🔄", title: "Easy Returns", text: "Hassle-free returns and exchanges within 30 days." },
          ].map((f, i) => (
            <div key={i} className="border p-6 text-center hover:border-black">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-16 bg-white max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="border hover:border-black">
              <img src={p.img} className="w-full h-64 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500 font-bold uppercase">{p.category}</p>
                <h3 className="text-lg font-bold mt-1">{p.name}</h3>
                <p className="text-xl font-bold mt-2">{p.price}</p>
                <button
                  onClick={() => handleAddToCart(p.name)}
                  className="w-full mt-4 py-2 border border-black font-bold hover:bg-black hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-t border-b bg-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          {["50K+", "100K+", "24/7", "99%"].map((n, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold mb-1">{n}</h3>
              <p className="text-gray-600">
                {[
                  "Products",
                  "Happy Customers",
                  "Customer Support",
                  "Satisfaction Rate",
                ][i]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600">
            Get exclusive deals, new product launches, and special offers!
          </p>

          <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 border p-3"
            />
            <button className="px-6 py-3 border border-black font-bold hover:bg-black hover:text-white">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
