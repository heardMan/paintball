import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


export default class PayForm extends React.Component {
  onToken = (token) => {
    const email = token.email;
    const tokenId = token.id;
    const amount = 5000;
    
    fetch("/api/stripe", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({
          email,
          tokenId,
          amount
      })
    }).then(response => {
        console.log(response)
        console.log(response.status)
        if(response.status === 200){
          //this.props.paymentId
          this.props.state.payments.forEach(payment=>{
            if(payment._id === this.props.paymentID){
              console.log("EUREKA!!!!")
            }
          })

        }
    });
  }
 

  render() {
    return (
        
      <StripeCheckout
        name="Rentera" // the pop-in header title
        // description="Rent" // the pop-in header subtitle
        image="http://icons.iconarchive.com/icons/webalys/kameleon.pics/512/Apartment-icon.png" // the pop-in header image (default none)
        ComponentClass="div"
        panelLabel="Pay" // prepended to the amount in the bottom pay button
        amount={150000} // cents
        currency="USD"
        stripeKey="pk_test_kImoNaSQydjfreRSwKb4pH92000wUzhCHe"
        locale="auto"
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
        zipCode={false}
        allowRememberMe // "Remember Me" option (default true)
        token={this.onToken} // submit callback
        // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
        // you are using multiple stripe keys
        reconfigureOnUpdate={false}
        // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
        // useful if you're using React-Tap-Event-Plugin
        triggerEvent="onClick"
        >
        

       <button id={this.props.paymentId} className="btn universal_btn">Pay Bill

       
       </button>
      </StripeCheckout>
      
    )
  }
}
