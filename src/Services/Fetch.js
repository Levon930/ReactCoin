//this class in created using singleton patern

class Fetch {
  static instance = null;

  #DOMAIN = "https://api.udilia.com/coins/v1";
  constructor() {
    if (Fetch.instance) {
      return Fetch.instance;
    }

    Fetch.instance = this;
  }
  async ReaquestData(URL, method) {
    let response = await fetch(URL, { method: method });
    let data = await response.json();
    return data;
  }
  get(URL) {
    return this.ReaquestData(`${this.#DOMAIN}/${URL}`, "GET");
  }
  put(URL) {
    return this.ReaquestData(`${this.#DOMAIN}/${URL}`, "PUT");
  }
  post(URL) {
    return this.ReaquestData(`${this.#DOMAIN}/${URL}`, "POST");
  }
  delete(URL) {
    return this.ReaquestData(`${this.#DOMAIN}/${URL}`, "DELETE");
  }
}
const fetchService = new Fetch();
export default fetchService;
