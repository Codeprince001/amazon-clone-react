export const initialState = {
  basket: [
    {
      title: "Sceptre 24-inch",
      imgUrl: "https://m.media-amazon.com/images/I/81zM2vVM+wL._AC_SX679_.jpg",
      price: 89,
      rating: 4,
      description: "Sceptre 24-inch Professional Thin 1080p LED Monitor 99% sRGB 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series) Professional Thin 1080p LED Monitor 99% sRGB 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)",
      id: 3,
    }
  ]
};

export const reducer = (state, action) => {
  if (action.type === "add-to-basket") {

    return {
      ...state,
      basket: [
        ...state.basket,
        action.item,
      ]
    };
  } if (action.type === "remove-from-cart") {

    return {
      state
    };
  }
  if (action.type === "reduce-quantity") {
    const updatedBasket = state.basket.map((item, index) =>
      index === action.index && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    return {
      ...state,
      basket: updatedBasket,
    };
  }
  if (action.type === "increase-quantity") {
    const updatedBasket = state.basket.map((item, index) =>
      index === action.index && item.quantity >= 0
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    return {
      ...state,
      basket: updatedBasket,
    };
  }
  if (action.type === "set-basket") {

    return {
      ...state,
      basket: [
        ...state.basket,
        action.item,
      ]
    };
  }
}

