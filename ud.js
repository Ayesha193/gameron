
import UAuth from '@uauth/js'

const uauth = new UAuth({
    clientID: "c089bb26-9bc1-4a5d-9f10-cd074a4cccad",
    redirectUri: "http://localhost:5001",
    scope: "openid wallet email profile:optional social:optional"
  })


  window.login = async () => {
    try {
      const authorization = await uauth.loginWithPopup()
   
      console.log(authorization)
    } catch (error) {
      console.error(error)
    }
  }

  
window.logout = async () => {
    await uauth.logout()
    console.log('Logged out with Unstoppable')
  }