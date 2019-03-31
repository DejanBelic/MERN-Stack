export default class Product {

  /**
   *
   * @param {string} id
   * @param {string} name
   * @param {number} price
   * @param {Array.<string>} images
   */
  constructor({ id, name, price, images}) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._images = images;
  }

  /**
   * @returns {string}
   */
  getId = () => this._id;
}

/**
 * @returns {string}
 */
getName = () => this._name;

/**
 * @returns {number}
 */
getPrice = () => this._price;

/**
 * @returns {Array<string>}
 */
getImages = () => this._images;

/**
 * @returns {{id: string, name: string, price: number, images: Array<string>}}
 */
getData = () => ({
  id: this._id,
  name: this._name,
  price: this._price,
  images: this._images
})