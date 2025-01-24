import './ContainerProduct.css'

function ContainerProduct() {
  return (
    <section className='product-container'>
      <div><p>id</p></div>
      <div><image></image></div>
      <div><p>Name</p></div>
      <div><p>Description</p></div>
      <div><p>Category</p></div>
      <div><p>Price</p></div>
      <div><p>Available</p></div>
      <div><Button className='edit button-container' variant="outline"><img></img></Button></div>
      <div><Button className='delete button-container' variant="outline"><img></img></Button></div>
    </section>
  );
}

export default ContainerProduct;