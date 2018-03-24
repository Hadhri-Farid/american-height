import Api from '@/services/Api'

export default {
  index () {
    return Api().get('rooms')
  },
  post (room) {
    return Api().post('rooms', room)
  }
}
