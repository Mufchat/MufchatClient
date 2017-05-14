/**
 * Created by ggere on 14.05.2017.
 */
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import { Url } from './url'
import events from './events'

class SocketIO {
  socket = ''
  stompClient = ''
  self = this
  init () {
    this.socket = new SockJS(Url.SOCKET_URL)
    this.stompClient = Stomp.over(this.socket)
    this.stompClient.connect({}, function (frame) {
      self.stompClient.subscribe(Url.SOCKET_SUBSCRIBE_MESSAGE_URL, function (message) {
        events.$emit('newMessage')
        // addMessage(JSON.parse(message.body))
      })
    })
  }
}

export const socketIO = new SocketIO()
