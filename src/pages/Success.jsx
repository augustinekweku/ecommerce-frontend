import { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`

`

const Success = () => {
    const [orderId, setOrderId] = useState(null);
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
    
        Successfull. Your order is being prepared...
      <a style={{ padding: 10, marginTop: 20 }} href="/">Go to Homepage</a>
    </div>
        </Container>
    )
}

export default Success
