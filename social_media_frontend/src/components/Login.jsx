import React from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import socialVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'

const Login = () => {

  const responseGoogle = (response) => {
    
  }

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video 
          src={socialVideo}
          type="video.mp4"
          loopcontrols={false}
          muted
          autoPlay
          clssName="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay" >
            <div className="p-5">
              <img src={logo} width="130px" alt="logo" />
            </div>

            <div className="shadow-2xl" >
                <GoogleLogin 
                  clienteId=''
                  render = { (renderProps) => (
                    <button
                      type="button"
                      className="bg-mainColor flex justify-center items-ceter p-3 rounded-lg cursor-pointer outline-none"
                      onClick={renderProps.onclick}
                      disabled={renderProps.disabled}
                    >
                      <FcGoogle className="mr-4" /> Sign in with Google
                    </button>
                  )}
                  onSuccess = { responseGoggle }
                  onFailure = { responseGoogle }
                  cookiePolicy = "single_host_origin"

                />
            </div>

        </div>
      </div>
    </div>
  )
}

export default Login