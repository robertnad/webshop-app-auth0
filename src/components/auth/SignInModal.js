import React, { useState } from 'react';
import ReactModalLogin from 'react-modal-login';
import { googleConfig } from './social-config'


const SignInModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
        setErrorMsg(null);
    }

    const onTabsChange = () => {
        setErrorMsg(null);
    }

    const startLoading = () => {
        setLoading(true);
    }

    const finishLoading = () => {
        setLoading(false);
    }

    const onLoginSuccess = (method, response) => {
        console.log('logged successfully with ' + method);
    }

    const onLoginFail = (method, response) => {
        console.log('logging failed with ' + method);
        setErrorMsg(response)
    }

    return (
        <div>
            <button onClick={() => openModal()}>Sign in</button>
            <ReactModalLogin
                visible={showModal}
                onCloseModal={closeModal}
                loading={loading}
                error={errorMsg}
                tabs={{ onChange: onTabsChange }}
                loginError={{ label: `Couldn't sign in, please try again` }}
                registerError={{ label: `Couldn't sign up, please try again` }}
                startLoading={startLoading}
                finishLoading={finishLoading}
                providers={{
                      google: {
                        config: googleConfig,
                        onLoginSuccess: onLoginSuccess,
                        onLoginFail: onLoginFail,
                        label: "Continue with Google"
                      }
                }}
            />
        </div>
    );
}

export default SignInModal;

// class SignInModal extends React.Component {

//     constructor(props) {
//       super(props);
  
//       this.state = {
//         showModal: false,
//         loading: false,
//         error: null
//       };
  
//     }
  
//     openModal() {
//       this.setState({
//         showModal: true,
//       });
//     }
  
//     closeModal() {
//       this.setState({
//         showModal: false,
//         error: null
//       });
//     }
    
//     onLoginSuccess(method, response) {
//       console.log('logged successfully with ' + method);
//     }
  
//     onLoginFail(method, response) {
//       console.log('logging failed with ' + method);
//       this.setState({
//         error: response
//       })
//     }
  
//     startLoading() {
//       this.setState({
//         loading: true
//       })
//     }
  
//     finishLoading() {
//       this.setState({
//         loading: false
//       })
//     }
  
//     onTabsChange() {
//       this.setState({
//         error: null
//       });
//     }
  
  
//     render() {
  
//       return (
//         <div>
  
//           <button
//             onClick={() => this.openModal()}
//           >
//             Open Modal
//           </button>
  
//           <ReactModalLogin
//             visible={this.state.showModal}
//             onCloseModal={this.closeModal.bind(this)}
//             loading={this.state.loading}
//             error={this.state.error}
//             tabs={{
//               onChange: this.onTabsChange.bind(this)
//             }}
//             loginError={{
//               label: "Couldn't sign in, please try again."
//             }}
//             registerError={{
//               label: "Couldn't sign up, please try again."
//             }}
//             startLoading={this.startLoading.bind(this)}
//             finishLoading={this.finishLoading.bind(this)}
//             providers={{
//                   google: {
//                     config: googleConfig,
//                     onLoginSuccess: this.onLoginSuccess.bind(this),
//                     onLoginFail: this.onLoginFail.bind(this),
//                     label: "Continue with Google"
//                   }
//             }}
//           />
//         </div>
//       )
//     }
//   }
//   export default SignInModal;