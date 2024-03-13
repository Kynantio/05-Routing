type Props = {
    params: {
          review1: string
    }
  }
  
  export default function ReviewDetails({ params }: Props) {
    return (
          <h1>Details about review {params.review1}</h1>
    )
  }