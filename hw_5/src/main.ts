// Импортирование необходимых классов
import { Catalog } from "./Logic/Catalog";
import { Cart } from "./Logic/Cart";
import { Profile } from "./Logic/Profile";
import { Order } from "./Logic/Order";
import { Auth } from "./Logic/Auth";

// Создание экземпляров классов
const catalog = new Catalog();
const cart = new Cart();
const profile = new Profile();
const order = new Order();
const auth = new Auth();

// Вызов методов
catalog.home();
cart.home();
profile.home();
order.home();
auth.home();
