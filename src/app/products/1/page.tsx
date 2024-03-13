type Props = {
    params: {
          product1: string
    }
  }
  
  export default function ProductDetails({ params }: Props) {
    return (
          <h1>Details about product {params.product1}</h1>
    )
  }