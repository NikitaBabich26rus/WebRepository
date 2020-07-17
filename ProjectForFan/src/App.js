import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAV1BMVEVRgbj///9Of7dpkMD3+Pt+nsdDebTk6vJIfLY+drOfttTS3Oo4c7H7/P3u8ve3x954msXL1+eHpMtxlcNdibzAzuKpvtmRrM5Xhbrd5e8wb6+LqMyZsdGEvgp9AAAFFUlEQVRogc2bbcOqIAyGFRUx39Iszfr/v/OokcIGiD0F5/6KcTVgMAYEoT8F/z+7LGN7leXf2XGVNvWtb5Pz5XKJ7DV9fU7a/lQ3aRUb/oeOndb9ucuKjDLGyEdijE6/7859nR5gl9cHGykjwTdEGC1oe1WZj9l5W1DyHe72B+iY5LvsPKLsu1wuRiNIl9nVg37ZYkGEtpWenQ+/sfktNuQ6dlP8zmiuolGzm/HX5Eljo2LnhQP0ZHmO2dXw8wZ/aagQ+/HbYbaJtZCdU0foIKA5YEeOWnwSiWS2Q7M3wzk7cdXbs1gisksXrr1pLAX21WWTT41eC+zW3UibRVqB7bK3Z7GNnbqZTjcV6cqu3Xb3u8MXdu+8zfs3uzy7HWrTYDuXnB13jtFB0MWcXWXO2VnF2XfXw3wa6HfObjzY3XC2cxfjTjazT65dbHKyG2c7d2/u4IHrxZuzkzfb9dQyTS5vtvNpbZ7YOPvigX15sUsv7PLFVsXHTBQxlOHi+QtqLN7YsYLN2jxd1UjbJTI0qaQ78hOaiL9WmUaiWMcmXSgqHsSKUfIiBls5epKKVUGwgc2ecu1XYcZnOG0EHGWI5eKD7Fb+dSWs8K+YQ5I8QTDZbOUyaWpzAmoXd6n0amZnclZFuVwY2Oj3YmKAUFAos2G7SIPFhg1tk8Iq1OoSewT/7KqKDkxs2OHhTVzjRwObPQz/2oodFCAJWYkDJgNuJrJhh9TKoMjIzuCAeoj111o2Bf1RqXp7h00SwBY9BXrRxiYBHOTqeMzIRiM97Lav9Gx6k0tSTShoZsP6w4Zqy1Y2icAwiTQhkZn92jpI9ayfadlL2C1I6V8W7AwMKCEfpGNTsAzE2vz/Dhu1X3h+N6COPYBf6APgHTaet1fDNWzY4rl+v7PHBov4pJaZ2GDZnmY0fSy2x8aGVyY2O4Ove8NWa5fNUzKC+LhVsVkE/KIx7fL22XDufIfTCjaLwFwEA6mjbEKhj1fLWQ5kP7PsDKdBc058n40clmcgIbt6olCmMecTLNgBRYHhKVPMt0jlzqmiDXvZu8jqC7RiYKlX7WNsPLPO9Y6609VV150UjhU7gAtyOJ9N76EnhzDv6e3YDAYRdorNx7mWduNw3Epp8Df/fqmATv4FuC1bMdatZDrts2VbuJQGrrfcmq3Y9gLl17vqUkH6cewgfDmYHfo2ZjRqFAW57ijfno0XSFnzGkqyh8J0Xbr0ADtgxvHG45ZBMeec1JPrEXZATXAer5HsjstapeWH2Mb5bY3PKe50de3H2AFF4QFmq+DKbdFB9jTgFE0K2AHD7qhaT4+yA8I0U7u098d/UFH/Yfa0mrfKa1lSzqNAXXPHhn/ADliBYwmU40JwRSKLs4/lcmmH72TJbNJBOJ5hls3e8TwyoV0tVw7TOewCcy6YzXO5x/PnlCR1us6y1RNWDTxCkah+588/ODcghBZD0j9vt1OfEOzAhD5uq54dXs7Wc4MPz0sIT4+rd+9CAl1VvJ7VuD8nWm4d+Dofe4T+zgVPof/zUJ/nwD7Pv32e+/u87+DznofP+y1e7/X4vM8UOrc73Ng+76857nCeyvBzXzEW2D7vaXq9n+rzXq7X+8jrecTPhe9h6w4uvy6iuH/u89691/cGu7n+L4jo3ll4fV8yDbjW27ua0Od7ooWejF833u4d1azy2tLim+/HmO37sZf+/G6OffZu7q3lveDp4/eCt+W9oKH+//Wd5K/lk/0Pf3JCemxa5zsAAAAASUVORK5CYII='/>
      </header> 
      <nav className='nav'>
        <div>
          Profile
        </div>
        <div>
          Messages
        </div>
        <div>
          News
        </div>
      </nav>
      <div className='content'>
      </div>
    </div>
  ); 
}

export default App;
