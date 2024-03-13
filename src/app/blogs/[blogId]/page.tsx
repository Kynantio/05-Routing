type Props = {
    params: {
          blogId: string
    }
  }
  
  export default function ProductDetails({ params }: Props) {
    return (
          <h1>Details about blog {params.blogId}</h1>
    )
  }