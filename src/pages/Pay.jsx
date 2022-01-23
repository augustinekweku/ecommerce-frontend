import styled from 'styled-components'
import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from 'react';
import axios from 'axios'


const Container = styled.div`
    
`
const Button = styled.button`
    padding: 10px 30px;

`
const KEY = "pk_test_51H5VchKAVWDj3knqry4DU5nifdkMENRoaMCqziK0a8fYFMVaA4ylEyp8zfDGC8F3yGRSDJof0cA0mx7Ox4YlJUpc0072qMRmUD"
const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(()=> {
        const makeRequest = async (req, res) => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000
                    },{
                    headers: { 
                        "Authorization": "Bearer sk_test_51H5VchKAVWDj3knqS7fgL4zFiq0V85KrbOWo0pZuIhbqbNQm9QIdt7tYhaI2IztpFmfzoYqCdvKPCchNx28XZEsi00kmbwhu5J"
                      }})
                    console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken])
    return (
        <Container>
                <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <StripeCheckout 
        name='Augustore'
        billingAddress
        shippingAddress
        description='Your total is $20'
        amount={2000}
        token={onToken}
        stripeKey={KEY}
        >

      <Button>Pay</Button>
        </StripeCheckout>
    </div>
        </Container>
    )
}

export default Pay
