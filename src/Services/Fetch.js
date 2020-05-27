//this class in created using singleton patern

class Fetch {
  static instance = null;
  constructor() {
    if (Fetch.instance) {
      return Fetch.instance;
    }
    Fetch.instance = this;
  }
  get() {}
  put() {}
  post() {}
  delete() {}
}
const fetchService = new Fetch();
export default fetchService;
