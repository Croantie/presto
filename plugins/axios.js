export default function({ $axios }, inject) {
  const prestoApi = $axios.create()

  prestoApi.setBaseURL('https://seller-events-api-desc.herokuapp.com/api/')

  inject('prestoApi', prestoApi)
}
