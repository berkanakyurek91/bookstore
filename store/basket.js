import { reactive } from "vue";

const basketFromLocalStorage = window.localStorage.getItem("basket");

export const basket = reactive({
  items: basketFromLocalStorage ? JSON.parse(basketFromLocalStorage) : [],
  addItem({ item }) {
    const { id } = item;
    const itemIndex = this.findItemIndexByItemId({ id });

    //If item is exist just increase quantity
    if (itemIndex > -1) {
      this.items[itemIndex].quantity += 1;
    } else {
      this.items.push({
        ...item,
        quantity: 1,
      });
    }

    window.localStorage.setItem("basket", JSON.stringify(this.items));
  },
  removeItem({ index }) {
    this.items.splice(index, 1);

    window.localStorage.setItem("basket", JSON.stringify(this.items));
  },
  clear() {
    this.items = [];

    window.localStorage.removeItem("basket");
  },
  findItemIndexByItemId({ id }) {
    return this.items.findIndex((item) => item.id === id);
  },
});
