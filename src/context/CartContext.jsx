import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const CART_STORAGE_KEY = "rus_truck_cart_v1";
const FAVORITES_STORAGE_KEY = "rus_truck_favorites_v1";

export const CartProvider = ({ children }) => {
  // Load initial cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Load initial favorites from localStorage
  const [favoriteItems, setFavoriteItems] = useState(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (err) {
      console.error("Failed to save cart to localStorage", err);
    }
  }, [cartItems]);

  // Persist favorites
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteItems));
    } catch (err) {
      console.error("Failed to save favorites to localStorage", err);
    }
  }, [favoriteItems]);

  // Helper to extract unique ID
  const getProductId = (product) => {
    if (!product) return "";
    if (typeof product === "string" || typeof product === "number") return String(product);
    return String(product.slug || product.id || product.title || "");
  };

  // Helper matching item identity
  const matchesItem = (item, target) => {
    if (!item || !target) return false;
    const targetId = getProductId(target);
    return (
      String(item.id) === targetId ||
      (item.slug && String(item.slug) === targetId) ||
      (target.title && item.title === target.title)
    );
  };

  // Helper to normalize product object
  const extractProduct = (product) => {
    const id = getProductId(product);
    const title = product.title || product.cardName || product.recText || "Автоспецтехника РусТрак";
    const price = product.price || product.cardPrice || (typeof product.product === "string" ? product.product : "Цена по запросу");
    const img = product.img || (Array.isArray(product.images) ? product.images[0] : null) || product.cardImage || product.recImage || "/banner-1.jpg";
    const page = product.page || product.categoryPath || (product.slug ? `/catalog/${product.slug}` : "catalog");

    let dimensions = product.dimensions || product.gabarit;
    if (!dimensions && Array.isArray(product.specs)) {
      const s = product.specs.find((x) => x.label && x.label.toLowerCase().includes("габарит"));
      if (s) dimensions = s.value;
    }
    if (!dimensions && Array.isArray(product.shortSpecs)) {
      const s = product.shortSpecs.find((x) => x.label && x.label.toLowerCase().includes("габарит"));
      if (s) dimensions = s.value;
    }
    if (!dimensions) dimensions = "10405 х 2550 х 3080 мм";

    let capacity = product.capacity || product.massa;
    if (!capacity && Array.isArray(product.specs)) {
      const s = product.specs.find((x) => x.label && x.label.toLowerCase().includes("грузопод"));
      if (s) capacity = s.value;
    }
    if (!capacity && Array.isArray(product.shortSpecs)) {
      const s = product.shortSpecs.find((x) => x.label && x.label.toLowerCase().includes("грузопод"));
      if (s) capacity = s.value;
    }
    if (!capacity) capacity = "21 600 кг";

    return {
      id,
      slug: product.slug || id,
      title,
      price,
      img,
      page,
      dimensions,
      capacity,
      outOfStock: Boolean(product.outOfStock),
    };
  };

  // Add to cart
  const addToCart = (product) => {
    if (!product) return;
    const normalized = extractProduct(product);
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => matchesItem(item, normalized));

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: (updated[existingIndex].quantity || 1) + 1,
        };
        return updated;
      }

      return [...prev, { ...normalized, quantity: 1 }];
    });
  };

  // Remove from cart
  const removeFromCart = (target) => {
    setCartItems((prev) => prev.filter((item) => !matchesItem(item, target)));
  };

  // Update quantity
  const updateQuantity = (target, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(target);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => {
        if (matchesItem(item, target)) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Is in cart check
  const isInCart = (target) => {
    return cartItems.some((item) => matchesItem(item, target));
  };

  // Total quantity count
  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  // Toggle favorite
  const toggleFavorite = (product) => {
    if (!product) return;
    const normalized = extractProduct(product);
    setFavoriteItems((prev) => {
      const exists = prev.some((item) => matchesItem(item, normalized));

      if (exists) {
        return prev.filter((item) => !matchesItem(item, normalized));
      }

      return [...prev, normalized];
    });
  };

  // Remove from favorites
  const removeFromFavorites = (target) => {
    setFavoriteItems((prev) => prev.filter((item) => !matchesItem(item, target)));
  };

  // Is in favorites check
  const isInFavorites = (target) => {
    return favoriteItems.some((item) => matchesItem(item, target));
  };

  const favoritesCount = favoriteItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        favoriteItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isInCart,
        cartCount,
        toggleFavorite,
        removeFromFavorites,
        isInFavorites,
        favoritesCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
