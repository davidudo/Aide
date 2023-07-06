function orderDeliveryInfo(order, pin) {
  const { address, city, postalCode, country } = order.shippingAddress;

  const { orderItems } = order;

  return `
    <html>
        <body>
            <header>
                <h2 style="text-align: center;">Aide Robotics</h2>
            </header>
        
            <main>
                <h1 style="text-align: center;">Order Delivery Information</h1>
        
                <section>
                    <p>Thank you for placing your order with Proshop. We appreciate your business and we are committed to
                        ensuring that you receive the best service possible. Below are the details of your order:</p>
        
                    <section>
                        ${orderItems.map(
                          (item) => `
                        <ul>
                            <li><b>Product name:</b> ${item.name}</li>
                            <li><b>Quantity:</b> ${item.qty}</li>
                            <li><b>Total amount:</b> $${item.price}</li>
                        </ul>
                        `
                        )}
                    </section>
        
                    <p>This order will be delivered to the following address:</p>
        
                    <ul>
                        <li>${address}, ${city}, ${country} ${postalCode}</li>
                    </ul>
        
                    <h3>Password Pin Details</h3>
        
                    <p>Your order will be delivered by our package delivery robot. To open the robot when it arrives at your
                        location, please use the password pin below:</p>
        
                    <h2 style="text-align: center;">${pin}</h2>
                </section>
            </main>
        </body>
    
</html>`;
}

export default orderDeliveryInfo;
