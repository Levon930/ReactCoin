//this class in created using singleton patern

class Fetch {
  static instance = null;
  constructor() {
    if (Fetch.instance) {
      return Fetch.instance;
    }
    Fetch.instance = this;
  }
  async ReaquestData() {
    let response = await fetch(URL, Maetod);
    let data = await response.json();
    return data;
  }
  get(URL) {
    this.ReaquestData(URL, "GET");
  }
  put(URL) {
    this.ReaquestData(URL, "PUT");
  }
  post(URL) {
    this.ReaquestData(URL, "POST");
  }
  delete(URL) {
    this.ReaquestData(URL, "DELETE");
  }
}
const fetchService = new Fetch();
export default fetchService;
